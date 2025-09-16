<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Textarea with helper text</Label>
	<Textarea {id} placeholder="Type your feedback here" />
	<p class="text-xs text-muted-foreground">Your feedback is useful for us.</p>
</div>
