<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<Pagination.Root count={30} perPage={10} page={2}>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton>
					<ChevronLeftIcon class="size-4" />
					<span class="hidden sm:block">Previous</span>
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
						<Pagination.Link
							{page}
							{isActive}
							class={isActive
								? cn(
										buttonVariants({ variant: 'secondary', size: 'icon' }),
										'!border-none !shadow-none hover:!text-secondary-foreground'
									)
								: undefined}
						>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton>
					<span class="hidden sm:block">Next</span>
					<ChevronRightIcon class="size-4" />
				</Pagination.NextButton>
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
