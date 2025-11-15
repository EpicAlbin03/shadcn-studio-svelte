<script lang="ts">
	import { BanIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<Badge
	variant="outline"
	class="border-destructive text-destructive [a&]:hover:bg-destructive/10 [a&]:hover:text-destructive/90"
>
	<BanIcon class="size-3" />
	Failed
</Badge>
