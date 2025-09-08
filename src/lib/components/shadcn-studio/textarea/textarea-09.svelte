<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Filled Textarea</Label>
	<Textarea
		class="border-transparent bg-muted shadow-none"
		placeholder="Type your feedback here"
		{id}
	/>
</div>
