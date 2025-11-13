<script lang="ts">
	import { type ColumnDef, type RowSelectionState, getCoreRowModel } from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Select from '$lib/components/ui/select';
	import { Rows2Icon, Rows3Icon, Rows4Icon } from '@lucide/svelte';
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

	const densities = [
		{ value: 'compact', label: 'Compact' },
		{ value: 'standard', label: 'Standard' },
		{ value: 'flexible', label: 'Flexible' }
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
			cell: ({ row }) => {
				const status = row.getValue('status');
				const statusSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="capitalize">${status}</div>`
					};
				});
				return renderSnippet(statusSnippet);
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
				const amountHeaderSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="text-right">Amount</div>`
					};
				});
				return renderSnippet(amountHeaderSnippet);
			},
			cell: ({ row }) => {
				const formatter = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				});
				const amount = formatter.format(Number.parseFloat(row.getValue('amount')));
				const amountCellSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="text-right font-medium">${amount}</div>`
					};
				});

				return renderSnippet(amountCellSnippet);
			}
		}
	];

	let density = $state<string>();
	const triggerContent = $derived(densities.find((f) => f.value === density)?.label ?? 'Density');

	let rowSelection = $state<RowSelectionState>({});

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get rowSelection() {
				return rowSelection;
			}
		},
		getCoreRowModel: getCoreRowModel(),
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
	<div class="py-4">
		<Select.Root type="single" bind:value={density}>
			<Select.Trigger class="w-full max-w-3xs" aria-label="Density select">
				{triggerContent}
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Density</Select.Label>
					<Select.Item value="compact">
						<div class="flex items-center gap-2">
							<Rows4Icon class="h-4 w-4" />
							Compact
						</div>
					</Select.Item>
					<Select.Item value="standard" class="flex items-center gap-2">
						<div class="flex items-center gap-2">
							<Rows3Icon class="h-4 w-4" /> Standard
						</div>
					</Select.Item>
					<Select.Item value="flexible" class="flex items-center gap-2">
						<div class="flex items-center gap-2">
							<Rows2Icon class="h-4 w-4" />
							Flexible
						</div>
					</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root
			class={cn({
				'[&_td]:py-px [&_th]:py-px': density === 'compact',
				'[&_td]:py-1 [&_th]:py-1': density === 'standard',
				'[&_td]:py-2 [&_th]:py-1': density === 'flexible'
			})}
		>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head class="[&:has([role=checkbox])]:pl-3">
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
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell class="[&:has([role=checkbox])]:pl-3">
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
	<p class="mt-4 text-center text-sm text-muted-foreground">
		Density data table
		<a
			href="https://www.shadcnui-blocks.com/components/table"
			class="underline hover:text-primary"
			target="_blank"
		>
			Shadcn UI Blocks
		</a>
	</p>
</div>
