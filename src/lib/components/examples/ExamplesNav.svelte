<script lang="ts">
	import { cn } from '$lib/utils';
	import { page } from '$app/state';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const examples = [
		{
			name: 'Dashboard',
			href: '/theme-generator/examples/dashboard',
			hidden: false
		},
		{
			name: 'Tasks',
			href: '/theme-generator/examples/tasks',
			hidden: false
		},
		{
			name: 'Playground',
			href: '/theme-generator/examples/playground',
			hidden: false
		},
		{
			name: 'Authentication',
			href: '/theme-generator/examples/authentication',
			hidden: false
		}
	];

	let { class: className, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<div class={cn('flex items-center', className)} {...restProps}>
	<ScrollArea class="max-w-[96%] md:max-w-[600px] lg:max-w-none" orientation="both">
		<div class="flex items-center">
			{@render ExampleLink({
				example: { name: 'Examples', href: '/theme-generator', hidden: false },
				isActive: page.url.pathname === '/theme-generator'
			})}
			{#each examples as example (example.href)}
				{@render ExampleLink({
					example,
					isActive: page.url.pathname?.startsWith(example.href) ?? false
				})}
			{/each}
		</div>
	</ScrollArea>
</div>

{#snippet ExampleLink({
	example,
	isActive
}: {
	example: (typeof examples)[number];
	isActive: boolean;
})}
	{#if !example.hidden}
		<a
			href={example.href}
			class="flex h-7 items-center justify-center px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
			data-active={isActive}
		>
			{example.name}
		</a>
	{/if}
{/snippet}
