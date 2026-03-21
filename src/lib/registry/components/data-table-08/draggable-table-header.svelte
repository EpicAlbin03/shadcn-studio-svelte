<script lang="ts">
	import { useSortable } from '@dnd-kit-svelte/sortable';
	import { CSS } from '@dnd-kit-svelte/utilities';
	import GripVerticalIcon from '@lucide/svelte/icons/grip-vertical';
	import type { Header } from '@tanstack/table-core';
	import { Button } from '$lib/components/ui/button';
	import { FlexRender } from '$lib/components/ui/data-table';
	import * as Table from '$lib/components/ui/table/index.js';
	import type { Employee } from './data-table-08.svelte';

	type Props = { header: Header<Employee, unknown> };

	let { header }: Props = $props();

	const { attributes, isDragging, listeners, node, transform, transition } = useSortable({
		id: () => header.column.id
	});
</script>

<Table.Head
	data-dragging={isDragging.current}
	bind:ref={node.current}
	class="relative z-0 h-10 border-t whitespace-nowrap before:absolute before:inset-y-0 before:inset-s-0 before:w-px before:bg-border first:before:bg-transparent data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
	style="transition: {transition.current};
	transform: {CSS.Transform.toString(transform.current)};
	width: {header.column.getSize()}px;"
>
	<div class="flex items-center justify-start gap-0.5">
		<Button
			{...attributes.current}
			{...listeners.current}
			size="icon"
			variant="ghost"
			class="-ml-2 size-7 shadow-none"
			aria-label="Drag to reorder"
		>
			<GripVerticalIcon class="opacity-60" size={16} aria-hidden="true" />
		</Button>
		<span class="grow truncate">
			{#if !header.isPlaceholder}
				<FlexRender content={header.column.columnDef.header} context={header.getContext()} />
			{/if}
		</span>
	</div>
</Table.Head>
