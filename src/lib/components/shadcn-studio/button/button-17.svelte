<script lang="ts">
	import { LoaderCircleIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button disabled>
	<LoaderCircleIcon class="animate-spin" />
	Loading
</Button>
