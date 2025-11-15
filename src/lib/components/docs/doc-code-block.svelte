<script lang="ts">
	import PmAddComp from '$lib/components/pm-add-comp.svelte';

	type Props = {
		name: string | string[];
		overwrite?: boolean;
	};

	let { name, overwrite = false }: Props = $props();
</script>

<div class="w-full">
	<PmAddComp {name} {overwrite} />
</div>
