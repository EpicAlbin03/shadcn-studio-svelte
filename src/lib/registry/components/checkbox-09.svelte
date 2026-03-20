<script lang="ts">
	import AppleIcon from '@lucide/svelte/icons/apple';
	import CherryIcon from '@lucide/svelte/icons/cherry';
	import GrapeIcon from '@lucide/svelte/icons/grape';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const fruits = [
		{ label: 'Apple', icon: AppleIcon },
		{ label: 'Cherry', icon: CherryIcon },
		{ label: 'Grape', icon: GrapeIcon }
	];
</script>

<div class="space-y-4">
	<Label class="font-semibold">Favorite Fruits</Label>
	<div class="flex flex-col gap-4">
		{#each fruits as { label, icon: Icon } (label)}
			<div class="flex items-center gap-2">
				<Checkbox id={label} />
				<Label for={label}>
					<Icon class="size-4" aria-hidden="true" />
					{label}
				</Label>
			</div>
		{/each}
	</div>
</div>
