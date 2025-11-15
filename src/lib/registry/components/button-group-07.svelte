<script lang="ts">
	import { MinusIcon, PlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';

	let value = $state(216);
</script>

<div class="inline-flex w-fit divide-x divide-primary-foreground/30 rounded-md shadow-xs">
	<Button
		size="icon"
		class="rounded-none rounded-s-full shadow-none focus-visible:z-10"
		onclick={() => value--}
	>
		<MinusIcon />
		<span class="sr-only">Minus</span>
	</Button>
	<span
		class="inline-flex items-center bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
	>
		{value}px
	</span>
	<Button
		size="icon"
		class="rounded-none rounded-e-full shadow-none focus-visible:z-10"
		onclick={() => value++}
	>
		<PlusIcon />
		<span class="sr-only">Plus</span>
	</Button>
</div>
