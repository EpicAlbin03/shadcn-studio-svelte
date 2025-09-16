<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const states = [
		{ value: 'florida', label: 'Florida' },
		{ value: 'new-york', label: 'New York' },
		{ value: 'california', label: 'California' },
		{ value: 'texas', label: 'Texas' }
	];

	const id = $props.id();

	let value = $state('california');
	const triggerContent = $derived(states.find((f) => f.value === value)?.label ?? 'Select a state');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with helper text</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each states as state (state.value)}
					<Select.Item value={state.value} label={state.label}>
						{state.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
	<p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
		Could you share which state you're based in?
	</p>
</div>
