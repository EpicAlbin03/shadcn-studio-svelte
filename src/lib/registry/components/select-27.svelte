<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import { GuitarIcon, HeadphonesIcon, MicVocalIcon, MusicIcon } from '@lucide/svelte';

	const genres = [
		{ value: 'rock', label: 'Rock', icon: GuitarIcon },
		{ value: 'electronic', label: 'Electronic', icon: HeadphonesIcon },
		{ value: 'pop', label: 'Pop', icon: MicVocalIcon },
		{ value: 'jazz', label: 'Jazz', icon: MusicIcon }
	];

	const id = $props.id();

	let value = $state('rock');
	const selectedGenre = $derived(genres.find((g) => g.value === value) ?? genres[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select option with icon</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			<span class="flex items-center gap-2">
				<selectedGenre.icon />
				{selectedGenre.label ?? 'Select a genre'}
			</span>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Music Genres</Select.Label>
				{#each genres as genre (genre.value)}
					<Select.Item value={genre.value} label={genre.label}>
						<genre.icon />
						{genre.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
