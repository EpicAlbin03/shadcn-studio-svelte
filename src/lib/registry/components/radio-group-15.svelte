<script lang="ts">
	import { CircleIcon } from '@lucide/svelte';
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { Label } from '$lib/components/ui/label';
</script>

<RadioGroupPrimitive.Root data-slot="radio-group" value="english" class="grid gap-3">
	<div class="flex items-center gap-2">
		<RadioGroupPrimitive.Item
			value="english"
			id="lang-english"
			data-slot="radio-group-item"
			class="relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary-foreground shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary! [&_svg]:size-4 [&_svg]:fill-primary-foreground data-[state=checked]:[&_svg]:size-2"
		>
			<CircleIcon
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-primary transition-all duration-500"
			/>
		</RadioGroupPrimitive.Item>
		<Label for="lang-english">English</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupPrimitive.Item
			value="spanish"
			id="lang-spanish"
			data-slot="radio-group-item"
			class="relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary-foreground shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary! [&_svg]:size-4 [&_svg]:fill-primary-foreground data-[state=checked]:[&_svg]:size-2"
		>
			<CircleIcon
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-primary transition-all duration-500"
			/>
		</RadioGroupPrimitive.Item>
		<Label for="lang-spanish">Español</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupPrimitive.Item
			value="french"
			id="lang-french"
			data-slot="radio-group-item"
			class="relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary-foreground shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary! [&_svg]:size-4 [&_svg]:fill-primary-foreground data-[state=checked]:[&_svg]:size-2"
		>
			<CircleIcon
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-primary transition-all duration-500"
			/>
		</RadioGroupPrimitive.Item>
		<Label for="lang-french">Français</Label>
	</div>
</RadioGroupPrimitive.Root>
