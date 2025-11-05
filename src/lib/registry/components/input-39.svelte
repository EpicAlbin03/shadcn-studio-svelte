<script lang="ts">
	import { LoaderCircleIcon, SearchIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let value = $state('');
	let isLoading = $state(false);

	const id = $props.id();

	$effect(() => {
		if (value) {
			isLoading = true;

			const timer = setTimeout(() => {
				isLoading = false;
			}, 500);

			return () => clearTimeout(timer);
		}

		isLoading = false;
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Search input with loader</Label>
	<div class="relative">
		<div
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<SearchIcon class="size-4" />
			<span class="sr-only">Search</span>
		</div>
		<Input
			{id}
			type="search"
			placeholder="Search..."
			bind:value
			class="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
		/>
		{#if isLoading}
			<div
				class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
			>
				<LoaderCircleIcon class="size-4 animate-spin" />
				<span class="sr-only">Loading...</span>
			</div>
		{/if}
	</div>
</div>
