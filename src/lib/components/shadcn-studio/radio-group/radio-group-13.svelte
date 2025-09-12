<script lang="ts">
	import { UserIcon, CrownIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	const id = $props.id();
</script>

<RadioGroup class="w-full max-w-96 justify-items-center sm:grid-cols-2" value="1">
	<div
		class="relative flex w-full max-w-50 flex-col items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="1"
			id={`${id}-1`}
			class="order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3"
			aria-describedby={`${id}-1-description`}
			aria-label="plan-radio-basic"
		/>
		<div class="grid grow justify-items-center gap-2">
			<UserIcon />
			<Label for={`${id}-1`} class="justify-center">Basic</Label>
			<p id={`${id}-1-description`} class="text-center text-xs text-muted-foreground">
				Get 1 project with 1 teams members.
			</p>
		</div>
	</div>
	<div
		class="relative flex w-full max-w-50 flex-col items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
	>
		<RadioGroupItem
			value="2"
			id={`${id}-2`}
			class="order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3"
			aria-describedby={`${id}-2-description`}
			aria-label="plan-radio-premium"
		/>
		<div class="grid grow justify-items-center gap-2">
			<CrownIcon />
			<Label for={`${id}-2`} class="justify-center">Premium</Label>
			<p id={`${id}-2-description`} class="text-center text-xs text-muted-foreground">
				Get 5 projects with 5 team members.
			</p>
		</div>
	</div>
</RadioGroup>
