<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const technologies = ['React', 'Next.js', 'Remix'];
</script>

<div class="space-y-4">
	<Label class="font-semibold">Technologies</Label>
	<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
		{#each technologies as label (label)}
			<div class="flex items-center gap-2">
				<Checkbox id={label} />
				<Label for={label}>{label}</Label>
			</div>
		{/each}
	</div>
</div>
