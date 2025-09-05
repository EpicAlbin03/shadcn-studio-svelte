<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Checkbox } from '$lib/components/ui/checkbox';

	const snacks = ['Burger', 'Pizza', 'Drinks'];

	let selected = $state(['Burger', 'Pizza']);
</script>

<div class="flex items-center gap-2">
	{#each snacks as label (label)}
		<Badge variant="secondary" class="relative gap-2 px-3 py-1.5">
			<Checkbox
				id={label}
				checked={selected.includes(label)}
				onCheckedChange={(checked) =>
					(selected = checked ? [...selected, label] : selected.filter((item) => item !== label))}
				class="data-[state=unchecked]:hidden"
			/>
			<label for={label} class="cursor-pointer select-none after:absolute after:inset-0">
				{label}
			</label>
		</Badge>
	{/each}
</div>
