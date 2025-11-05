<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-center gap-2">
	<Checkbox {id} bind:checked />
	<Label for={id} class="peer-data-[state=checked]:line-through">Simple todo list item</Label>
</div>
