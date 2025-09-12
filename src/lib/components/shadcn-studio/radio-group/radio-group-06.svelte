<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="light">
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="light"
			id="theme-light"
			class="text-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! data-[state=checked]:[&_svg]:fill-primary-foreground"
		/>
		<Label for="theme-light">Light Theme</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="dark"
			id="theme-dark"
			class="text-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! data-[state=checked]:[&_svg]:fill-primary-foreground"
		/>
		<Label for="theme-dark">Dark Theme</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="system"
			id="theme-system"
			class="text-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! data-[state=checked]:[&_svg]:fill-primary-foreground"
		/>
		<Label for="theme-system">System Default</Label>
	</div>
</RadioGroup>
