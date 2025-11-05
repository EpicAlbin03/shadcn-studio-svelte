<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="higher-secondary">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="higher-secondary" id="higher-secondary" />
		<Label for="higher-secondary">Higher Secondary</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="graduation" id="graduation" />
		<Label for="graduation">Graduation</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="post-graduation" id="post-graduation" />
		<Label for="post-graduation">Post Graduation</Label>
	</div>
</RadioGroup>
