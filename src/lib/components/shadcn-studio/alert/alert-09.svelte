<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Progress } from '$lib/components/ui/progress';

	let progress = $state(0);

	$effect(() => {
		const timer = setTimeout(() => (progress = 50), 100);

		return () => clearTimeout(timer);
	});
</script>

<Alert class="flex gap-3">
	<Avatar class="rounded-sm">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<div class="flex flex-1 flex-col gap-2">
		<div class="flex-1 flex-col justify-center gap-1">
			<AlertTitle>$libRocky</AlertTitle>
			<AlertDescription>this projects task is remaining, deadline is near.</AlertDescription>
		</div>
		<Progress
			value={progress}
			class="bg-amber-600/20 *:bg-amber-600 dark:bg-amber-400/20 dark:*:bg-amber-400"
			aria-label="Task progress"
		/>
	</div>
</Alert>
