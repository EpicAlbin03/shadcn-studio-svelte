<script lang="ts">
	import { ExternalLinkIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button
		variant="outline"
		class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
		href="#"
	>
		Live preview
	</Button>
	<Button
		variant="outline"
		size="icon"
		class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
		href="#"
		target="_blank"
		rel="noopener noreferrer"
	>
		<ExternalLinkIcon />
		<span class="sr-only">External link</span>
	</Button>
</div>
