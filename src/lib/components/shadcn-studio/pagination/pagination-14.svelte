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

	const count = 100;
	const perPage = 10;
	let page = $state(2);
	const totalPages = $derived(count / perPage);
</script>

<Pagination.Root {count} {perPage} bind:page>
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

		<Pagination.Item>
			<Select.Root
				type="single"
				bind:value={
					() => String(page),
					(v) => {
						page = parseInt(v);
					}
				}
			>
				<Select.Trigger id="select-page" class="w-fit whitespace-nowrap" aria-label="Select page">
					{`Page ${page}` || 'Select page'}
				</Select.Trigger>
				<Select.Content>
					{#each Array.from({ length: totalPages }, (_, i) => i + 1) as item}
						<Select.Item value={String(item)}>
							Page {item}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Pagination.Item>

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
</Pagination.Root>
