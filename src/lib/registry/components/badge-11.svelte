<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { badgeVariants } from '$lib/components/ui/badge';
</script>

<a href="#" class={badgeVariants({ variant: 'default' })}>
	Link <ArrowRightIcon class="size-3" />
</a>
