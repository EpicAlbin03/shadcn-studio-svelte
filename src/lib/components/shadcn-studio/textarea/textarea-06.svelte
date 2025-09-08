<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<div class="flex items-center justify-between gap-1">
		<Label for={id}>Input with hint text</Label>
		<span class="text-xs text-muted-foreground">Optional field</span>
	</div>
	<Textarea placeholder="Type your feedback here" {id} />
</div>
