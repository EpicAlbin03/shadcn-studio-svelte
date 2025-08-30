<script lang="ts">
	import { Dices, FileCode } from '@lucide/svelte';
	import type { Theme, ThemeStyleProps } from '$lib/types/theme';
	import { Button } from '$lib/components/ui/button';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { Badge } from '$lib/components/ui/badge';
	import CssImportDialog from './CssImportDialog.svelte';
	import { toast } from '$lib/utils/toast.svelte';
	import { cn } from '$lib/utils';
	import {
		parseCssInput,
		parseLetterSpacing,
		parseShadowVariables
	} from '$lib/utils/parse-css-input';
	import { setTheme } from 'mode-watcher';
	import { type ActiveTheme, UserConfigContext } from '$lib/config/user-config.svelte';
	import { defaultTheme, presetThemes, presetThemesMap } from '$lib/assets/data/preset-themes';
	import { setPresetTheme } from '$lib/utils/theme';

	const userConfig = UserConfigContext.get();

	const label = $derived(presetThemesMap[userConfig.current.activeTheme].label);

	const orderedPresets = $derived.by(() => {
		// First get all preset entries
		const allPresets = Object.values(presetThemesMap);

		// Separate presets with badges and those without
		const presetsWithBadges = allPresets.filter((preset) => preset?.meta?.badge);
		const presetsWithoutBadges = allPresets.filter((preset) => !preset?.meta?.badge);

		// Sort each group alphabetically by label
		presetsWithBadges.sort((a, b) =>
			a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
		);
		presetsWithoutBadges.sort((a, b) =>
			a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
		);

		// Always keep 'default' as the first item in the list without badges
		return [
			defaultTheme,
			...presetsWithBadges,
			...presetsWithoutBadges.filter((preset) => preset.name !== 'default')
		];
	});

	const getThemeColor = (name: string, color: keyof ThemeStyleProps) => {
		// If it's default theme, use the first preset as default
		const theme = name === 'default' ? presetThemesMap['default'] : presetThemesMap[name];

		return theme?.cssVars.light?.[color] || theme?.cssVars.dark?.[color] || '#000000';
	};

	// Randomize the preset
	const randomize = () => {
		const random = Math.floor(Math.random() * presetThemes.length);
		const themeName = presetThemes[random].name as ActiveTheme;
		setPresetTheme(userConfig, themeName);
	};

	// const handleCssImport = (css: string) => {
	// 	const { lightColors, darkColors } = parseCssInput(css);
	// 	const { lightShadows, darkShadows } = parseShadowVariables(css);
	// 	const letterSpacing = parseLetterSpacing(css);

	// 	// Always preserve both themes and merge with new ones
	// 	const currentLightStyles = settings.theme.styles?.light || {};
	// 	const currentDarkStyles = settings.theme.styles?.dark || {};

	// 	const updatedSettings = {
	// 		...settings,
	// 		theme: {
	// 			...settings.theme,
	// 			preset: null, // Reset preset as we're using custom theme
	// 			styles: {
	// 				light: {
	// 					...currentLightStyles,
	// 					...lightColors,
	// 					...lightShadows,
	// 					'letter-spacing': letterSpacing
	// 				},
	// 				dark: {
	// 					...currentDarkStyles,
	// 					...darkColors,
	// 					...darkShadows
	// 				}
	// 			}
	// 		}
	// 	};

	// 	// Update settings and persist to storage
	// 	updateSettings(updatedSettings);

	// 	// Show success message with details
	// 	toast('success', 'Theme imported successfully', {
	// 		description: 'Both light and dark mode styles have been updated',
	// 		position: 'top-right'
	// 	});
	// };
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium">Themes</h3>
		<div class="flex items-center gap-2">
			<!-- <Button variant="outline" onclick={() => (cssImportOpen = true)} class="cursor-pointer">
				<FileCode class="size-4" />
				Import
			</Button>
			<CssImportDialog open={cssImportOpen} onImport={handleCssImport} /> -->
			<Button variant="outline" onclick={randomize} class="cursor-pointer">
				<Dices class="size-4" />
				Random
			</Button>
		</div>
	</div>
	<Select
		type="single"
		bind:value={() => userConfig.current.activeTheme, (v) => setPresetTheme(userConfig, v)}
	>
		<SelectTrigger class="h-12 w-full cursor-pointer">
			{label || 'Choose Theme'}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Pre Built Themes</SelectLabel>
				{#each orderedPresets as theme}
					{@const badge = theme.meta?.badge}
					<SelectItem value={theme.name} class="flex items-center gap-3">
						<!-- Theme Color Grid Icon -->
						<div class="flex items-center">
							<div class="relative size-[26px] rounded border bg-background p-1">
								<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(theme.name, 'primary')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(theme.name, 'destructive')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(theme.name, 'secondary')}`}
									></div>
									<div
										class="rounded-full"
										style={`background-color: ${getThemeColor(theme.name, 'accent')}`}
									></div>
								</div>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<span>{theme.label}</span>
							{#if badge}
								<Badge
									variant={badge === 'New' ? 'default' : 'outline'}
									class={cn('rounded-full', {
										'border-destructive bg-destructive/10 text-destructive': badge === 'Trending'
									})}
								>
									{badge}
								</Badge>
							{/if}
						</div>
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
