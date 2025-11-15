<script lang="ts">
	import { Dices } from '@lucide/svelte';
	import type { ThemeStyleProps, ThemeStyles } from '$lib/types/theme';
	import { Button } from '$lib/components/ui/button';
	import * as Select from '$lib/components/ui/select';
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
	import { toast } from 'svelte-sonner';

	const userConfig = UserConfigContext.get();
	const activeTheme = $derived(userConfig.settings.activeTheme);
	const colorFormat = $derived(userConfig.settings.colorFormat);
	const savedThemes = $derived(userConfig.savedThemes);

	const label = $derived.by(() => {
		if (activeTheme.name in presetThemesMap) {
			return activeTheme.label;
		} else if (savedThemes.length > 0) {
			return savedThemes.find((t) => t.name === activeTheme.name)?.label;
		} else {
			return 'Choose Theme';
		}
	});

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

	function getThemeColor(
		theme: { cssVars: ThemeStyles } = presetThemesMap['default'],
		color: keyof ThemeStyleProps
	) {
		return theme?.cssVars.light?.[color] || theme?.cssVars.dark?.[color] || '#000000';
	}

	// Randomize the preset
	function randomize() {
		const random = Math.floor(Math.random() * presetThemes.length);
		const themeName = presetThemes[random].name as PresetThemeName;
		userConfig.setSettings({ activeTheme: presetThemesMap[themeName] });
	}
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
	<Select.Root
		type="single"
		bind:value={
			() => label,
			(v) => {
				const theme =
					presetThemesMap[v as PresetThemeName] ?? savedThemes.find((t) => t.name === v);
				userConfig.setSettings({ activeTheme: theme });
				toast.success(`Theme "${theme.name}" has been applied.`);
			}
		}
	>
		<Select.Trigger class="h-12 w-full cursor-pointer capitalize">
			{label}
		</Select.Trigger>
		<Select.Content>
			{#if savedThemes.length > 0}
				<Select.Group>
					<Select.Label>My Themes</Select.Label>
					{#each savedThemes as theme (theme.name)}
						<Select.Item value={theme.name} class="flex items-center gap-3">
							<!-- Theme Color Grid Icon -->
							<div class="flex items-center">
								<div class="relative size-[26px] rounded border bg-background p-1">
									<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
										<div
											class="rounded-[2px]"
											style="background-color: {getThemeColor(theme, 'primary')}"
										></div>
										<div
											class="rounded-[2px]"
											style="background-color: {getThemeColor(theme, 'destructive')}"
										></div>
										<div
											class="rounded-[2px]"
											style="background-color: {getThemeColor(theme, 'secondary')}"
										></div>
										<div
											class="rounded-full"
											style="background-color: {getThemeColor(theme, 'accent')}"
										></div>
									</div>
								</div>
							</div>
							<span class="capitalize">{theme.label}</span>
						</Select.Item>
					{/each}
				</Select.Group>
			{/if}
			<Select.Group>
				<Select.Label>Pre-built Themes</Select.Label>
				{#each orderedPresets as theme}
					{@const badge = theme.meta?.badge}
					<Select.Item value={theme.name} class="flex items-center gap-3">
						<!-- Theme Color Grid Icon -->
						<div class="flex items-center">
							<div class="relative size-[26px] rounded border bg-background p-1">
								<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
									<div
										class="rounded-[2px]"
										style="background-color: {getThemeColor(theme, 'primary')}"
									></div>
									<div
										class="rounded-[2px]"
										style="background-color: {getThemeColor(theme, 'destructive')}"
									></div>
									<div
										class="rounded-[2px]"
										style="background-color: {getThemeColor(theme, 'secondary')}"
									></div>
									<div
										class="rounded-full"
										style="background-color: {getThemeColor(theme, 'accent')}"
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
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
