<script lang="ts">
	import { page } from '$app/state';
	import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '$lib/components/ui/sidebar';
	import { cn } from '$lib/utils';

	const { setOpenMobile } = useSidebar();
	let pathname = $derived(page.url.pathname);

	type Props = {
		href?: string;
		openInNewTab?: boolean;
		children: Children;
	};

	let { href, openInNewTab, children }: Props = $props();

	const active = $derived(href && pathname.startsWith(href));
</script>

<SidebarMenuItem>
	{#if href}
		<SidebarMenuButton
			class={cn(
				'h-8.5 cursor-pointer rounded-sm px-3 font-medium text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
				{
					'text-primary hover:text-primary active:text-primary': active
				}
			)}
		>
			{#snippet child({ props })}
				<a
					{...props}
					{href}
					{...openInNewTab && { target: '_blank' }}
					rel="noopener noreferrer"
					onclick={() => setOpenMobile(false)}
				>
					{@render children?.()}
				</a>
			{/snippet}
		</SidebarMenuButton>
	{:else}
		<SidebarMenuButton
			class={cn(
				'h-8.5 cursor-pointer rounded-sm px-3 font-medium text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50'
			)}
		>
			{@render children?.()}
		</SidebarMenuButton>
	{/if}
</SidebarMenuItem>
