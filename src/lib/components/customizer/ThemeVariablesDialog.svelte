<script lang="ts">
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
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Copy } from '@lucide/svelte';

	const userConfig = UserConfigContext.get();

	let colorFormat = $derived<ColorFormat>(userConfig.colorFormat);
	const themeCSS = $derived(generateThemeCode(userConfig.activeTheme.cssVars, colorFormat));
</script>

<Dialog>
	<DialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="flex-1 cursor-pointer gap-2" size="lg">
				<Copy class="h-4 w-4" />
				Copy
			</Button>
		{/snippet}
	</DialogTrigger>
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
			{/if} -->
			<div class="relative overflow-hidden rounded-md border bg-sidebar">
				<div class="sticky top-0 w-full p-2">
					<Select type="single" bind:value={colorFormat}>
						<SelectTrigger
							class="w-fit cursor-pointer gap-1 border bg-card outline-hidden focus:border-border focus:ring-transparent focus-visible:border"
						>
							{colorFormat.toUpperCase() || 'Format'}
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
				<CopyButton
					source={themeCSS}
					class="dark"
					toast="Theme variables"
					onCopied={() => userConfig.setColorFormat(colorFormat)}
				/>
			</div>
		</div>
	</DialogContent>
</Dialog>
