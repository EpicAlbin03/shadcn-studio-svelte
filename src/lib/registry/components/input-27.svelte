<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>File input</Label>
	<Input
		{id}
		type="file"
		class="p-0 pr-3 text-muted-foreground italic file:me-3 file:h-full file:border-0 file:border-e file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:text-foreground file:not-italic"
	/>
</div>
