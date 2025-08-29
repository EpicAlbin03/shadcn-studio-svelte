<script lang="ts">
	import FrontLayout from '$lib/components/layout/FrontLayout.svelte';

	let { children } = $props();
</script>

<FrontLayout>
	{@render children()}
</FrontLayout>
