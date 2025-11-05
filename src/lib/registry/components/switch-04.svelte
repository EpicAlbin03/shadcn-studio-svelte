<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
</script>

<div class="flex items-center gap-3">
	<Switch
		class="focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:bg-destructive dark:focus-visible:ring-destructive/40"
		aria-label="Destructive Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-ring-green-600 dark:focus-visible:border-ring-green-400 focus-visible:ring-green-600/20 data-[state=checked]:bg-green-600 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:bg-green-400"
		aria-label="Success Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-ring-sky-600 dark:focus-visible:border-ring-sky-400 focus-visible:ring-sky-600/20 data-[state=checked]:bg-sky-600 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:bg-sky-400"
		aria-label="Info Switch"
		checked
	/>
	<Switch
		class="focus-visible:border-ring-amber-600 dark:focus-visible:border-ring-amber-400 focus-visible:ring-amber-600/20 data-[state=checked]:bg-amber-600 dark:focus-visible:ring-amber-400/40 dark:data-[state=checked]:bg-amber-400"
		aria-label="Warning Switch"
		checked
	/>
</div>
