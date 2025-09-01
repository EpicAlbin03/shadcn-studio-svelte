<script lang="ts">
	import { Dices } from '@lucide/svelte';
	import type { ThemeStyleProps } from '$lib/types/theme';
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
	import { cn } from '$lib/utils';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import {
		defaultTheme,
		presetThemes,
		presetThemesMap,
		type PresetThemeName
	} from '$lib/assets/data/preset-themes';

	const userConfig = UserConfigContext.get();

	const label = $derived(
		userConfig.activeTheme.name in presetThemesMap ? userConfig.activeTheme.label : 'Choose Theme'
	);

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

	const getThemeColor = (name: PresetThemeName, color: keyof ThemeStyleProps) => {
		// If it's default theme, use the first preset as default
		const theme = name === 'default' ? presetThemesMap['default'] : presetThemesMap[name];

		return theme?.cssVars.light?.[color] || theme?.cssVars.dark?.[color] || '#000000';
	};

	// Randomize the preset
	const randomize = () => {
		const random = Math.floor(Math.random() * presetThemes.length);
		const themeName = presetThemes[random].name as PresetThemeName;
		userConfig.setActiveTheme(presetThemesMap[themeName]);
	};
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium">Themes</h3>
		<div class="flex items-center gap-2">
			<CssImportDialog />
			<Button variant="outline" onclick={randomize} class="cursor-pointer">
				<Dices class="size-4" />
				Random
			</Button>
		</div>
	</div>
	<Select
		type="single"
		bind:value={
			() => label, (v) => userConfig.setActiveTheme(presetThemesMap[v as PresetThemeName])
		}
	>
		<SelectTrigger class="h-12 w-full cursor-pointer">
			{label}
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Pre Built Themes</SelectLabel>
				{#each orderedPresets as theme}
					{@const badge = theme.meta?.badge}
					{@const name = theme.name as PresetThemeName}
					<SelectItem value={name} class="flex items-center gap-3">
						<!-- Theme Color Grid Icon -->
						<div class="flex items-center">
							<div class="relative size-[26px] rounded border bg-background p-1">
								<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(name, 'primary')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(name, 'destructive')}`}
									></div>
									<div
										class="rounded-[2px]"
										style={`background-color: ${getThemeColor(name, 'secondary')}`}
									></div>
									<div
										class="rounded-full"
										style={`background-color: ${getThemeColor(name, 'accent')}`}
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
