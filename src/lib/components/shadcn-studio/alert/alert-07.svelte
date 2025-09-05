<script lang="ts">
	import { UploadIcon, XIcon } from '@lucide/svelte';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';

	let isActive = $state(true);
	let progress = $state(0);

	$effect(() => {
		const timer = setTimeout(() => (progress = 50), 100);

		return () => clearTimeout(timer);
	});
</script>

{#if isActive}
	<Alert class="flex justify-between">
		<UploadIcon />
		<div class="flex flex-1 flex-col gap-4">
			<div class="flex-1 flex-col justify-center gap-1">
				<AlertTitle>Uploading your 'Img-234.png'</AlertTitle>
				<AlertDescription>Please wait While we upload your image.</AlertDescription>
			</div>
			<Progress
				value={progress}
				class="bg-sky-600/20 *:bg-sky-600 dark:bg-sky-400/20 dark:*:bg-sky-400"
				aria-label="Upload Progress"
			/>
			<div class="flex items-center gap-4">
				<Button variant="ghost" class="h-7 cursor-pointer rounded-md px-2">Cancel</Button>
				<Button
					variant="ghost"
					disabled
					class="h-7 cursor-pointer rounded-md px-2 text-sky-600 hover:bg-sky-600/10 hover:text-sky-600 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:hover:text-sky-400"
				>
					Upload another
				</Button>
			</div>
		</div>
		<button class="size-5 cursor-pointer" onclick={() => (isActive = false)}>
			<XIcon class="size-5" />
			<span class="sr-only">Close</span>
		</button>
	</Alert>
{/if}
