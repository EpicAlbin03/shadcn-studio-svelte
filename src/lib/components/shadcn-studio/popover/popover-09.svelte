<script lang="ts">
	import { FunnelPlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Slider } from '$lib/components/ui/slider';

	const filters = ['Most liked', 'Highest reviewed', 'Newest', 'Most popular'];

	let selected = $state(['Most liked', 'Newest']);
	let price = $state(450);
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<FunnelPlusIcon />
				<span class="sr-only">Filter</span>
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content>
		<div class="grid gap-4">
			<div class="flex items-center justify-between gap-2">
				<span class="font-medium">Filter</span>
				<Button
					variant="secondary"
					class="h-7 rounded-full px-2 py-1 text-xs"
					onclick={() => {
						selected = ['Most liked', 'Newest'];
						price = 450;
					}}
				>
					Reset all
				</Button>
			</div>
			<div class="flex flex-col gap-2">
				{#each filters as label, index}
					<div class="flex items-center gap-2">
						<Checkbox
							id={`filter-${index + 1}`}
							checked={selected.includes(label)}
							onCheckedChange={(checked) =>
								(selected = checked
									? [...selected, label]
									: selected.filter((item) => item !== label))}
						/>
						<Label for={`filter-${index + 1}`}>{label}</Label>
					</div>
				{/each}
			</div>
			<div class="grid gap-3">
				<Label>Price range</Label>
				<div class="space-y-2">
					<Slider type="single" bind:value={price} step={50} max={1000} aria-label="Price range" />
					<span
						class="flex w-full items-center justify-between gap-1 text-xs font-medium text-muted-foreground"
					>
						<span>0</span>
						<span>500</span>
						<span>1000</span>
					</span>
				</div>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
