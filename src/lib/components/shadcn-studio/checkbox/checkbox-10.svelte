<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
</script>

<div class="flex items-center gap-2">
	<Checkbox
		class="focus-visible:ring-destructive/20 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive! dark:text-white dark:focus-visible:ring-destructive/40"
		aria-label="Color destructive"
		checked
	/>
	<Checkbox
		class="focus-visible:ring-sky-600/20 data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600 dark:text-white dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:border-sky-400 dark:data-[state=checked]:bg-sky-400"
		aria-label="Color info"
		checked
	/>
	<Checkbox
		class="focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 dark:text-white dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 dark:data-[state=checked]:bg-green-400"
		aria-label="Color success"
		checked
	/>
</div>
