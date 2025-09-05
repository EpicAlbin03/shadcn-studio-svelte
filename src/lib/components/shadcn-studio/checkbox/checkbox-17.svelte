<script lang="ts">
	import MotionCheckbox from '$lib/components/ui/motion-checkbox.svelte';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<MotionCheckbox />
	<Label for={id}>Animated checkbox</Label>
</div>
