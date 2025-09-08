<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Textarea with button</Label>
	<Textarea {id} placeholder="Type your feedback here" />
	<Button size="sm">Submit Feedback</Button>
</div>
