<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import SelectNative from '$lib/components/ui/select-native.svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native select default</Label>
	<SelectNative {id} type="single">
		<option value="1">Male</option>
		<option value="2">Female</option>
		<option value="3">Other</option>
	</SelectNative>
</div>
