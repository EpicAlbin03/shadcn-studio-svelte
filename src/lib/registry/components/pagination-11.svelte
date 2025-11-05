<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
</script>

<Pagination.Root count={30} perPage={10} page={2}>
	<Pagination.Content class="w-full justify-between">
		<Pagination.Item>
			<Pagination.PrevButton class="border">
				<ChevronLeftIcon class="size-4" />
				<span class="hidden sm:block">Previous</span>
			</Pagination.PrevButton>
		</Pagination.Item>
		<Pagination.Item>
			<Pagination.NextButton class="border">
				<span class="hidden sm:block">Next</span>
				<ChevronRightIcon class="size-4" />
			</Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>
