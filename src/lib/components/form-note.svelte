<script lang="ts">
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import * as Alert from '$lib/components/ui/alert';
	import AlertDescription from '$lib/components/ui/alert/alert-description.svelte';
</script>

<Alert.Root
	class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
>
	<CircleAlertIcon />
	<AlertDescription class="text-amber-600/80 dark:text-amber-400/80">
		<span>
			If you are getting type errors, try changing your Zod version to "4.0.10" (<a
				href="https://github.com/ciscoheat/sveltekit-superforms/issues/630"
				target="_blank"
				rel="noopener noreferrer"
				class="underline hover:text-amber-600 dark:hover:text-amber-400"
			>
				see issue
			</a>).
		</span>
	</AlertDescription>
</Alert.Root>
