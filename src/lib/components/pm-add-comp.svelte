<script lang="ts">
	import { PUBLIC_URL } from '$lib/config/site-config';
	import PmBlock from './pm-block.svelte';

	let { name, overwrite }: { name: string | string[]; overwrite?: boolean } = $props();

	const command = $derived(
		`shadcn-svelte@latest add ${PUBLIC_URL}/registry/${
			typeof name === 'string' ? name : name.join(' ')
		}.json ${overwrite ? '--overwrite' : ''}`.trim()
	);
</script>

<PmBlock type="execute" {command} />
