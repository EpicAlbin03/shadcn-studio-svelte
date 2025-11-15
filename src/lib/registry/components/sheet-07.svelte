<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		type ColumnDef,
		type ColumnFiltersState,
		type SortingState,
		type VisibilityState,
		type RowSelectionState,
		getCoreRowModel,
		getPaginationRowModel,
		getSortedRowModel,
		getFilteredRowModel,
		getFacetedUniqueValues
	} from '@tanstack/table-core';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { createRawSnippet } from 'svelte';

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
			header: () => 'Amount',
			cell: ({ row }) => {
				const amountSnippet = createRawSnippet<[number]>((getAmount) => {
					const amount = getAmount();
					const formatted = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(amount);
					return {
						render: () => `<div class="text-right font-medium">${formatted}</div>`
					};
				});
				return renderSnippet(amountSnippet, row.getValue('amount'));
			}
		}
	];

	let tableData = $state(data);
	let globalFilter = $state('');
	let columnFilters = $state<ColumnFiltersState>([]);
	let rowSelection = $state<RowSelectionState>({});
	let isSheetOpen = $state(false);

	// Form state for adding new user
	let newUser = $state({
		name: '',
		email: '',
		amount: '',
		status: 'pending' as Payment['status']
	});

	// Function to handle form submission
	function handleAddUser() {
		if (!newUser.name || !newUser.email || !newUser.amount) {
			return; // Basic validation
		}

		const newPayment: Payment = {
			id: String(tableData.length + 1),
			name: newUser.name,
			email: newUser.email,
			amount: parseFloat(newUser.amount),
			status: newUser.status
		};

		tableData = [...tableData, newPayment];

		// Reset form
		newUser = {
			name: '',
			email: '',
			amount: '',
			status: 'pending'
		};

		isSheetOpen = false;
	}

	const table = createSvelteTable({
		get data() {
			return tableData;
		},
		columns,
		globalFilterFn: 'includesString',
		enableSortingRemoval: false,
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
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		onColumnFiltersChange: (updater) => {
			if (typeof updater === 'function') {
				columnFilters = updater(columnFilters);
			} else {
				columnFilters = updater;
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
	<div class="flex justify-between gap-2 py-4 max-sm:flex-col sm:items-center">
		<Input placeholder="Search all columns..." bind:value={globalFilter} class="max-w-2xs" />
		<Sheet.Root bind:open={isSheetOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline">
						<PlusIcon />
						Add Users
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Add New User</Sheet.Title>
					<Sheet.Description>
						Add a new user to the table. Fill in all the required information.
					</Sheet.Description>
				</Sheet.Header>
				<div class="grid flex-1 auto-rows-min gap-6 px-4">
					<div class="grid gap-3">
						<Label for="user-name">Name</Label>
						<Input id="user-name" bind:value={newUser.name} placeholder="Enter user name" />
					</div>
					<div class="grid gap-3">
						<Label for="user-email">Email</Label>
						<Input
							id="user-email"
							type="email"
							bind:value={newUser.email}
							placeholder="Enter email address"
						/>
					</div>
					<div class="grid gap-3">
						<Label for="user-amount">Amount</Label>
						<Input
							id="user-amount"
							type="number"
							bind:value={newUser.amount}
							placeholder="Enter amount"
						/>
					</div>
					<div class="grid gap-3">
						<Label for="user-status">Status</Label>
						<Select.Root type="single" bind:value={newUser.status}>
							<Select.Trigger class="w-full">
								{newUser.status
									? newUser.status.charAt(0).toUpperCase() + newUser.status.slice(1)
									: 'Select status'}
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="pending">Pending</Select.Item>
								<Select.Item value="processing">Processing</Select.Item>
								<Select.Item value="success">Success</Select.Item>
								<Select.Item value="failed">Failed</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
				</div>
				<Sheet.Footer>
					<Button onclick={handleAddUser}>Add User</Button>
					<Sheet.Close>
						{#snippet child({ props })}
							<Button {...props} variant="outline">Cancel</Button>
						{/snippet}
					</Sheet.Close>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
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
	<p class="mt-4 text-center text-sm text-muted-foreground">Add new user with sheet</p>
</div>
