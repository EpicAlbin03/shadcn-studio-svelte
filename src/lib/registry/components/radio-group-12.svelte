<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	const id = $props.id();
</script>

<RadioGroup class="w-full max-w-96 gap-2" value="1">
	<div
		class="relative w-full rounded-md border border-input p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="1"
			id="{id}-1"
			class="sr-only"
			aria-label="plan-radio-basic"
			aria-describedby="{id}-1-description"
		/>

		<Label
			for="{id}-1"
			class="flex flex-col items-start text-foreground after:absolute after:inset-0"
		>
			<div class="flex w-full items-center justify-between">
				<span>Basic</span>
				<span class="text-xs leading-[inherit] font-normal text-muted-foreground">Free</span>
			</div>
			<p id="{id}-1-description" class="text-xs text-muted-foreground">
				Get 1 project with 1 teams members.
			</p>
		</Label>
	</div>

	<div
		class="relative w-full rounded-md border border-input p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="2"
			id="{id}-2"
			class="sr-only"
			aria-label="plan-radio-premium"
			aria-describedby="{id}-2-description"
		/>

		<Label
			for="{id}-2"
			class="flex flex-col items-start text-foreground after:absolute after:inset-0"
		>
			<div class="flex w-full items-center justify-between">
				Premium
				<span class="text-xs leading-[inherit] font-normal text-muted-foreground">$5.00</span>
			</div>
			<p id="{id}-2-description" class="text-xs text-muted-foreground">
				Get 5 projects with 5 team members.
			</p>
		</Label>
	</div>
</RadioGroup>
