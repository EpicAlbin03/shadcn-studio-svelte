<script lang="ts">
	import { SelectNative } from '$lib/components/ui/select-native';

	const id = $props.id();
</script>

<div class="group relative w-full max-w-xs">
	<label
		for={id}
		class="absolute start-2 top-0 z-10 block -translate-y-1/2 bg-background px-1 text-xs font-medium text-foreground group-has-[select:disabled]:opacity-50"
	>
		Native select with overlapping label
	</label>
	<SelectNative {id} type="single">
		<option value="1">Developer</option>
		<option value="2">Designer</option>
		<option value="3">Manager</option>
		<option value="4">QA Engineer</option>
	</SelectNative>
</div>
