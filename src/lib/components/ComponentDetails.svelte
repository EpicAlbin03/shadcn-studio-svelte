<script lang="ts">
	import { Code } from '@lucide/svelte';
	import type { BundledLanguage } from 'shiki/bundle/web';
	import type { ProcessedComponentsData } from '$lib/types/components';
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import CopyPrompt from '$lib/components/CopyPrompt.svelte';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import CodeBlock from '$lib/components/code-block/CodeBlock.svelte';
	import CodeBlockMultipleView from '$lib/components/code-block/MultipleView.svelte';

	type Props = { componentsData: ProcessedComponentsData };

	let { componentsData }: Props = $props();

	const { component, tree } = componentsData;
</script>

<div class="absolute end-2 top-2 flex items-center gap-2">
	<CopyPrompt />
	<Dialog>
		<Tooltip>
			<TooltipTrigger>
				{#snippet child({ props })}
					<DialogTrigger {...props}>
						{#snippet child({ props })}
							<Button
								{...props}
								variant="ghost"
								size="icon"
								class="cursor-pointer text-muted-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent hover:text-foreground disabled:opacity-100"
							>
								<Code />
								<span class="sr-only">View code</span>
							</Button>
						{/snippet}
					</DialogTrigger>
				{/snippet}
			</TooltipTrigger>
			<TooltipContent>View code</TooltipContent>
		</Tooltip>
		<DialogContent class="sm:max-w-[900px]">
			<!-- <DialogHeader>
				<DialogTitle class="text-left">CLI Command</DialogTitle>
				<DialogDescription class="sr-only"
					>Use the CLI to add components to your project</DialogDescription
				>
			</DialogHeader> -->
			<div class="min-w-0 space-y-5">
				<!-- <div class="overflow-hidden rounded-md border">
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
				</div> -->
				<div class="space-y-4">
					<h2 class="text-left text-lg leading-none font-semibold">Manual Code</h2>
					<div class="overflow-hidden rounded-md border">
						{#if component.files && component.files.length > 0}
							{#if component.files.length === 1}
								<div class="relative">
									<CodeBlock
										code={component.files[0].content || ''}
										lang={(component.files[0]?.path?.split('.').pop() || 'tsx') as BundledLanguage}
									/>
									<CopyButton
										source={component.files[0].content || ''}
										class="end-1 top-1"
										toast="Code"
									/>
								</div>
							{:else}
								<CodeBlockMultipleView files={component.files} {tree} />
							{/if}
						{:else}
							<p class="text-sm text-muted-foreground">
								No code available. If you think this is an error, please{' '}
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
					</div>
				</div>
			</div>
		</DialogContent>
	</Dialog>
</div>
