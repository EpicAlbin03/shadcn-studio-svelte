<script lang="ts">
	import type { ComponentProps } from '$lib/types/components';
	import { CodeBlock } from '$lib/components/code-block';
	import { page } from '$app/state';
	import type { HighlightedCodeBlock } from '$lib/server/registry/highlighted-code-blocks';
	import CopyPrompt from '$lib/components/CopyPrompt.svelte';
	import { ComponentCategoryContext } from '$lib/utils/components';
	import { UserConfigContext } from '$lib/config/user-config.svelte.js';
	import { getCopyPromptText } from '$lib/utils/copy-prompt';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import CodeIcon from '@lucide/svelte/icons/code';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import PmAddComp from '$lib/components/pm-add-comp.svelte';

	type Props = { componentsData: ComponentProps };

	let { componentsData }: Props = $props();

	const source = $derived(componentsData as HighlightedCodeBlock);

	const componentCategory = ComponentCategoryContext.get();
	const userConfig = UserConfigContext.get();
	const packageManager = $derived(userConfig.settings.packageManager);

	const copyPromptText = $derived(
		getCopyPromptText(packageManager, source.name, componentCategory.slug, source)
	);

	const isMobile = new IsMobile();
	const height = $derived(isMobile.current ? '75dvh' : 'calc(100svh - (var(--header-height) * 6))');
	const hasFiles = $derived(source?.files && source.files.length > 0);
	let contentRef = $state<HTMLElement | null>(null);
</script>

<div class="absolute inset-e-2 top-2 flex w-full items-center justify-between">
	<div class="ml-6 hidden text-sm text-muted-foreground group-hover/item:block">
		{source.name}
	</div>

	<div class="ml-auto flex items-center justify-center gap-2">
		<CopyPrompt text={copyPromptText} hidden />

		{#if source}
			{#key page.url.pathname}
				<Dialog.Root>
					<Tooltip.Root>
						<Tooltip.Trigger>
							{#snippet child({ props })}
								<Dialog.Trigger {...props}>
									{#snippet child({ props })}
										<Button
											{...props}
											variant="ghost"
											size="icon"
											class="hidden cursor-pointer text-muted-foreground transition-none group-hover/item:block hover:bg-transparent! hover:text-foreground"
										>
											<CodeIcon />
											<span class="sr-only">View Code</span>
										</Button>
									{/snippet}
								</Dialog.Trigger>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content>View Code</Tooltip.Content>
					</Tooltip.Root>
					<Dialog.Content
						bind:ref={contentRef}
						class="flex min-w-0 flex-col gap-6 sm:max-w-[90%]"
						onOpenAutoFocus={(e) => {
							if (!contentRef || !hasFiles) return;
							const activeItem = contentRef.querySelector(
								'button[data-active=true]'
							) as HTMLElement | null;
							if (activeItem) {
								e.preventDefault();
								activeItem.focus();
							}
						}}
					>
						<Dialog.Header>
							<Dialog.Title class="text-left">{source.name}</Dialog.Title>
							<Dialog.Description>
								Copy the code for the {source.name} component or use the CLI to add it to your project.
							</Dialog.Description>
						</Dialog.Header>

						<PmAddComp name={source.name} />

						{#if hasFiles}
							<CodeBlock
								files={source.files}
								{height}
								class="group/block-view-wrapper w-full min-w-0"
							/>
						{:else}
							<p class="text-sm text-muted-foreground">
								No code available. If you think this is an error, please
								<a
									href="https://github.com/EpicAlbin03/shadcn-studio-svelte/issues"
									target="_blank"
									rel="noopener noreferrer"
									class="font-medium text-foreground underline hover:no-underline"
								>
									open an issue
								</a>
								.
							</p>
						{/if}
						<Dialog.Close class="sr-only">Close</Dialog.Close>
					</Dialog.Content>
				</Dialog.Root>
			{/key}
		{/if}
	</div>
</div>
