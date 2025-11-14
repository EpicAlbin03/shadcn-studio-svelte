<script lang="ts" module>
	export type TocItem = {
		title: string;
		url: string;
		items?: TocItem[];
	};

	export type TableOfContents = {
		title?: string;
		items?: TocItem[];
	};
</script>

<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import Menu3Icon from '@tabler/icons-svelte/icons/menu-3';

	let {
		toc,
		title,
		variant = 'list',
		class: className
	}: {
		toc: TableOfContents;
		title?: string;
		variant?: 'dropdown' | 'list';
		class?: string;
	} = $props();

	let activeId = $state<string | null>(null);

	function handleClick(url: string) {
		activeId = url.replace('#', '');
	}

	let open = $state(false);
</script>

{#if toc.items?.length}
	{#if variant === 'dropdown'}
		<DropdownMenu.Root bind:open>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="sm" class={cn('h-8 md:h-7', className)}>
						<Menu3Icon /> On This Page
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="start" class="no-scrollbar max-h-[70svh]">
				{#each toc.items as item (item.url)}
					<DropdownMenu.Item onSelect={() => (open = false)}>
						{#snippet child({ props })}
							<a href={item.url} {...props}>{item.title}</a>
						{/snippet}
					</DropdownMenu.Item>
					{#if item.items}
						{#each item.items as subItem (subItem.url)}
							<DropdownMenu.Item onSelect={() => (open = false)} class="pl-6">
								{#snippet child({ props })}
									<a href={subItem.url} {...props}>{subItem.title}</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{:else}
		<div
			class={cn(
				'sticky top-[var(--header-height)] flex max-h-[calc(100vh-var(--header-height)-2rem)] flex-col overflow-y-auto p-5',
				className
			)}
		>
			{#if title}
				<h2 class="mb-3 text-sm font-semibold text-muted-foreground">{title}</h2>
			{/if}
			<ol class="space-y-3">
				{#each toc.items as item, index (item.url)}
					{@const isActive = item.url === `#${activeId}`}
					<li class="flex flex-col items-start gap-2">
						<div class="relative flex w-full items-center">
							{#if isActive}
								<div class="absolute top-0 left-0 h-full w-0.5 bg-primary"></div>
							{/if}
							<a
								href={item.url}
								onclick={() => handleClick(item.url)}
								data-active={isActive}
								class={cn(
									'pl-4 text-sm font-medium transition-colors hover:text-foreground',
									isActive ? 'text-primary' : 'text-muted-foreground'
								)}
							>
								{item.title}
							</a>
						</div>
						{#if item.items?.length}
							<ol class="w-full space-y-2">
								{#each item.items as subItem (subItem.url)}
									{@const isSubActive = subItem.url === `#${activeId}`}
									<li>
										<div class="relative flex w-full items-center">
											{#if isSubActive}
												<div class="absolute top-0 left-0 h-full w-0.5 bg-primary"></div>
											{/if}
											<a
												href={subItem.url}
												onclick={() => handleClick(subItem.url)}
												data-active={isSubActive}
												class={cn(
													'flex items-center gap-1.5 pl-6 text-sm transition-colors hover:text-foreground',
													isSubActive ? 'text-primary' : 'text-muted-foreground'
												)}
											>
												{subItem.title}
											</a>
										</div>
									</li>
								{/each}
							</ol>
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	{/if}
{/if}
