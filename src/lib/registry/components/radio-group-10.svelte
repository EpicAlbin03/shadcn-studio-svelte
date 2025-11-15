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

<RadioGroup class="w-full max-w-96 gap-0 space-y-2 rounded-md *:rounded-full" value="2">
	{#each items as item (`${id}-${item.value}`)}
		<div
			class="relative flex flex-col gap-4 border border-input p-4 outline-none has-data-[state=checked]:z-10 has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground"
		>
			<div class="group flex items-center justify-between">
				<div class="flex items-center gap-2">
					<RadioGroupItem
						id="{id}-{item.value}"
						value={item.value}
						aria-label="plan-radio-{item.value}"
						class="bg-accent text-primary after:absolute after:inset-0 data-[state=checked]:border-primary-foreground data-[state=checked]:bg-primary-foreground! data-[state=checked]:[&_svg]:fill-primary"
						aria-describedby="{id}-{item.value}-price"
					/>
					<Label class="inline-flex items-center" for="{id}-{item.value}">
						{item.label}
						{#if item.value === '2'}
							<Badge
								variant="outline"
								class="border-green-500 bg-green-500/10 px-1.5 py-px text-xs text-green-500"
							>
								Best Seller
							</Badge>
						{/if}
					</Label>
				</div>
				<div
					id="{id}-{item.value}-price"
					class="text-xs leading-[inherit] group-has-checked:text-primary-foreground"
				>
					{item.price}
				</div>
			</div>
		</div>
	{/each}
</RadioGroup>
