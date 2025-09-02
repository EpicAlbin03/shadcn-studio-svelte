<script lang="ts">
	import { LoaderCircleIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let isLoading = $state(false);
	let status = $state<undefined | string>(undefined);

	const handleClick = async () => {
		isLoading = true;
		status = undefined;

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			status = Math.random() > 0.5 ? 'Submitted!' : 'Rejected!';
		} catch (error) {
			status = 'Rejected!';
			console.error(error);
		} finally {
			isLoading = false;
		}
	};
</script>

<Button
	variant="link"
	onclick={handleClick}
	disabled={isLoading}
	class={cn('cursor-pointer hover:no-underline', {
		'text-green-600 dark:text-green-400': status === 'Submitted!',
		'text-destructive': status === 'Rejected!'
	})}
>
	{#if isLoading}
		<LoaderCircleIcon class="animate-spin" />
		Loading
	{:else if status}
		{status}
	{:else}
		Click me
	{/if}
</Button>
