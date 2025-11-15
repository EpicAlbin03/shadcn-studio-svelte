<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="relative w-full max-w-xs space-y-2">
	<Label
		for={id}
		class="absolute start-2 top-0 z-10 block -translate-y-1/2 bg-background px-1 text-xs font-medium text-foreground group-has-disabled:opacity-50"
	>
		Textarea with overlapping label
	</Label>
	<Textarea {id} class="!bg-background" />
</div>
