<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
	<div class="flex flex-col items-center justify-center px-4 py-8 text-center">
		<h2 class="mb-6 text-5xl font-semibold">Whoops!</h2>
		<h3 class="mb-1.5 text-3xl font-semibold">Something went wrong</h3>
		<p class="mb-6 max-w-sm text-muted-foreground">
			The page you're looking for isn't found, we suggest you back to home.
		</p>
		<Button href="#" size="lg" class="rounded-lg text-base shadow-sm">Back to home page</Button>
	</div>

	<div class="relative max-h-screen w-full p-2 max-lg:hidden">
		<div class="h-full w-full rounded-2xl bg-black"></div>
		<img
			src="/blocks/error.webp"
			alt="404 illustration"
			class="absolute top-1/2 left-1/2 h-[clamp(260px,25vw,406px)] -translate-x-1/2 -translate-y-1/2"
		/>
	</div>
</div>
