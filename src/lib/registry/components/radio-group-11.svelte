<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	const id = $props.id();
</script>

<RadioGroup class="w-full max-w-96 gap-2" value="1">
	<div
		class="relative flex w-full items-center gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="1"
			id="{id}-1"
			aria-label="plan-radio-basic"
			aria-describedby="{id}-1-description"
			class="size-5 after:absolute after:inset-0 [&_svg]:size-3"
		/>
		<div class="grid grow gap-2">
			<Label for="{id}-1" class="justify-between">
				Basic <span class="text-xs leading-[inherit] font-normal text-muted-foreground">Free</span>
			</Label>
			<p id="{id}-1-description" class="text-xs text-muted-foreground">
				Get 1 project with 1 teams members.
			</p>
		</div>
	</div>

	<div
		class="relative flex w-full items-center gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="2"
			id="{id}-2"
			aria-describedby="{id}-2-description"
			class="size-5 after:absolute after:inset-0 [&_svg]:size-3"
		/>
		<div class="grid grow gap-2">
			<Label for="{id}-2" class="justify-between">
				Premium
				<span class="text-xs leading-[inherit] font-normal text-muted-foreground">$5.00</span>
			</Label>
			<p id="{id}-2-description" class="text-xs text-muted-foreground">
				Get 5 projects with 5 team members.
			</p>
		</div>
	</div>
</RadioGroup>
