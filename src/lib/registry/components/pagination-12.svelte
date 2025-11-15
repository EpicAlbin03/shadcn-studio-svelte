<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';

	const count = 50;
	const perPage = 10;
	let page = $state(2);
	const totalPages = $derived(count / perPage);
</script>

<Pagination.Root {count} {perPage} bind:page>
	<Pagination.Content class="w-full justify-between">
		<Pagination.Item>
			<Pagination.PrevButton class="border">
				<ChevronLeftIcon class="size-4" />
				<span class="hidden sm:block">Previous</span>
			</Pagination.PrevButton>
		</Pagination.Item>
		<Pagination.Item>
			<p class="text-sm text-muted-foreground" aria-live="polite">
				Page <span class="text-foreground">{page}</span> of
				<span class="text-foreground">{totalPages}</span>
			</p>
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.NextButton class="border">
				<span class="hidden sm:block">Next</span>
				<ChevronRightIcon class="size-4" />
			</Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
