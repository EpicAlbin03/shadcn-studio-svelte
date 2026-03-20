<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { MotionCheckbox } from '$lib/registry/ui/motion-checkbox';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<MotionCheckbox {id} bind:checked />
	<Label for={id}>Animated checkbox</Label>
</div>
