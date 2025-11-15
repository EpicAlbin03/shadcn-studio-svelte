<script lang="ts">
	import { MicIcon, SearchIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Search input with icon and button</Label>
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
			class="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
		/>
		<Button
			variant="ghost"
			size="icon"
			class="absolute inset-y-0 end-0 rounded-s-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
		>
			<MicIcon />
			<span class="sr-only">Press to speak</span>
		</Button>
	</div>
</div>
