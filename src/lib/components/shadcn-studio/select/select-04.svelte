<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import SelectNative from '$lib/components/ui/select-native.svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native select with helper text</Label>
	<SelectNative {id} type="single">
		<option value="1">Florida</option>
		<option value="2">California</option>
		<option value="3">San Francisco</option>
		<option value="4">Alabama</option>
	</SelectNative>
	<p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
		Could you share which city you're based in?
	</p>
</div>
