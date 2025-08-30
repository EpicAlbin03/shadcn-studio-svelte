<!-- <script lang="ts">
	import { Hand, Trash2 } from '@lucide/svelte';
	import type { ThemePreset, ThemeStyleProps } from '$lib/types/theme';
	import { Button } from '$lib/components/ui/button';
	import { toast } from '$lib/utils/toast.svelte';
	import SaveThemeDialog from './SaveThemeDialog.svelte';
	import { themeSettings } from '$lib/contexts/theme-settings.svelte';
	import { presetThemes } from '$lib/assets/data/preset-themes';

	const settings = $derived(themeSettings.theme);
	const updateSettings = $derived(themeSettings.updateSettings);
	const hasStateChanged = $derived(themeSettings.hasStateChanged);
	let isHolding = $state(false);
	let holdTimeout = $state<number | null>(null);
	let isDialogOpen = $state(false);

	const handleHoldStart = () => {
		// Check for theme changes first
		if (!hasStateChanged()) {
			toast('info', 'No theme changes to save. Make some changes first!', {
				position: 'top-right'
			});

			return;
		}

		isHolding = true;

		const timeout = setTimeout(() => {
			isDialogOpen = true;
			isHolding = false;
		}, 1000);

		holdTimeout = timeout;
	};

	const handleHoldEnd = () => {
		isHolding = false;

		if (holdTimeout) {
			clearTimeout(holdTimeout);
		}
	};

	const handleSaveTheme = (name: string): boolean => {
		// Ensure we have styles to save and they're different from default
		if (!settings.theme.styles) {
			toast('error', 'No theme styles to save', {
				position: 'top-right'
			});

			return false;
		}

		if (!hasStateChanged()) {
			toast('error', 'No changes detected in the theme', {
				position: 'top-right'
			});

			return false;
		}

		// Normalize the input name by removing extra spaces and converting to lowercase
		const normalizedInputName = name.trim().toLowerCase().replace(/\s+/g, '-');

		const newTheme = {
			name: name.trim(), // Keep the original name for display
			styles: settings.theme.styles as ThemePreset
		};

		// Get existing saved themes
		const savedThemes = settings.savedThemes || [];

		// Check for duplicate names in saved themes (normalized comparison)
		const savedThemeExists = savedThemes.some(
			(theme) => theme.name.toLowerCase().replace(/\s+/g, '-') === normalizedInputName
		);

		// Check for duplicate names in presets (normalized comparison)
		const presetExists = Object.keys(presetThemes).some(
			(presetName) => presetName.toLowerCase().replace(/\s+/g, '-') === normalizedInputName
		);

		// Check if it matches the default theme name
		const isDefault = 'default' === normalizedInputName;

		if (savedThemeExists || presetExists || isDefault) {
			toast('error', 'Theme name already exists in saved themes or presets', {
				position: 'top-right'
			});

			return false;
		}

		// Add new theme and update settings
		updateSettings({
			theme: {
				...settings.theme,
				preset: name.trim() // Add theme name to preset when saving
			},
			savedThemes: [...savedThemes, newTheme]
		});

		toast('success', `Your theme "${name.trim()}" has been saved.`, {
			position: 'top-right'
		});

		return true;
	};

	const handleApplyTheme = (theme: { name: string; styles: ThemePreset }) => {
		updateSettings({
			theme: {
				preset: theme.name, // Set the preset to theme name when applying
				styles: theme.styles
			}
		});

		toast('success', `Theme "${theme.name}" has been applied.`, {
			position: 'top-right'
		});
	};

	const handleDeleteTheme = (e: MouseEvent, themeName: string) => {
		e.stopPropagation(); // Prevent theme application when deleting
		const savedThemes = settings.savedThemes || [];
		const updatedThemes = savedThemes.filter((theme) => theme.name !== themeName);

		// If the deleted theme was the current preset, just remove the preset name but keep the styles
		if (settings.theme.preset === themeName) {
			updateSettings({
				theme: {
					...settings.theme,
					preset: null // Remove the preset name but keep the styles
				},
				savedThemes: updatedThemes
			});
		} else {
			// Just update the saved themes list
			updateSettings({
				savedThemes: updatedThemes
			});
		}

		toast('success', `Theme "${themeName}" has been removed.`, {
			position: 'top-right'
		});
	};

	const getThemeColor = (theme: { styles: ThemePreset }, color: keyof ThemeStyleProps) => {
		return theme.styles?.light?.[color] || theme.styles?.dark?.[color] || '#000000';
	};
</script>

<Button
	variant="outline"
	class={`relative w-full cursor-pointer gap-2 overflow-hidden bg-muted/50 hover:bg-muted/80 ${
		isHolding ? 'bg-primary/10' : ''
	}`}
	onmousedown={handleHoldStart}
	onmouseup={handleHoldEnd}
	onmouseleave={handleHoldEnd}
	ontouchstart={handleHoldStart}
	ontouchend={handleHoldEnd}
>
	<Hand class="h-4 w-4" />
	Hold to save theme
	{#if isHolding}
		<div
			class="absolute inset-0 bg-primary/20"
			style="animation: water-rise 1s linear; clipPath: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); animationFillMode: forwards;"
		></div>
	{/if}
</Button>

{#if settings.savedThemes && settings.savedThemes.length > 0}
	<div class="space-y-3">
		<h3 class="text-sm font-medium text-muted-foreground">My themes</h3>
		<div class="grid gap-2">
			{#each settings.savedThemes as theme (theme.name)}
				<button
					onclick={() => handleApplyTheme(theme)}
					class="group flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg border bg-card px-2 py-1 transition-colors hover:bg-accent/5 sm:max-w-[22rem]"
				>
					<div class="flex items-center">
						<div class="relative size-[26px] rounded border bg-background p-1">
							<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
								<div
									class="rounded-[2px]"
									style={`backgroundColor: ${getThemeColor(theme, 'primary')}`}
								></div>
								<div
									class="rounded-[2px]"
									style={`backgroundColor: ${getThemeColor(theme, 'destructive')}`}
								></div>
								<div
									class="rounded-[2px]"
									style={`backgroundColor: ${getThemeColor(theme, 'secondary')}`}
								></div>
								<div
									class="rounded-full"
									style={`backgroundColor: ${getThemeColor(theme, 'accent')}`}
								></div>
							</div>
						</div>
					</div>
					<span class="flex-1 truncate text-[13px] font-medium">{theme.name}</span>
					<Button
						variant="ghost"
						size="icon"
						class="h-8 w-8 text-muted-foreground/60 hover:text-destructive"
						onclick={(e: MouseEvent) => handleDeleteTheme(e, theme.name)}
					>
						<Trash2 class="h-4 w-4" />
					</Button>
				</button>
			{/each}
		</div>
	</div>
{/if}

<SaveThemeDialog
	isOpen={isDialogOpen}
	onClose={() => (isDialogOpen = false)}
	onSave={handleSaveTheme}
/>

<style>
	@keyframes water-rise {
		0% {
			clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
		}
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
</style> -->
