<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	const id = $props.id();

	const items = [
		{ value: '1', label: 'Pro', price: '$39/mo' },
		{ value: '2', label: 'Team', price: '$69/mo' },
		{ value: '3', label: 'Enterprise', price: 'Custom' }
	];
</script>

<RadioGroup class="w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs" value="2">
	{#each items as item (`${id}-${item.value}`)}
		<div
			class="relative flex flex-col gap-4 border border-input p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<RadioGroupItem
						id={`${id}-${item.value}`}
						value={item.value}
						class="after:absolute after:inset-0"
						aria-label={`plan-radio-${item.value}`}
						aria-describedby={`${`${id}-${item.value}`}-price`}
					/>
					<Label class="inline-flex items-center" for={`${id}-${item.value}`}>
						{item.label}
						{#if item.value === '2'}
							<Badge class="px-1.5 py-px text-xs">Best Seller</Badge>
						{/if}
					</Label>
				</div>
				<div
					id={`${`${id}-${item.value}`}-price`}
					class="text-xs leading-[inherit] text-muted-foreground"
				>
					{item.price}
				</div>
			</div>
		</div>
	{/each}
</RadioGroup>
