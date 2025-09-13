<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<Pagination.Root count={30} perPage={10} page={2}>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content class="gap-0 divide-x overflow-hidden rounded-lg border">
			<Pagination.Item>
				<Pagination.PrevButton class="rounded-none">
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
							class={cn(
								{
									[buttonVariants({
										variant: 'default',
										className:
											'hover:!text-primary-foreground dark:border-transparent dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 dark:hover:text-primary-foreground'
									})]: isActive
								},
								'rounded-none border-none'
							)}
						>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton class="rounded-none">
					<span class="hidden sm:block">Next</span>
					<ChevronRightIcon class="size-4" />
				</Pagination.NextButton>
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
