<script lang="ts">
	import { PUBLIC_URL } from '$lib/config/site-config';
	import PMExecute from './pm-execute.svelte';

	let { name, overwrite }: { name: string | string[]; overwrite?: boolean } = $props();

	const command = `shadcn-svelte@latest add ${PUBLIC_URL}/registry/${
		Array.isArray(name) ? name.join(' ') : name
	}.json ${overwrite ? '--overwrite' : ''}`;
</script>

<PMExecute {command} />
