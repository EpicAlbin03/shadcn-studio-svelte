<script lang="ts">
	import { Hand } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import SaveThemeDialog from './SaveThemeDialog.svelte';
	import { presetThemesMap } from '$lib/assets/data/preset-themes';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { toast } from 'svelte-sonner';
	import type { ThemeStyles } from '$lib/types/theme';

	const userConfig = UserConfigContext.get();

	let isHolding = $state(false);
	let holdTimeout = $state<ReturnType<typeof setTimeout> | null>(null);
	let isDialogOpen = $state(false);

	function handleHoldStart() {
		// Check for theme changes first
		if (!userConfig.hasThemeChanged()) {
			toast.info('No theme changes to save. Make some changes first!');
			return;
		}

		isHolding = true;

		const timeout = setTimeout(() => {
			isDialogOpen = true;
			isHolding = false;
		}, 1000);

		holdTimeout = timeout;
	}

	function handleHoldEnd() {
		isHolding = false;

		if (holdTimeout) {
			clearTimeout(holdTimeout);
		}
	}

	function handleSaveTheme(name: string): boolean {
		// Ensure we have styles to save and they're different from default
		if (!userConfig.activeTheme.cssVars) {
			toast.error('No theme styles to save');
			return false;
		}

		if (!userConfig.hasThemeChanged()) {
			toast.error('No changes detected in the theme');
			return false;
		}

		// Normalize the input name by removing extra spaces and converting to lowercase
		const normalizedInputName = name.trim().toLowerCase().replace(/\s+/g, '-');

		const newTheme = {
			name: name.trim(), // Keep the original name for display
			label: name.trim(),
			cssVars: userConfig.activeTheme.cssVars as ThemeStyles
		};

		// Get existing saved themes
		const savedThemes = userConfig.savedThemes || [];

		// Check for duplicate names in saved themes (normalized comparison)
		const savedThemeExists = savedThemes.some(
			(theme) => theme.name.toLowerCase().replace(/\s+/g, '-') === normalizedInputName
		);

		// Check for duplicate names in presets (normalized comparison)
		const presetExists = Object.keys(presetThemesMap).some(
			(presetName) => presetName.toLowerCase().replace(/\s+/g, '-') === normalizedInputName
		);

		// Check if it matches the default theme name
		const isDefault = 'default' === normalizedInputName;

		if (savedThemeExists || presetExists || isDefault) {
			toast.error('Theme name already exists in saved themes or presets');
			return false;
		}

		// Add new theme and update settings
		userConfig.setActiveTheme(newTheme);
		userConfig.addSavedTheme(newTheme);

		toast.success(`Your theme "${name.trim()}" has been saved.`);

		return true;
	}
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
		<div class="water-rise-animation absolute inset-0 bg-primary/20"></div>
	{/if}
</Button>

<SaveThemeDialog
	isOpen={isDialogOpen}
	onClose={() => (isDialogOpen = false)}
	onSave={handleSaveTheme}
/>

<style>
	.water-rise-animation {
		animation: water-rise 1s linear forwards;
		clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
	}

	@keyframes water-rise {
		0% {
			clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
		}
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
</style>
