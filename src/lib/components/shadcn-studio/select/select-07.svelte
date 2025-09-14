<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import SelectNative from '$lib/components/ui/select-native.svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native select with option groups</Label>
	<SelectNative {id} type="single">
		<optgroup label="Frontend Technologies">
			<option value="1">HTML</option>
			<option value="2">CSS</option>
			<option value="3">JavaScript</option>
		</optgroup>
		<optgroup label="Backend Technologies">
			<option value="4">Node.js</option>
			<option value="5">Python</option>
			<option value="6">Java</option>
		</optgroup>
	</SelectNative>
</div>
