<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';

	const items = ['Child 1', 'Child 2', 'Child 3'];

	let checked = $state(false);
	let indeterminate = $state(true);
	let selected = $state(['Child 1', 'Child 2']);

	$effect(() => {
		if (selected.length === items.length) {
			checked = true;
			indeterminate = false;
		} else if (selected.length > 0) {
			checked = false;
			indeterminate = true;
		} else {
			checked = false;
			indeterminate = false;
		}
	});

	function handleCheckedChange(checked: boolean) {
		if (checked) {
			selected = [...items];
		} else {
			selected = [];
		}
	}
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-2">
		<Checkbox id="parent" bind:checked onCheckedChange={handleCheckedChange} bind:indeterminate />
		<Label for="parent">Parent</Label>
	</div>
	<div class="flex flex-col gap-2 ps-6">
		{#each items as label (label)}
			<div class="flex items-center gap-2">
				<Checkbox
					id={label}
					checked={selected.includes(label)}
					onCheckedChange={(checked) =>
						(selected = checked ? [...selected, label] : selected.filter((item) => item !== label))}
				/>
				<Label for={label}>{label}</Label>
			</div>
		{/each}
	</div>
</div>
