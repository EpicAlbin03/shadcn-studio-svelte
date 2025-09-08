<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Read only textarea</Label>
	<Textarea
		class="read-only:bg-muted"
		defaultValue="Read only text"
		placeholder="Type your feedback here"
		{id}
		readonly
	/>
</div>
