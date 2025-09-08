<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { Switch } from '$lib/components/ui/switch';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="group inline-flex items-center gap-2" data-state={checked ? 'checked' : 'unchecked'}>
	<button
		id={`${id}-light`}
		class="cursor-pointer text-left text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
		aria-controls={id}
		onclick={() => (checked = false)}
	>
		<SunIcon class="size-4" aria-hidden="true" />
	</button>
	<Switch
		{id}
		bind:checked
		aria-labelledby={`${id}-dark ${id}-light`}
		aria-label="Toggle between dark and light mode"
	/>
	<button
		id={`${id}-dark`}
		class="cursor-pointer text-right text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
		aria-controls={id}
		onclick={() => (checked = true)}
	>
		<MoonIcon class="size-4" aria-hidden="true" />
	</button>
</div>
