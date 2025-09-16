<script lang="ts">
	import {
		type ColumnDef,
		type RowSelectionState,
		type SortingState,
		getCoreRowModel,
		getSortedRowModel
	} from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { ChevronDownIcon, ChevronUpIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	type Payment = {
		id: string;
		name: string;
		amount: number;
		status: 'pending' | 'processing' | 'success' | 'failed';
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
			header: 'Name',
			accessorKey: 'name',
			cell: ({ row }) => {
				const nameSnippet = createRawSnippet<[string]>((getName) => {
					const name = getName();
					return {
						render: () => `<div class="font-medium">${name}</div>`
					};
				});
				return renderSnippet(nameSnippet, row.getValue('name'));
			}
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				const statusSnippet = createRawSnippet<[string]>((getStatus) => {
					const status = getStatus();
					return {
						render: () => `<div class="capitalize">${status}</div>`
					};
				});
				return renderSnippet(statusSnippet, row.getValue('status'));
			}
		},
		{
			accessorKey: 'email',
			header: 'Email',
			cell: ({ row }) => {
				const emailSnippet = createRawSnippet<[string]>((getEmail) => {
					const email = getEmail();
					return {
						render: () => `<div class="lowercase">${email}</div>`
					};
				});
				return renderSnippet(emailSnippet, row.getValue('email'));
			}
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			cell: ({ row }) => {
				const amount = parseFloat(row.getValue('amount'));
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(amount);

				const amountSnippet = createRawSnippet<[string]>((getFormatted) => {
					const formattedAmount = getFormatted();
					return {
						render: () => `<div class="font-medium">${formattedAmount}</div>`
					};
				});
				return renderSnippet(amountSnippet, formatted);
			}
		}
	];

	let sorting = $state<SortingState>([]);
	let rowSelection = $state<RowSelectionState>({});

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get sorting() {
				return sorting;
			},
			get rowSelection() {
				return rowSelection;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		onRowSelectionChange: (updater) => {
			if (typeof updater === 'function') {
				rowSelection = updater(rowSelection);
			} else {
				rowSelection = updater;
			}
		}
	});
</script>

<div class="w-full">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head
								aria-sort={header.column.getIsSorted() === 'asc'
									? 'ascending'
									: header.column.getIsSorted() === 'desc'
										? 'descending'
										: 'none'}
							>
								{#if !header.isPlaceholder}
									{#if header.column.getCanSort()}
										<button
											class={cn(
												'font-inherit flex h-full w-full cursor-pointer items-center justify-between gap-2 border-none bg-transparent p-0 text-left select-none'
											)}
											onclick={header.column.getToggleSortingHandler()}
											type="button"
										>
											<span class="truncate">
												<FlexRender
													content={header.column.columnDef.header}
													context={header.getContext()}
												/>
											</span>
											{#if header.column.getIsSorted() === 'asc'}
												<ChevronUpIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
											{:else if header.column.getIsSorted() === 'desc'}
												<ChevronDownIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
											{/if}
										</button>
									{:else}
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
									{/if}
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Data table with sortable column</p>
</div>
