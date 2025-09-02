<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="ghost" class="group">
	<ArrowLeftIcon class="transition-transform duration-200 group-hover:-translate-x-0.5" />
	Go to settings
</Button>
