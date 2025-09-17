<script lang="ts">
	import type { Cell } from '@tanstack/table-core';
	import type { Employee } from '$lib/components/shadcn-studio/data-table/data-table-08.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { FlexRender } from '$lib/components/ui/data-table';
	import { useSortable } from '@dnd-kit-svelte/sortable';
	import { CSS } from '@dnd-kit-svelte/utilities';

	type Props = { cell: Cell<Employee, unknown> };

	let { cell }: Props = $props();

	const { isDragging, node, transform, transition } = useSortable({
		id: () => cell.column.id
	});
</script>

<Table.Cell
	data-dragging={isDragging.current}
	bind:ref={node.current}
	class="relative z-0 truncate data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
	style="transition: {transition.current};
	transform: {CSS.Transform.toString(transform.current)};
	width: {cell.column.getSize()}px;"
>
	<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
</Table.Cell>
