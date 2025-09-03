<script lang="ts">
	import {
		CopyIcon,
		CropIcon,
		EllipsisVerticalIcon,
		MousePointerIcon,
		SquareIcon
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Tooltip>
		<TooltipTrigger>
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
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Select</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<SquareIcon />
					<span class="sr-only">Shapes</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Shapes</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<CropIcon />
					<span class="sr-only">Crop</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Crop</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button {...props} class="rounded-none shadow-none focus-visible:z-10" variant="outline">
					<CopyIcon />
					<span class="sr-only">Duplicate</span>
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">Duplicate</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
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
		</TooltipTrigger>
		<TooltipContent class="px-2 py-1 text-xs">More</TooltipContent>
	</Tooltip>
</div>
