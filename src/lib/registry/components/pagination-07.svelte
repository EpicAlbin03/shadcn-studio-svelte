<script lang="ts">
	import {
		ChevronFirstIcon,
		ChevronLastIcon,
		ChevronLeftIcon,
		ChevronRightIcon
	} from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';

	const count = 30;
	const perPage = 10;
	let page = $state(2);
	const totalPages = $derived(count / perPage);
</script>

<Pagination.Root {count} {perPage} bind:page>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Go to first page"
					class="rounded-full"
					onclick={() => (page = 1)}
				>
					<ChevronFirstIcon class="size-4" />
				</Button>
			</Pagination.Item>
			<Pagination.Item>
				<Pagination.PrevButton
					class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'rounded-full')}
				>
					<ChevronLeftIcon class="size-4" />
				</Pagination.PrevButton>
			</Pagination.Item>
			{#each pages as page (page.key)}
				{#if page.type === 'ellipsis'}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					{@const isActive = currentPage === page.value}
					<Pagination.Item>
						<Pagination.Link {page} {isActive} class="rounded-full">
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton
					class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'rounded-full')}
				>
					<ChevronRightIcon class="size-4" />
				</Pagination.NextButton>
			</Pagination.Item>
			<Pagination.Item>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Go to last page"
					class="rounded-full"
					onclick={() => (page = totalPages)}
				>
					<ChevronLastIcon class="size-4" />
				</Button>
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
