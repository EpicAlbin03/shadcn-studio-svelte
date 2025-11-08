<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { cn } from '$lib/utils';
	import type { PageProps } from './$types.js';

	let { data }: PageProps = $props();
</script>

<MetaData title={data.meta.name} description={data.meta.description} ogType="article" />

<div class={cn('bg-background', data.meta?.className)}>
	<data.component />
</div>
