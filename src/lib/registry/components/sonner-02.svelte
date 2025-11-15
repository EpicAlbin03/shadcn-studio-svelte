<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="outline"
	onclick={() =>
		toast('Event is created', {
			description: 'Friday, August 15, 2025 at 9:00 AM'
		})}
>
	Toast with description
</Button>
