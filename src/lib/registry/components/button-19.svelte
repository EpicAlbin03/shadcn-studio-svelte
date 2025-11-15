<script lang="ts">
	import { ShareIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" class="h-12 rounded-full px-2.5">
	<span
		class="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
	>
		<ShareIcon />
	</span>
	Publish
</Button>
