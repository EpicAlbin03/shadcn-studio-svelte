<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Auto growing textarea</Label>
	<Textarea
		{id}
		placeholder="Type your feedback here"
		class="field-sizing-content max-h-30 min-h-0 resize-none py-1.75"
	/>
</div>
