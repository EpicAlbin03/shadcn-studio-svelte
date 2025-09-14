<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Search input with &lt;kbd&gt;</Label>
	<div class="relative">
		<Input
			{id}
			type="search"
			placeholder="Search..."
			class="peer pe-11 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
		/>
		<div
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50"
		>
			<kbd
				class="inline-flex h-5 max-h-full items-center rounded border bg-accent px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground"
			>
				⌘k
			</kbd>
		</div>
	</div>
</div>
