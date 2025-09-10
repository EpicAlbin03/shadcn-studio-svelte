<script lang="ts">
	import type {
		ColumnDef,
		ColumnFiltersState,
		SortingState,
		VisibilityState,
		RowSelectionState,
		CellContext
	} from '@tanstack/table-core';
	import { getCoreRowModel, getFilteredRowModel, getSortedRowModel } from '@tanstack/table-core';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { createRawSnippet } from 'svelte';

	type Person = {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		status: 'active' | 'inactive' | 'pending';
		progress: number;
	};

	const initialData: Person[] = [
		{
			id: '1',
			firstName: 'John',
			lastName: 'Doe',
			email: 'john.doe@example.com',
			status: 'active',
			progress: 75
		},
		{
			id: '2',
			firstName: 'Jane',
			lastName: 'Smith',
			email: 'jane.smith@example.com',
			status: 'inactive',
			progress: 45
		},
		{
			id: '3',
			firstName: 'Bob',
			lastName: 'Johnson',
			email: 'bob.johnson@example.com',
			status: 'active',
			progress: 90
		},
		{
			id: '4',
			firstName: 'Alice',
			lastName: 'Brown',
			email: 'alice.brown@example.com',
			status: 'pending',
			progress: 60
		},
		{
			id: '5',
			firstName: 'Charlie',
			lastName: 'Wilson',
			email: 'charlie.wilson@example.com',
			status: 'active',
			progress: 80
		}
	];

	const columns: ColumnDef<Person>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				renderComponent(Checkbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all'
				}),
			cell: ({ row }) =>
				renderComponent(Checkbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					'aria-label': 'Select row'
				}),
			enableSorting: false,
			enableHiding: false
		},
		{
			accessorKey: 'firstName',
			header: 'First Name',
			cell: ({ getValue, row: { index }, column: { id } }) => {
				const initialValue = getValue() as string;
				return renderComponent(Input, {
					value: initialValue,
					onBlur: (e: Event) => {
						const target = e.target as HTMLInputElement;
						updateData(index, id, target.value);
					},
					class:
						'focus-visible:ring-ring h-8 w-full border-0 bg-transparent p-1 focus-visible:ring-1',
					'aria-label': 'editable-text-input'
				});
			}
		},
		{
			accessorKey: 'lastName',
			header: 'Last Name',
			cell: ({ getValue, row: { index }, column: { id } }) => {
				const initialValue = getValue() as string;
				return renderComponent(Input, {
					value: initialValue,
					onBlur: (e: Event) => {
						const target = e.target as HTMLInputElement;
						updateData(index, id, target.value);
					},
					class:
						'focus-visible:ring-ring h-8 w-full border-0 bg-transparent p-1 focus-visible:ring-1',
					'aria-label': 'editable-text-input'
				});
			}
		},
		{
			accessorKey: 'email',
			header: 'Email',
			cell: ({ getValue, row: { index }, column: { id } }) => {
				const initialValue = getValue() as string;
				return renderComponent(Input, {
					value: initialValue,
					onBlur: (e: Event) => {
						const target = e.target as HTMLInputElement;
						updateData(index, id, target.value);
					},
					class:
						'focus-visible:ring-ring h-8 w-full border-0 bg-transparent p-1 focus-visible:ring-1',
					'aria-label': 'editable-text-input'
				});
			}
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ getValue, row: { index }, column: { id } }) => {
				return renderSnippet(StatusSnippet, { value: getValue() as string, index, columnId: id });
			}
		},
		{
			accessorKey: 'progress',
			header: 'Progress',
			cell: ({ getValue, row: { index }, column: { id } }) => {
				return renderSnippet(ProgressSnippet, { value: getValue() as number, index, columnId: id });
			}
		}
	];

	let data: Person[] = $state([...initialData]);
	let sorting: SortingState = $state([]);
	let columnFilters: ColumnFiltersState = $state([]);
	let columnVisibility: VisibilityState = $state({});
	let rowSelection: RowSelectionState = $state({});

	const refreshData = () => {
		data = [...initialData];
	};

	const updateData = (rowIndex: number, columnId: string, value: string | number) => {
		data = data.map((row, index) => {
			if (index === rowIndex) {
				return {
					...row,
					[columnId]: value
				};
			}
			return row;
		});
	};

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		onSortingChange: (updater) => {
			sorting = typeof updater === 'function' ? updater(sorting) : updater;
		},
		onColumnFiltersChange: (updater) => {
			columnFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
		},
		onColumnVisibilityChange: (updater) => {
			columnVisibility = typeof updater === 'function' ? updater(columnVisibility) : updater;
		},
		onRowSelectionChange: (updater) => {
			rowSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			get sorting() {
				return sorting;
			},
			get columnFilters() {
				return columnFilters;
			},
			get columnVisibility() {
				return columnVisibility;
			},
			get rowSelection() {
				return rowSelection;
			}
		}
	});
</script>

{#snippet StatusSnippet({
	value,
	index,
	columnId
}: {
	value: string;
	index: number;
	columnId: string;
})}
	<Select.Root
		type="single"
		{value}
		onValueChange={(newValue) => {
			if (newValue) {
				updateData(index, columnId, newValue);
			}
		}}
	>
		<Select.Trigger
			class="h-8 w-full border-0 bg-transparent p-1 focus:ring-1 focus:ring-ring"
			aria-label="select-status-{columnId}"
		>
			{value}
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="active">Active</Select.Item>
			<Select.Item value="inactive">Inactive</Select.Item>
			<Select.Item value="pending">Pending</Select.Item>
		</Select.Content>
	</Select.Root>
{/snippet}

{#snippet ProgressSnippet({
	value,
	index,
	columnId
}: {
	value: number;
	index: number;
	columnId: string;
})}
	<div class="flex items-center space-x-2">
		<Input
			type="number"
			min="0"
			max="100"
			{value}
			onblur={(e) => {
				const target = e.target as HTMLInputElement;
				const numValue = parseFloat(target.value);
				const clampedValue = Math.max(0, Math.min(100, isNaN(numValue) ? value : numValue));
				updateData(index, columnId, clampedValue);
			}}
			class="h-8 w-20 border-0 bg-transparent p-1"
			aria-label="editable-progress-input"
		/>
		<span class="text-sm text-muted-foreground">%</span>
	</div>
{/snippet}

<div class="w-full space-y-4">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup}
					<Table.Row>
						{#each headerGroup.headers as header}
							<Table.Head colspan={header.colSpan}>
								{#if !header.isPlaceholder}
									<div>
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
									</div>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#if table.getRowModel().rows?.length}
					{#each table.getRowModel().rows as row}
						<Table.Row data-state={row.getIsSelected() ? 'selected' : undefined}>
							{#each row.getVisibleCells() as cell}
								<Table.Cell>
									<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
								</Table.Cell>
							{/each}
						</Table.Row>
					{/each}
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</div>

	<div
		class="flex items-center justify-between gap-2 text-sm text-muted-foreground max-md:flex-col"
	>
		<div>{table.getRowModel().rows.length} rows total</div>
		<div class="flex items-center space-x-2">
			<Button variant="outline" size="sm" onclick={refreshData}>Refresh Data</Button>
		</div>
	</div>

	<p class="mt-4 text-center text-sm text-muted-foreground">
		Editable data table - Click on cells to edit values
	</p>
</div>
