<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Invalid Textarea</Label>
	<Textarea {id} aria-invalid placeholder="Type your feedback here" />
	<p class="text-xs text-destructive">Your feedback is useful for us.</p>
</div>
