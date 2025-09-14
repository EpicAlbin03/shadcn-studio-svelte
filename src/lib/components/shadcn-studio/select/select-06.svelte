<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import SelectNative from '$lib/components/ui/select-native.svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id} class="gap-1">
		Required native select <span class="text-destructive">*</span>
	</Label>
	<SelectNative {id} type="single" required>
		<option value="1">Action</option>
		<option value="2">Comedy</option>
		<option value="3">Romance</option>
		<option value="4">Thriller</option>
	</SelectNative>
</div>
