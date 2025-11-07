<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { generateThemeCode } from '$lib/utils/theme-style-generator';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Copy } from '@lucide/svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { ComponentCodeViewerContext } from '$lib/components/component-code-viewer/component-code-viewer.svelte';
	import ComponentCodeViewerCode from '$lib/components/component-code-viewer/component-code-viewer-code.svelte';
	import { highlightCode } from '$lib/utils/highlight-code';
	import PmAddComp from '../pm-add-comp.svelte';
	import { presetThemesMap } from '$lib/assets/data/preset-themes';
	import PmBlock from '../pm-block.svelte';
	import * as Select from '$lib/components/ui/select';

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

	// Create a mock "item" structure for the component viewer
	const mockItem = $derived({
		name: 'Theme Variables',
		files: [
			{
				target: FILE_NAME,
				content: themeCSS,
				highlightedContent: highlightedThemeCSS || null
			}
		]
	});

	let activeFile = $state<string>(FILE_NAME);
	let resizablePaneRef = $state(null!);
	let activeFileCodeToCopy = $state<string>('');

	ComponentCodeViewerContext.set({
		get item() {
			return mockItem as any;
		},
		get activeFile() {
			return activeFile;
		},
		set activeFile(value) {
			activeFile = value;
		},
		get resizablePaneRef() {
			return resizablePaneRef;
		},
		set resizablePaneRef(value) {
			resizablePaneRef = value;
		},
		get tree() {
			return null;
		},
		get highlightedFiles() {
			return mockItem.files as any;
		},
		get activeFileCodeToCopy() {
			return activeFileCodeToCopy;
		},
		set activeFileCodeToCopy(value) {
			activeFileCodeToCopy = value;
		},
		showTree: false
	});
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
				Copy these CSS variables to use your theme in other projects.
			</Dialog.Description>
		</Dialog.Header>

		{#if activeTheme.name in presetThemesMap}
			<PmAddComp name={activeTheme.name} />
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

		<div
			class="group/block-view-wrapper flex w-full min-w-0 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col [&_pre]:!px-4"
			style="--height: {height};"
		>
			<ComponentCodeViewerCode />
		</div>
		<Dialog.Close class="sr-only">Close</Dialog.Close>
	</Dialog.Content>
</Dialog.Root>
