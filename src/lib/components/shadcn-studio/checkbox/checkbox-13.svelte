<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="space-y-2">
	<Label
		class="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
	>
		<Checkbox
			checked
			class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
		/>
		<div class="grid gap-1.5 font-normal">
			<p class="text-sm leading-none font-medium">Auto Start</p>
			<p class="text-sm text-muted-foreground">Starting with your OS.</p>
		</div>
	</Label>
	<Label
		class="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"
	>
		<Checkbox
			class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
		/>
		<div class="grid gap-1.5 font-normal">
			<p class="text-sm leading-none font-medium">Auto update</p>
			<p class="text-sm text-muted-foreground">Download and install new version</p>
		</div>
	</Label>
</div>
