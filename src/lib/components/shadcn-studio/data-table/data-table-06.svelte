<script lang="ts">
	import { type ColumnDef, type ColumnSizingState, getCoreRowModel } from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';

	type Payment = {
		id: string;
		name: string;
		amount: number;
		status: 'pending' | 'processing' | 'success' | 'failed';
		email: string;
		dueDate: string;
	};

	const data: Payment[] = [
		{
			id: '1',
			name: 'Shang Chain',
			amount: 699,
			status: 'success',
			email: 'shang07@yahoo.com',
			dueDate: '2023-10-01'
		},
		{
			id: '2',
			name: 'Kevin Lincoln',
			amount: 242,
			status: 'success',
			email: 'kevinli09@gmail.com',
			dueDate: '2023-10-01'
		},
		{
			id: '3',
			name: 'Milton Rose',
			amount: 655,
			status: 'processing',
			email: 'rose96@gmail.com',
			dueDate: '2023-10-01'
		},
		{
			id: '4',
			name: 'Silas Ryan',
			amount: 874,
			status: 'success',
			email: 'silas22@gmail.com',
			dueDate: '2023-10-01'
		},
		{
			id: '5',
			name: 'Ben Tenison',
			amount: 541,
			status: 'failed',
			email: 'bent@hotmail.com',
			dueDate: '2023-10-01'
		}
	];

	const columns: ColumnDef<Payment>[] = [
		{
			accessorKey: 'name',
			header: () => {
				const nameHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="truncate">Name</div>`
				}));
				return renderSnippet(nameHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const nameSnippet = createRawSnippet<[string]>((getName) => {
					const name = getName();
					return {
						render: () => `<div class="truncate font-medium">${name}</div>`
					};
				});
				return renderSnippet(nameSnippet, row.getValue('name'));
			}
		},
		{
			accessorKey: 'status',
			header: () => {
				const statusHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="truncate">Status</div>`
				}));
				return renderSnippet(statusHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const statusSnippet = createRawSnippet<[string]>((getStatus) => {
					const status = getStatus();
					return {
						render: () => `<div class="truncate capitalize">${status}</div>`
					};
				});
				return renderSnippet(statusSnippet, row.getValue('status'));
			}
		},
		{
			accessorKey: 'email',
			header: () => {
				const emailHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="truncate">Email</div>`
				}));
				return renderSnippet(emailHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const emailSnippet = createRawSnippet<[string]>((getEmail) => {
					const email = getEmail();
					return {
						render: () => `<div class="truncate lowercase">${email}</div>`
					};
				});
				return renderSnippet(emailSnippet, row.getValue('email'));
			}
		},
		{
			accessorKey: 'amount',
			header: () => {
				const amountHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="truncate">Amount</div>`
				}));
				return renderSnippet(amountHeaderSnippet, '');
			},
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
		},
		{
			accessorKey: 'dueDate',
			header: () => {
				const dueDateHeaderSnippet = createRawSnippet(() => ({
					render: () => `<div class="truncate">Due Date</div>`
				}));
				return renderSnippet(dueDateHeaderSnippet, '');
			},
			cell: ({ row }) => {
				const dueDateSnippet = createRawSnippet<[string]>((getDueDate) => {
					const dueDate = getDueDate();
					return {
						render: () => `<div class="truncate lowercase">${dueDate}</div>`
					};
				});
				return renderSnippet(dueDateSnippet, row.getValue('dueDate'));
			}
		}
	];

	let columnSizing = $state<ColumnSizingState>({});

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		columnResizeMode: 'onChange',
		enableColumnResizing: true,
		state: {
			get columnSizing() {
				return columnSizing;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		onColumnSizingChange: (updater) => {
			if (typeof updater === 'function') {
				columnSizing = updater(columnSizing);
			} else {
				columnSizing = updater;
			}
		}
	});
</script>

<div class="max-w-3xl max-md:max-w-full">
	<div class="rounded-md border">
		<Table.Root class="table-fixed" style="width: {table.getCenterTotalSize()}px">
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head
								class="group/head relative h-10 select-none last:[&>.cursor-col-resize]:opacity-0"
								colspan={header.colSpan}
								style="width: {header.getSize()}px"
							>
								{#if !header.isPlaceholder}
									<FlexRender
										content={header.column.columnDef.header}
										context={header.getContext()}
									/>
								{/if}
								{#if header.column.getCanResize()}
									<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
									<div
										class="user-select-none absolute top-0 -right-2 z-10 flex h-full w-4 cursor-col-resize touch-none justify-center group-last/head:hidden before:absolute before:inset-y-0 before:w-px before:translate-x-px before:bg-border"
										role="separator"
										aria-label="Resize column"
										ondblclick={() => header.column.resetSize()}
										onmousedown={header.getResizeHandler()}
										ontouchstart={header.getResizeHandler()}
									></div>
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
							<Table.Cell class="truncate">
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
	<p class="mt-4 text-center text-sm text-muted-foreground">Data table with resizable columns</p>
</div>
