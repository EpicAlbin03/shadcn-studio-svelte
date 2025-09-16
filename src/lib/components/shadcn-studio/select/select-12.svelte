<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import { FilmIcon } from '@lucide/svelte';

	const movies = [
		{ value: 'god of wars', label: 'God of Wars' },
		{ value: 'ghost rider', label: 'Ghost Rider' },
		{ value: 'the cloth', label: 'The Cloth' },
		{ value: 'the possession', label: 'The Possession' }
	];

	const id = $props.id();

	let value = $state('god of wars');
	const triggerContent = $derived(movies.find((f) => f.value === value)?.label ?? 'Select a movie');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with icon</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="relative w-full ps-9">
			<div
				class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50"
			>
				<FilmIcon size={16} aria-hidden="true" />
			</div>
			{triggerContent}
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
