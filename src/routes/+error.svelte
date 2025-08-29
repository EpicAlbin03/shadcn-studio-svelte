<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { NotFoundSVG } from '$lib/assets/svg';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-9">
	<NotFoundSVG class="h-120 w-146" />
	<div class="flex flex-col items-center gap-4">
		<p class="text-2xl text-muted-foreground">{page.status}: {page.error?.message}</p>
		<Button class="rounded-full" href="/">Go back to home</Button>
	</div>
</div>
