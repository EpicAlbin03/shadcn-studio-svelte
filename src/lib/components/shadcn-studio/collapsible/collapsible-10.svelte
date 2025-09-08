<script lang="ts">
	import { ChevronsUpDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
</script>

<Collapsible class="flex w-full max-w-[350px] flex-col gap-2">
	<div class="flex items-center justify-between gap-4 px-4">
		<div class="text-sm font-semibold">@peduarte starred 3 repositories</div>
		<CollapsibleTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="ghost" size="icon" class="size-8">
					<ChevronsUpDownIcon />
					<span class="sr-only">Toggle</span>
				</Button>
			{/snippet}
		</CollapsibleTrigger>
	</div>
	<div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
	<CollapsibleContent
		class="flex flex-col gap-2 overflow-hidden transition-all duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
	>
		<div class="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
		<div class="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
	</CollapsibleContent>
</Collapsible>
