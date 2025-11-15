<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="default" class="flex items-center gap-4">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="default" id="size-default" />
		<Label for="size-default">Default</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="medium" id="size-medium" class="size-5 [&_svg]:size-3" />
		<Label for="size-medium">Medium</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="large" id="size-large" class="size-6 [&_svg]:size-3.5" />
		<Label for="size-large">Large</Label>
	</div>
</RadioGroup>
