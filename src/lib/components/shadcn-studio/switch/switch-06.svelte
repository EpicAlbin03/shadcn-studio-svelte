<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
</script>

<div class="flex items-center gap-3">
	<Switch
		class="focus-visible:border-primary data-[state=checked]:border-primary data-[state=checked]:bg-transparent [&_span]:border data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-primary dark:data-[state=checked]:[&_span]:bg-primary"
		aria-label="Default outline Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:border-destructive data-[state=checked]:bg-transparent dark:focus-visible:ring-destructive/40 [&_span]:border data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-destructive dark:data-[state=checked]:[&_span]:bg-destructive"
		aria-label="Destructive Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-green-600 focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-transparent dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 [&_span]:border data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-green-600 dark:data-[state=checked]:[&_span]:bg-green-400"
		aria-label="Success outline Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-sky-600 focus-visible:ring-sky-600/20 data-[state=checked]:border-sky-600 data-[state=checked]:bg-transparent dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:border-sky-400 [&_span]:border data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-sky-600 dark:data-[state=checked]:[&_span]:bg-sky-400"
		aria-label="Info outline Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-amber-600 focus-visible:ring-amber-600/20 data-[state=checked]:border-amber-600 data-[state=checked]:bg-transparent dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40 dark:data-[state=checked]:border-amber-400 [&_span]:border data-[state=checked]:[&_span]:border-background data-[state=checked]:[&_span]:bg-amber-600 dark:data-[state=checked]:[&_span]:bg-amber-400"
		aria-label="Warning outline Switch"
		checked
	/>
</div>
