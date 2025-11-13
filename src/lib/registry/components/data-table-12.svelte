<script lang="ts">
	import { DownloadIcon, FileTextIcon, FileSpreadsheetIcon } from '@lucide/svelte';
	import Papa from 'papaparse';
	import * as XLSX from 'xlsx';
	import type { ColumnDef, ColumnFiltersState, RowSelectionState } from '@tanstack/table-core';
	import { getCoreRowModel, getFilteredRowModel, getSortedRowModel } from '@tanstack/table-core';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input';
	import * as Table from '$lib/components/ui/table';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table';
	import { cn } from '$lib/utils';
	import { createRawSnippet } from 'svelte';

	type Payment = {
		id: string;
		name: string;
		amount: number;
		status: 'processing' | 'success' | 'failed';
		email: string;
	};

	const data: Payment[] = [
		{
			id: '1',
			name: 'Shang Chain',
			amount: 699,
			status: 'success',
			email: 'shang07@yahoo.com'
		},
		{
			id: '2',
			name: 'Kevin Lincoln',
			amount: 242,
			status: 'success',
			email: 'kevinli09@gmail.com'
		},
		{
			id: '3',
			name: 'Milton Rose',
			amount: 655,
			status: 'processing',
			email: 'rose96@gmail.com'
		},
		{
			id: '4',
			name: 'Silas Ryan',
			amount: 874,
			status: 'success',
			email: 'silas22@gmail.com'
		},
		{
			id: '5',
			name: 'Ben Tenison',
			amount: 541,
			status: 'failed',
			email: 'bent@hotmail.com'
		},
		{
			id: '6',
			name: 'Alice Cooper',
			amount: 321,
			status: 'processing',
			email: 'alice@email.com'
		},
		{
			id: '7',
			name: 'Bob Johnson',
			amount: 789,
			status: 'success',
			email: 'bob.j@company.com'
		},
		{
			id: '8',
			name: 'Carol Williams',
			amount: 456,
			status: 'processing',
			email: 'carol.w@domain.org'
		}
	];

	const columns: ColumnDef<Payment>[] = [
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
			accessorKey: 'name',
			header: 'Name',
			cell: ({ row }) => {
				const name = row.getValue('name');
				const nameSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-medium">${name}</div>`
					};
				});
				return renderSnippet(nameSnippet);
			}
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ getValue }) => {
				return renderSnippet(StatusSnippet, { value: getValue() as string });
			}
		},
		{
			accessorKey: 'email',
			header: 'Email',
			cell: ({ row }) => {
				const email = row.getValue('email');
				const emailSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="lowercase">${email}</div>`
					};
				});
				return renderSnippet(emailSnippet);
			}
		},
		{
			accessorKey: 'amount',
			header: () => {
				const headerSnippet = createRawSnippet(() => ({
					render: () => `<div class="text-right">Amount</div>`
				}));
				return renderSnippet(headerSnippet);
			},
			cell: ({ row }) => {
				const amount = parseFloat(row.getValue('amount'));
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(amount);

				const amountSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="text-right font-medium">${formatted}</div>`
					};
				});

				return renderSnippet(amountSnippet);
			}
		}
	];

	let columnFilters: ColumnFiltersState = $state([]);
	let rowSelection: RowSelectionState = $state({});
	let globalFilter: string = $state('');

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		globalFilterFn: 'includesString',
		state: {
			get columnFilters() {
				return columnFilters;
			},
			get rowSelection() {
				return rowSelection;
			},
			get globalFilter() {
				return globalFilter;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: (updater) => {
			columnFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
		},
		onRowSelectionChange: (updater) => {
			rowSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
		},
		onGlobalFilterChange: (updater) => {
			globalFilter = typeof updater === 'function' ? updater(globalFilter) : updater;
		}
	});

	function exportToCSV() {
		const selectedRows = table.getSelectedRowModel().rows;

		const dataToExport =
			selectedRows.length > 0
				? selectedRows.map((row) => row.original)
				: table.getFilteredRowModel().rows.map((row) => row.original);

		const csv = Papa.unparse(dataToExport, {
			header: true
		});

		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		const link = document.createElement('a');
		const url = URL.createObjectURL(blob);

		link.setAttribute('href', url);
		link.setAttribute('download', `payments-export-${new Date().toISOString().split('T')[0]}.csv`);
		link.style.visibility = 'hidden';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function exportToExcel() {
		const selectedRows = table.getSelectedRowModel().rows;

		const dataToExport =
			selectedRows.length > 0
				? selectedRows.map((row) => row.original)
				: table.getFilteredRowModel().rows.map((row) => row.original);

		const worksheet = XLSX.utils.json_to_sheet(dataToExport);
		const workbook = XLSX.utils.book_new();

		XLSX.utils.book_append_sheet(workbook, worksheet, 'Payments');

		const cols = [{ wch: 10 }, { wch: 20 }, { wch: 15 }, { wch: 25 }, { wch: 15 }];

		worksheet['!cols'] = cols;

		XLSX.writeFile(workbook, `payments-export-${new Date().toISOString().split('T')[0]}.xlsx`);
	}

	function exportToJSON() {
		const selectedRows = table.getSelectedRowModel().rows;

		const dataToExport =
			selectedRows.length > 0
				? selectedRows.map((row) => row.original)
				: table.getFilteredRowModel().rows.map((row) => row.original);

		const json = JSON.stringify(dataToExport, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const link = document.createElement('a');
		const url = URL.createObjectURL(blob);

		link.setAttribute('href', url);
		link.setAttribute('download', `payments-export-${new Date().toISOString().split('T')[0]}.json`);
		link.style.visibility = 'hidden';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>

{#snippet StatusSnippet({ value }: { value: string })}
	{@const styles = {
		success:
			'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
		failed:
			'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
		processing:
			'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
	}[value]}
	<Badge class={cn('rounded-full border-none focus-visible:outline-none', styles)}>
		{value}
	</Badge>
{/snippet}

<div class="w-full">
	<div class="flex justify-between gap-2 pb-4 max-sm:flex-col sm:items-center">
		<div class="flex items-center space-x-2">
			<Input placeholder="Search all columns..." bind:value={globalFilter} class="max-w-sm" />
		</div>
		<div class="flex items-center space-x-2">
			<div class="text-sm text-muted-foreground">
				{#if table.getSelectedRowModel().rows.length > 0}
					<span class="mr-2">
						{table.getSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
						selected
					</span>
				{/if}
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm">
							<DownloadIcon class="mr-2 h-4 w-4" />
							Export
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item onclick={exportToCSV}>
						<FileTextIcon class="mr-2 h-4 w-4" />
						Export as CSV
					</DropdownMenu.Item>
					<DropdownMenu.Item onclick={exportToExcel}>
						<FileSpreadsheetIcon class="mr-2 h-4 w-4" />
						Export as Excel
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onclick={exportToJSON}>
						<FileTextIcon class="mr-2 h-4 w-4" />
						Export as JSON
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup}
					<Table.Row>
						{#each headerGroup.headers as header}
							<Table.Head>
								{#if !header.isPlaceholder}
									<FlexRender
										content={header.column.columnDef.header}
										context={header.getContext()}
									/>
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
	<p class="mt-4 text-center text-sm text-muted-foreground">
		Data table with export functionality (CSV, Excel, JSON)
	</p>
</div>
