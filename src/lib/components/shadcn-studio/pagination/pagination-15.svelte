<script lang="ts">
	import {
		ChevronFirstIcon,
		ChevronLastIcon,
		ChevronLeftIcon,
		ChevronRightIcon
	} from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';

	const count = 100;
	let perPage = $state(10);
	let page = $state(2);
	const totalPages = $derived(count / perPage);

	const id = $props.id();
</script>

<div class="flex w-full flex-wrap items-center justify-between gap-6 max-sm:justify-center">
	<div class="flex shrink-0 items-center gap-3">
		<Label for={id}>Rows per page</Label>
		<Select.Root
			type="single"
			bind:value={
				() => String(perPage),
				(v) => {
					perPage = parseInt(v);
				}
			}
		>
			<Select.Trigger {id} class="w-fit whitespace-nowrap">
				{perPage || 'Select number of results'}
			</Select.Trigger>
			<Select.Content
				class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
			>
				<Select.Item value="10">10</Select.Item>
				<Select.Item value="25">25</Select.Item>
				<Select.Item value="50">50</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
	<div
		class="flex grow items-center justify-end whitespace-nowrap text-muted-foreground max-sm:justify-center"
	>
		<p class="text-sm whitespace-nowrap text-muted-foreground" aria-live="polite">
			Showing <span class="text-foreground">{(page - 1) * perPage + 1}</span> to
			<span class="text-foreground">{page * perPage}</span>
			of
			<span class="text-foreground">{count}</span> products
		</p>
	</div>
	<Pagination.Root {count} {perPage} bind:page class="w-fit max-sm:mx-0">
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
</div>
