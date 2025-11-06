<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Select from '$lib/components/ui/select';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import { generateThemeCode } from '$lib/utils/theme-style-generator';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Copy } from '@lucide/svelte';

	const userConfig = UserConfigContext.get();

	let colorFormat = $derived(userConfig.settings.colorFormat);
	const themeCSS = $derived(
		generateThemeCode(userConfig.settings.activeTheme.cssVars, colorFormat)
	);
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="flex-1 cursor-pointer gap-2" size="lg">
				<Copy class="h-4 w-4" />
				Copy
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[780px]">
		<Dialog.Header>
			<Dialog.Title>Theme Variables</Dialog.Title>
			<Dialog.Description>
				Copy these CSS variables to use your theme in other projects.
			</Dialog.Description>
		</Dialog.Header>
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
					<Select.Root type="single" bind:value={colorFormat}>
						<Select.Trigger
							class="w-fit cursor-pointer gap-1 border bg-card outline-hidden focus:border-border focus:ring-transparent focus-visible:border"
						>
							{colorFormat.toUpperCase() || 'Format'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="oklch">OKLCH</Select.Item>
							<Select.Item value="hsl">HSL</Select.Item>
							<Select.Item value="rgb">RGB</Select.Item>
							<Select.Item value="hex">HEX</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<CodeBlock code={themeCSS} lang="css" />
				<CopyButton
					text={themeCSS}
					class="dark"
					onCopied={() => userConfig.setSettings({ colorFormat })}
				/>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
