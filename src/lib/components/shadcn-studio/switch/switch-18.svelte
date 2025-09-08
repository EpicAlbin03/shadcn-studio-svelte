<script lang="ts">
	import { ChartPieIcon, CodeIcon, PaletteIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	const skills = [
		{ label: 'Web Development', icon: CodeIcon },
		{ label: 'Data Analysis', icon: ChartPieIcon },
		{ label: 'Graphic Design', icon: PaletteIcon }
	];
</script>

<fieldset class="w-full max-w-96 space-y-4">
	<legend class="text-sm leading-none font-medium text-foreground"
		>Switch to your preferred field:
	</legend>
	<ul class="flex w-full flex-col divide-y rounded-md border">
		{#each skills as { label, icon: Icon } (label)}
			<li>
				<Label for={label} class="flex items-center justify-between gap-2 px-5 py-3">
					<span class="flex items-center gap-2">
						<Icon class="size-4" />
						{label}
					</span>
					<Switch id={label} />
				</Label>
			</li>
		{/each}
	</ul>
</fieldset>
