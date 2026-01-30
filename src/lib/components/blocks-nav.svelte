<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { page } from '$app/state';
	import { registryCategories } from '$lib/registry/registry-categories';
	import { FEATURED_BLOCKS, NEW_BLOCKS } from '$lib/utils/blocks';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
</script>

{#snippet BlocksNavLink({
	category,
	isActive
}: {
	category: (typeof registryCategories)[number];
	isActive: boolean;
})}
	{#if !category.hidden}
		<a
			href="/blocks/{category.slug}"
			class="flex h-7 items-center justify-center truncate px-4 text-center text-base font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
			data-active={isActive}
		>
			{category.name}
		</a>
	{/if}
{/snippet}

<div class="relative overflow-hidden">
	<ScrollArea class="max-w-none" orientation="both" scrollbarXClasses="invisible">
		<div class="flex items-center">
			{@render BlocksNavLink({
				category: { name: 'Featured', slug: '', hidden: false, blocks: FEATURED_BLOCKS },
				isActive: page.url.pathname === '/blocks'
			})}
			{@render BlocksNavLink({
				category: { name: 'New', slug: 'new', hidden: NEW_BLOCKS.length === 0, blocks: NEW_BLOCKS },
				isActive: page.url.pathname === '/blocks/new'
			})}
			{#each registryCategories as category (category.slug)}
				{@render BlocksNavLink({
					category,
					isActive: page.url.pathname === `/blocks/${category.slug}`
				})}
			{/each}
		</div>
	</ScrollArea>
</div>
