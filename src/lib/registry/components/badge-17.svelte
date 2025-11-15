<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
</script>

<Badge
	class="rounded-full border-none bg-destructive/10 text-destructive focus-visible:ring-destructive/20 focus-visible:outline-none dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/5"
>
	<span class="size-1.5 rounded-full bg-destructive" aria-hidden="true"></span>
	Blocked
</Badge>
