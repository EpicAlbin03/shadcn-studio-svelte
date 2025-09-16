<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const movies = [
		{ value: 'inception', label: 'Inception' },
		{ value: 'interstellar', label: 'Interstellar' },
		{ value: 'the-dark-knight', label: 'The Dark Knight' },
		{ value: 'pulp-fiction', label: 'Pulp Fiction' }
	];

	const id = $props.id();

	let value = $state('inception');
	const triggerContent = $derived(movies.find((f) => f.value === value)?.label ?? 'Select a movie');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with leading text</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			Favorite movie: {triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each movies as movie (movie.value)}
					<Select.Item value={movie.value} label={movie.label}>
						{movie.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
