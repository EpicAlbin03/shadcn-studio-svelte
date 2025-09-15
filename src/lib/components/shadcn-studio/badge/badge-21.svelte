<script lang="ts">
	import { CheckCircleIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<Badge
	variant="outline"
	class="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 [a&]:hover:bg-green-600/10 [a&]:hover:text-green-600/90 dark:[a&]:hover:bg-green-400/10 dark:[a&]:hover:text-green-400/90"
>
	<CheckCircleIcon class="size-3" />
	Successful
</Badge>
