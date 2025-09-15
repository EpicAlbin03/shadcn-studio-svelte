<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Progress } from '$lib/components/ui/progress';
	import { onMount } from 'svelte';

	let progress = $state(0);

	onMount(() => {
		const timer = setTimeout(() => (progress = 50), 100);
		return () => clearTimeout(timer);
	});
</script>

<Alert.Root class="flex gap-3">
	<Avatar.Root class="rounded-sm">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex flex-1 flex-col gap-2">
		<div class="flex-1 flex-col justify-center gap-1">
			<Alert.Title>@Rocky</Alert.Title>
			<Alert.Description>this projects task is remaining, deadline is near.</Alert.Description>
		</div>
		<Progress
			value={progress}
			class="bg-amber-600/20 *:bg-amber-600 dark:bg-amber-400/20 dark:*:bg-amber-400"
			aria-label="Task progress"
		/>
	</div>
</Alert.Root>
