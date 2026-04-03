<script lang="ts">
	import { page } from '$app/state';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { blockCategories, FEATURED_BLOCKS, NEW_BLOCKS } from '$lib/registry/blocks';
</script>

{#snippet BlocksNavLink({
	category,
	isActive
}: {
	category: (typeof blockCategories)[number];
	isActive: boolean;
})}
	{#if !category.hidden}
		<a
			href="/blocks/{category.id}"
			class="flex h-7 items-center justify-center truncate px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
			data-active={isActive}
		>
			{category.name}
		</a>
	{/if}
{/snippet}

<!-- TODO: Check this -->
<div class="relative overflow-hidden">
	<ScrollArea class="max-w-none" orientation="both" scrollbarXClasses="invisible">
		<div class="flex items-center">
			{@render BlocksNavLink({
				category: {
					name: 'Featured',
					id: '',
					blocks: FEATURED_BLOCKS.map((block) => ({ id: block }))
				},
				isActive: page.url.pathname === '/blocks'
			})}
			{@render BlocksNavLink({
				category: {
					name: 'New',
					id: 'new',
					hidden: NEW_BLOCKS.length === 0,
					blocks: NEW_BLOCKS.map((block) => ({ id: block }))
				},
				isActive: page.url.pathname === '/blocks/new'
			})}
			{#each blockCategories as category (category.id)}
				{@render BlocksNavLink({
					category,
					isActive: page.url.pathname === `/blocks/${category.id}`
				})}
			{/each}
		</div>
	</ScrollArea>
</div>
