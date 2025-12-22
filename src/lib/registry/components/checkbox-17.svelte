<script lang="ts">
	import { MotionCheckbox } from '$lib/registry/ui/motion-checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<MotionCheckbox {id} bind:checked />
	<Label for={id}>Animated checkbox</Label>
</div>
