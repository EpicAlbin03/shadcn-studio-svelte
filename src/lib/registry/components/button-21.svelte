<script lang="ts">
	import { MailCheckIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline">
	<MailCheckIcon />
	Messages
	<Badge variant="destructive" class="rounded-full px-1.5 py-px">99+</Badge>
</Button>
