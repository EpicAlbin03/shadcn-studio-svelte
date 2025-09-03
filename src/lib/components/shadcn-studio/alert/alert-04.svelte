<script lang="ts">
	import { ArrowRightIcon, CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle } from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
</script>

<Alert
	class="flex items-center justify-between border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400 [&>svg]:translate-y-0"
>
	<CircleAlertIcon />
	<AlertTitle class="flex-1">New message!</AlertTitle>
	<Button
		variant="outline"
		class="h-7 cursor-pointer rounded-md border-sky-600 px-2 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:hover:bg-sky-400/10 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40"
		href="#"
	>
		Link
		<ArrowRightIcon />
	</Button>
</Alert>
