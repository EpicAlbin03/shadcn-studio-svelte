<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="beginner" class="flex items-center gap-4">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="beginner" id="beginner" />
		<Label for="beginner">Beginner</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="intermediate" id="intermediate" />
		<Label for="intermediate">Intermediate</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="advanced" id="advanced" />
		<Label for="advanced">Advanced</Label>
	</div>
</RadioGroup>
