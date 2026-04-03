<script lang="ts">
	import CopyIcon from '@lucide/svelte/icons/copy';
	import { presetThemesMap } from '$lib/assets/data/preset-themes';
	import { CodeBlock } from '$lib/components/code-block';
	import { Button } from '$lib/components/ui/button';
	import { highlightCode } from '$lib/components/ui/code';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Select from '$lib/components/ui/select';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { generateThemeCode } from '$lib/theme/theme-style-generator';
	import PmAddComp from '../pm-add-comp.svelte';
	import PmBlock from '../pm-block.svelte';

	const userConfig = UserConfigContext.get();

	const FILE_NAME = 'app.css';

	let colorFormat = $derived(userConfig.settings.colorFormat);
	const activeTheme = $derived(userConfig.settings.activeTheme);
	const themeCSS = $derived(generateThemeCode(activeTheme.cssVars, colorFormat));

	const isMobile = new IsMobile();
	const height = $derived(isMobile.current ? '75dvh' : 'calc(100svh - (var(--header-height) * 6))');
	let contentRef = $state<HTMLElement | null>(null);

	let highlightedThemeCSS = $state<string>('');

	$effect(() => {
		if (!themeCSS) return;

		highlightCode(themeCSS, 'css').then((highlighted) => {
			highlightedThemeCSS = highlighted;
		});
	});

	const files = $derived([
		{
			target: FILE_NAME,
			content: themeCSS,
			highlightedContent: highlightedThemeCSS || undefined,
			type: 'registry:file'
		}
	]);
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="flex-1 cursor-pointer gap-2" size="lg">
				<CopyIcon class="h-4 w-4" />
				CopyIcon
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content
		bind:ref={contentRef}
		class="flex min-w-0 flex-col gap-4 sm:max-w-[90%]"
		onOpenAutoFocus={(e) => {
			if (!contentRef) return;
			const activeItem = contentRef.querySelector('button[data-active=true]') as HTMLElement | null;
			if (activeItem) {
				e.preventDefault();
				activeItem.focus();
			}
		}}
	>
		<Dialog.Header>
			<Dialog.Title class="text-left">Theme Variables</Dialog.Title>
			<Dialog.Description>
				CopyIcon these CSS variables to use your theme in other projects.
			</Dialog.Description>
		</Dialog.Header>

		{#if activeTheme.name in presetThemesMap}
			<PmAddComp name={`themes/${activeTheme.name}`} />
		{:else}
			<PmBlock command="CLI is only available for pre-built themes" />
		{/if}

		<Select.Root
			type="single"
			bind:value={() => colorFormat, (v) => userConfig.setSettings({ colorFormat: v })}
		>
			<Select.Trigger
				class="ml-auto w-fit cursor-pointer gap-1 border bg-card outline-hidden focus:border-border focus:ring-transparent focus-visible:border"
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

		<CodeBlock
			{files}
			{height}
			hideFileTree
			class="group/block-view-wrapper w-full min-w-0 [&_pre]:px-4!"
		/>
		<Dialog.Close class="sr-only">Close</Dialog.Close>
	</Dialog.Content>
</Dialog.Root>
