<script lang="ts">
	import type { ThemeStyleProps, ThemeStyles } from '$lib/types/theme';
	import type { ColorFormat } from '$lib/utils/color-converter';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import CodeBlock from '$lib/components/code-block/CodeBlock.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { generateThemeCode } from '$lib/utils/theme-style-generator';
	import type { Snippet } from 'svelte';
	import { presetThemes } from '$lib/assets/data/preset-themes';

	type Props = {
		lightTheme?: Partial<ThemeStyleProps>;
		darkTheme?: Partial<ThemeStyleProps>;
		trigger?: Snippet;
		activeTheme?: string | null;
	};

	let { lightTheme, darkTheme, trigger, activeTheme }: Props = $props();

	// let colorFormat = $state<ColorFormat>('oklch');

	// const themeStyles: ThemeStyles = {
	// 	light: { ...defaultLightThemeStyles, ...lightTheme },
	// 	dark: { ...defaultDarkThemeStyles, ...darkTheme }
	// };

	// const themeCSS = $derived(generateThemeCode(themeStyles, colorFormat));

	// // Check if the active theme exists in presets
	// const isPresetTheme = activeTheme ? activeTheme in presetThemes : false;
</script>

<Dialog>
	<DialogTrigger>{@render trigger?.()}</DialogTrigger>
	<DialogContent class="sm:max-w-[780px]">
		<DialogHeader>
			<DialogTitle>Theme Variables</DialogTitle>
			<DialogDescription
				>Copy these CSS variables to use your theme in other projects.</DialogDescription
			>
		</DialogHeader>
		<div class="flex min-w-0 flex-col gap-6">
			<!-- Theme Installation Command - Only show for preset themes -->
			<!-- {#if activeTheme && isPresetTheme}
				<div class="overflow-hidden rounded-md border">
					<img
						src="https://cdn.shadcnstudio.com/ss-assets/cli/cli-light.png"
						alt="CLI Light"
						class="dark:hidden"
					/>
					<img
						src="https://cdn.shadcnstudio.com/ss-assets/cli/cli-dark.png"
						alt="CLI Dark"
						class="hidden dark:block"
					/>
				</div>
			{/if}
			<div class="relative overflow-hidden rounded-md border bg-sidebar">
				<div class="sticky top-0 w-full p-2">
					<Select type="single" bind:value={colorFormat}>
						<SelectTrigger
							class="w-fit cursor-pointer gap-1 border bg-card outline-hidden focus:border-border focus:ring-transparent focus-visible:border"
						>
							{colorFormat || 'Format'}
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="oklch">OKLCH</SelectItem>
							<SelectItem value="hsl">HSL</SelectItem>
							<SelectItem value="rgb">RGB</SelectItem>
							<SelectItem value="hex">HEX</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<CodeBlock code={themeCSS} lang="css" />
				<CopyButton source={themeCSS} class="dark" toast="Theme variables" />
			</div> -->
		</div>
	</DialogContent>
</Dialog>
