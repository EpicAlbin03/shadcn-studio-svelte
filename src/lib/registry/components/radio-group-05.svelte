<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="standard">
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="standard"
			id="standard"
			class="border-dashed border-primary focus-visible:border-primary"
		/>
		<Label for="standard">Standard Shipping</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="express"
			id="express"
			class="border-dashed border-primary focus-visible:border-primary"
		/>
		<Label for="express">Express Delivery</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="overnight"
			id="overnight"
			class="border-dashed border-primary focus-visible:border-primary"
		/>
		<Label for="overnight">Overnight Shipping</Label>
	</div>
</RadioGroup>
