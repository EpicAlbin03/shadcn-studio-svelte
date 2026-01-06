<script lang="ts">
	import * as CraftButton from '$lib/registry/ui/craft-button';
	import { ArrowUpRightIcon } from '@lucide/svelte';
</script>

<CraftButton.Root>
	<CraftButton.Label>Click me</CraftButton.Label>
	<CraftButton.Icon>
		<ArrowUpRightIcon
			class="size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45"
		/>
	</CraftButton.Icon>
</CraftButton.Root>
