<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="group inline-flex items-center gap-2" data-state={checked ? 'checked' : 'unchecked'}>
	<button
		id="{id}-yes"
		class="cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
		aria-controls={id}
		onclick={() => (checked = false)}
	>
		Yes
	</button>
	<Switch {id} bind:checked aria-labelledby="{id}-yes {id}-no" />
	<button
		id="{id}-no"
		class="cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
		aria-controls={id}
		onclick={() => (checked = true)}
	>
		No
	</button>
</div>
