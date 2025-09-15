<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
	import { badgeVariants } from '$lib/components/ui/badge';
</script>

<a href="#!" class={badgeVariants({ variant: 'default' })}>
	Link <ArrowRightIcon class="size-3" />
</a>
