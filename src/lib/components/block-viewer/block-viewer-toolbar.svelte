<script lang="ts">
	import FullscreenIcon from '@lucide/svelte/icons/fullscreen';
	import MonitorIcon from '@lucide/svelte/icons/monitor';
	import RotateCcwIcon from '@lucide/svelte/icons/rotate-ccw';
	import SmartphoneIcon from '@lucide/svelte/icons/smartphone';
	import TabletIcon from '@lucide/svelte/icons/tablet';
	import TerminalIcon from '@lucide/svelte/icons/terminal';
	import { page } from '$app/state';
	import CopyPrompt from '$lib/components/copy-prompt.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { CopyButton } from '$lib/components/ui/copy-button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { PUBLIC_URL } from '$lib/config/site-config';
	import { UserConfigContext } from '$lib/config/user-config.svelte.js';
	import type { HighlightedCodeBlock } from '$lib/server/registry/highlighted-code-blocks';
	import { NEW_BLOCKS } from '$lib/utils/blocks';
	import { getCopyPromptText } from '$lib/utils/copy-prompt';
	import { getCommand } from '$lib/utils/package-manager.js';
	import { BlockViewerContext } from './block-viewer.svelte';

	const ctx = BlockViewerContext.get();
	const userConfig = UserConfigContext.get();

	const packageManager = $derived(userConfig.settings.packageManager);
	const blockName = $derived(ctx.item.name);
	const source = $derived(ctx.item as HighlightedCodeBlock);

	const categorySlug = $derived.by(() => {
		const match = page.url.pathname.match(/\/blocks\/([^/]+)/);
		return match ? match[1] : '';
	});

	const addCommand = $derived(
		getCommand(
			userConfig.settings.packageManager,
			'execute',
			`shadcn-svelte@latest add ${PUBLIC_URL}/r/${blockName}.json`
		)
	);

	const command = $derived(addCommand.command + ' ' + addCommand.args.join(' '));
	const copyPromptText = $derived(
		getCopyPromptText(packageManager, blockName, categorySlug, source, true)
	);
	const isNew = $derived(NEW_BLOCKS.includes(blockName));
</script>

<div class="hidden w-full items-center gap-2 pl-2 md:pr-6 lg:flex">
	<div class="flex shrink-0 items-center gap-3">
		<Tabs.Root bind:value={ctx.view} class="hidden shrink-0 lg:flex">
			<Tabs.List
				class="grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs"
			>
				<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
				<Tabs.Trigger value="code">Code</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
		<CopyPrompt size="icon-sm" variant="ghost" text={copyPromptText} />
	</div>

	<Separator orientation="vertical" class="mx-1 h-4! shrink-0" />

	<a
		href="#{blockName}"
		class="shrink-0 pr-1 text-center text-sm font-medium underline-offset-2 hover:underline md:text-left"
	>
		{ctx.item.description?.replace(/\.$/, '')}
	</a>
	{#if isNew}
		<Badge class="rounded bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			New
		</Badge>
	{/if}

	<div class="ml-auto flex min-w-0 items-center gap-2">
		<div class="h-8 shrink-0 items-center gap-1.5 rounded-md border p-1 shadow-none">
			<ToggleGroup.Root
				type="single"
				value="100"
				onValueChange={(value) => {
					if (ctx.resizablePaneRef) {
						ctx.resizablePaneRef.resize(parseInt(value));
					}
				}}
				class="gap-1 *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
			>
				<ToggleGroup.Item value="100" title="Desktop">
					<MonitorIcon />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="60" title="Tablet">
					<TabletIcon />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="30" title="Mobile">
					<SmartphoneIcon />
				</ToggleGroup.Item>

				<Separator orientation="vertical" class="h-4!" />

				<Button
					size="icon"
					variant="ghost"
					class="size-6 rounded-sm p-0"
					title="Open in New Tab"
					href="/view/{blockName}"
					target="_blank"
				>
					<span class="sr-only">Open in New Tab</span>
					<FullscreenIcon />
				</Button>
				<Separator orientation="vertical" class="h-4!" />
				<Button
					size="icon"
					variant="ghost"
					class="size-6 rounded-sm p-0"
					title="Refresh Preview"
					onclick={() => {
						ctx.iframeKey = ctx.iframeKey + 1;
					}}
				>
					<RotateCcwIcon />
					<span class="sr-only">Refresh Preview</span>
				</Button>
			</ToggleGroup.Root>
		</div>

		<Separator orientation="vertical" class="mx-1 h-4! shrink-0" />

		<CopyButton
			variant="outline"
			class="max-w-full min-w-20 gap-1 overflow-hidden px-2 shadow-none"
			size="sm"
			text={command}
			icon={TerminalIcon}
			disableTooltip
		>
			<span class="min-w-0 truncate lg:inline">{command}</span>
		</CopyButton>
	</div>
</div>
