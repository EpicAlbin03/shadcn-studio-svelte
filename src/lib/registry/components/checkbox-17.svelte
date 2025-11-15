<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import MotionCheckbox from '$lib/registry/ui/motion-checkbox.svelte';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<MotionCheckbox />
	<Label for={id}>Animated checkbox</Label>
</div> -->
