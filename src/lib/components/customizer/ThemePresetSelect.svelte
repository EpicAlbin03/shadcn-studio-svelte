<script lang="ts">
	import { Dices, FileCode } from '@lucide/svelte';
	import type { ThemePreset, ThemeStyleProps } from '$lib/types/theme';
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
	import { defaultThemeState } from '$lib/config/theme';
	import { themeSettings } from '$lib/contexts/theme-settings.svelte';
	import { toast } from '$lib/utils/toast.svelte';
	import { cn } from '$lib/utils';
	import {
		parseCssInput,
		parseLetterSpacing,
		parseShadowVariables
	} from '$lib/utils/parse-css-input';

	type Props = {
		presets: Record<string, ThemePreset>;
		currentPreset: string | null;
		onPresetChange: (preset: string) => void;
	};

	let { presets, currentPreset, onPresetChange }: Props = $props();

	let cssImportOpen = $state(false);
	const settings = $derived(themeSettings.theme);
	const updateSettings = $derived(themeSettings.updateSettings);

	const presetNames = $derived.by(() => {
		// First get all preset names
		const allPresets = Object.keys(presets);

		// Separate presets with badges and those without
		const presetsWithBadges = allPresets.filter((name) => presets[name]?.meta?.badge);
		const presetsWithoutBadges = allPresets.filter((name) => !presets[name]?.meta?.badge);

		// Sort each group alphabetically
		presetsWithBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
		presetsWithoutBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

		// Always keep 'default' as the first item in the list without badges
		return [
			'default',
			...presetsWithBadges,
			...presetsWithoutBadges.filter((name) => name !== 'default')
		];
	});

	const value = $derived(presetNames?.find((name) => name === currentPreset));

	// Helper function to get theme color
	const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
		// If it's default theme, use the first preset as default
		const theme = themeName === 'default' ? defaultThemeState : presets[themeName];

		return theme?.light?.[color] || theme?.dark?.[color] || '#000000';
	};

	// Helper function to get badge for a theme
	const getThemeBadge = (themeName: string) => {
		if (themeName === 'default') return null;

		return presets[themeName]?.meta?.badge || null;
	};

	// Randomize the preset
	const randomize = () => {
		const random = Math.floor(Math.random() * presetNames.length);

		onPresetChange(presetNames[random]);
	};

	const handleCssImport = (css: string) => {
		const { lightColors, darkColors } = parseCssInput(css);
		const { lightShadows, darkShadows } = parseShadowVariables(css);
		const letterSpacing = parseLetterSpacing(css);

		// Always preserve both themes and merge with new ones
		const currentLightStyles = settings.theme.styles?.light || {};
		const currentDarkStyles = settings.theme.styles?.dark || {};

		const updatedSettings = {
			...settings,
			theme: {
				...settings.theme,
				preset: null, // Reset preset as we're using custom theme
				styles: {
					light: {
						...currentLightStyles,
						...lightColors,
						...lightShadows,
						'letter-spacing': letterSpacing
					},
					dark: {
						...currentDarkStyles,
						...darkColors,
						...darkShadows
					}
				}
			}
		};

		// Update settings and persist to storage
		updateSettings(updatedSettings);

		// Show success message with details
		toast('success', 'Theme imported successfully', {
			description: 'Both light and dark mode styles have been updated',
			position: 'top-right'
		});
	};
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium">Themes</h3>
		<div class="flex items-center gap-2">
			<Button variant="outline" onclick={() => (cssImportOpen = true)} class="cursor-pointer">
				<FileCode class="size-4" />
				Import
			</Button>
			<CssImportDialog open={cssImportOpen} onImport={handleCssImport} />
			<Button variant="outline" onclick={randomize} class="cursor-pointer">
				<Dices class="size-4" />
				Random
			</Button>
		</div>
	</div>
	<Select type="single" value={value || ''} onValueChange={onPresetChange}>
		<SelectTrigger class="h-12 w-full cursor-pointer">
			{value || 'Choose Theme'}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Pre Built Themes</SelectLabel>
				{#each presetNames as name}
					{@const badge = getThemeBadge(name)}
					<SelectItem value={name} class="flex items-center gap-3">
						<!-- Theme Color Grid Icon -->
						<div class="flex items-center">
							<div class="relative size-[26px] rounded border bg-background p-1">
								<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
									<div
										class="rounded-[2px]"
										style={`backgroundColor: ${getThemeColor(name, 'primary')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`backgroundColor: ${getThemeColor(name, 'destructive')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`backgroundColor: ${getThemeColor(name, 'secondary')}`}
									></div>
									<div
										class="rounded-full"
										style={`backgroundColor: ${getThemeColor(name, 'accent')}`}
									></div>
								</div>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<span>{name.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
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
