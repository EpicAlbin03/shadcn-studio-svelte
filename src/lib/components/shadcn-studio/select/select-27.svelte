<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { AppleIcon, BananaIcon, CherryIcon, GrapeIcon } from '@lucide/svelte';

	const fruits = [
		{ value: 'apple', label: 'Apple', icon: AppleIcon },
		{ value: 'banana', label: 'Banana', icon: BananaIcon },
		{ value: 'cherry', label: 'Cherry', icon: CherryIcon },
		{ value: 'grapes', label: 'Grapes', icon: GrapeIcon }
	];

	const id = $props.id();

	let value = $state('apple');
	const selectedFruit = $derived(fruits.find((f) => f.value === value) ?? fruits[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select option with icon</Label>
	<Select type="single" bind:value>
		<SelectTrigger {id} class="w-full">
			<span class="flex items-center gap-2">
				<selectedFruit.icon />
				{selectedFruit.label ?? 'Select a fruit'}
			</span>
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each fruits as fruit (fruit.value)}
					<SelectItem value={fruit.value} label={fruit.label}>
						<fruit.icon />
						{fruit.label}
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
