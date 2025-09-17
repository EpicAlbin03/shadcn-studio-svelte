<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLLIElement> & {
		children?: Snippet;
		isNew?: boolean;
		isUpdated?: boolean;
		href?: string;
		openInNewTab?: boolean;
		onClick?: (e: MouseEvent) => void;
	};

	let { children, href, openInNewTab, isNew, isUpdated, onClick }: Props = $props();

	const { setOpenMobile } = Sidebar.useSidebar();

	let pathname = $derived(page.url.pathname);
	const active = $derived(pathname === href);
</script>

<Sidebar.MenuSubItem
	class={cn('border-s-1 hover:border-s-2 hover:border-foreground', {
		'border-s-2 border-primary hover:border-primary active:border-primary': active
	})}
>
	{#if href}
		<Sidebar.MenuSubButton
			class={cn(
				'h-8 cursor-pointer rounded-s-none px-3 text-muted-foreground outline-none hover:bg-transparent hover:ps-[11px] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-transparent active:text-foreground',
				{ 'ps-[11px] text-primary hover:text-primary active:text-primary': active }
			)}
		>
			{#snippet child({ props })}
				<a
					{...props}
					{href}
					{...openInNewTab && { target: '_blank' }}
					rel="noopener noreferrer"
					onclick={(e) => {
						onClick?.(e);
						setOpenMobile(false);
					}}
				>
					{@render children?.()}
				</a>
			{/snippet}
		</Sidebar.MenuSubButton>
	{:else}
		<Sidebar.MenuSubButton
			class={cn(
				'h-8 cursor-pointer rounded-s-none px-3 text-muted-foreground outline-none hover:bg-transparent hover:ps-[11px] hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 active:bg-transparent active:text-foreground',
				{ 'ps-[11px] text-primary hover:text-primary active:text-primary': active }
			)}
		>
			{@render children?.()}
		</Sidebar.MenuSubButton>
	{/if}
	{#if isUpdated}
		<Sidebar.MenuBadge
			class="!end-0 top-1/2 -translate-y-1/2 rounded-[4px] bg-indigo-500/20 px-2 py-0.5 font-normal text-indigo-500"
		>
			Updated
		</Sidebar.MenuBadge>
	{/if}
	{#if isNew}
		<Sidebar.MenuBadge
			class="!end-0 top-1/2 -translate-y-1/2 rounded-[4px] bg-green-500/20 px-2 py-0.5 font-normal text-green-500"
		>
			New
		</Sidebar.MenuBadge>
	{/if}
</Sidebar.MenuSubItem>
