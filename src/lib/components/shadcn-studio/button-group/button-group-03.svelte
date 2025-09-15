<script lang="ts">
	import {
		CopyIcon,
		CropIcon,
		EllipsisVerticalIcon,
		MousePointerIcon,
		SquareIcon
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
					variant="outline"
				>
					<MousePointerIcon />
					<span class="sr-only">Select</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Select</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<SquareIcon />
					<span class="sr-only">Shapes</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Shapes</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<CropIcon />
					<span class="sr-only">Crop</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Crop</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<CopyIcon />
					<span class="sr-only">Duplicate</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">Duplicate</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					class="rounded-none rounded-e-md shadow-none focus-visible:z-10"
					variant="outline"
				>
					<EllipsisVerticalIcon />
					<span class="sr-only">More</span>
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="px-2 py-1 text-xs">More</Tooltip.Content>
	</Tooltip.Root>
</div>
