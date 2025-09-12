<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="destructive" class="flex items-center gap-4">
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="destructive"
			id="color-destructive"
			class="border-destructive text-destructive focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [&_svg]:fill-destructive"
		/>
		<Label for="color-destructive">Destructive</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="success"
			id="color-success"
			class="border-green-600 text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-green-400 dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
		/>
		<Label for="color-success">Success</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem
			value="info"
			id="color-info"
			class="border-sky-600 text-sky-600 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 [&_svg]:fill-sky-600 dark:[&_svg]:fill-sky-400"
		/>
		<Label for="color-info">Info</Label>
	</div>
</RadioGroup>
