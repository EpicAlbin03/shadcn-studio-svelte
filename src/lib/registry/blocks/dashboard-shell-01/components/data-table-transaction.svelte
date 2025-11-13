<script lang="ts" module>
	import { ChevronLeftIcon, ChevronRightIcon, EllipsisVerticalIcon } from '@lucide/svelte';
	import type { ColumnDef, PaginationState } from '@tanstack/table-core';
	import {
		getCoreRowModel,
		getFilteredRowModel,
		getPaginationRowModel,
		getSortedRowModel
	} from '@tanstack/table-core';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { usePagination } from '$lib/registry/hooks/use-pagination.svelte.js';
	import { createRawSnippet } from 'svelte';
	import { cn } from '$lib/utils';

	type Status = 'pending' | 'processing' | 'paid' | 'failed';
	type PaidBy = 'mastercard' | 'visa';

	export type TransactionItem = {
		id: string;
		avatar: string;
		avatarFallback: string;
		name: string;
		email: string;
		amount: number;
		status: Status;
		paidBy: PaidBy;
	};
</script>

<script lang="ts">
	type Props = {
		data: TransactionItem[];
	};

	let { data }: Props = $props();

	const pageSize = 5;

	let pagination = $state<PaginationState>({
		pageIndex: 0,
		pageSize: pageSize
	});

	const columns: ColumnDef<TransactionItem>[] = [
		{
			accessorKey: 'name',
			header: 'Customer',
			cell: ({ row }) => {
				return renderSnippet(CustomerCell, { item: row.original });
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

				const amountSnippet = createRawSnippet(() => {
					return {
						render: () => `<span>${formatted}</span>`
					};
				});
				return renderSnippet(amountSnippet);
			}
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ row }) => {
				return renderSnippet(StatusBadge, { status: row.original.status });
			}
		},
		{
			accessorKey: 'paidBy',
			header: () => {
				const paidByHeaderSnippet = createRawSnippet(() => {
					return {
						render: () => `<span class="w-fit">Paid by</span>`
					};
				});
				return renderSnippet(paidByHeaderSnippet, '');
			},
			cell: ({ row }) => {
				return renderSnippet(PaymentImage, { paidBy: row.original.paidBy });
			}
		},
		{
			id: 'actions',
			header: () => 'Actions',
			cell: () => renderSnippet(RowActions, undefined),
			size: 60,
			enableHiding: false
		}
	];

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get pagination() {
				return pagination;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				pagination = updater(pagination);
			} else {
				pagination = updater;
			}
		}
	});

	const { pages, showLeftEllipsis, showRightEllipsis } = $derived(
		usePagination({
			currentPage: table.getState().pagination.pageIndex + 1,
			totalPages: table.getPageCount(),
			paginationItemsToDisplay: 3
		})
	);
</script>

{#snippet CustomerCell({ item }: { item: TransactionItem })}
	<div class="flex items-center gap-2">
		<Avatar.Root class="size-9">
			<Avatar.Image src={item.avatar} alt={item.name} />
			<Avatar.Fallback class="text-xs">{item.avatarFallback}</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex flex-col text-sm">
			<span class="font-medium text-card-foreground">{item.name}</span>
			<span class="text-muted-foreground">{item.email}</span>
		</div>
	</div>
{/snippet}

{#snippet StatusBadge({ status }: { status: Status })}
	<Badge class="rounded-md bg-primary/10 px-1.5 text-primary capitalize">{status}</Badge>
{/snippet}

{#snippet PaymentImage({ paidBy }: { paidBy: PaidBy })}
	<img
		src={paidBy === 'mastercard' ? '/blocks/mastercard.webp' : '/blocks/visa.webp'}
		alt="Payment platform"
		class="w-10.5"
	/>
{/snippet}

{#snippet RowActions()}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					size="icon"
					variant="ghost"
					class="rounded-full p-2"
					aria-label="Edit item"
				>
					<EllipsisVerticalIcon class="size-5" aria-hidden="true" />
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Group>
				<DropdownMenu.Item>Edit</DropdownMenu.Item>
				<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
				<DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/snippet}

<div class="w-full">
	<div class="border-b">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head class="h-14 text-muted-foreground first:pl-4">
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
							<Table.Cell class="first:pl-4">
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

	<div class="flex items-center justify-between gap-3 px-6 py-4 max-sm:flex-col md:max-lg:flex-col">
		<p class="text-sm whitespace-nowrap text-muted-foreground" aria-live="polite">
			Showing
			<span>
				{table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to
				{Math.min(
					Math.max(
						table.getState().pagination.pageIndex * table.getState().pagination.pageSize +
							table.getState().pagination.pageSize,
						0
					),
					table.getRowCount()
				)}
			</span>
			of <span>{table.getRowCount().toString()} entries</span>
		</p>

		<div class="flex items-center justify-center space-x-2">
			<Button
				class="disabled:pointer-events-none disabled:opacity-50"
				variant="ghost"
				onclick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
				aria-label="Go to previous page"
			>
				<ChevronLeftIcon size={16} aria-hidden="true" />
				Previous
			</Button>

			{#if showLeftEllipsis}
				<span class="px-3 py-2 text-sm text-muted-foreground">...</span>
			{/if}

			{#each pages as page (page)}
				{@const isActive = page === table.getState().pagination.pageIndex + 1}
				<Button
					size="icon"
					variant={isActive ? 'default' : 'ghost'}
					class={cn({
						'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40':
							!isActive
					})}
					onclick={() => table.setPageIndex(page - 1)}
					aria-current={isActive ? 'page' : undefined}
				>
					{page}
				</Button>
			{/each}

			{#if showRightEllipsis}
				<span class="px-3 py-2 text-sm text-muted-foreground">...</span>
			{/if}

			<Button
				class="disabled:pointer-events-none disabled:opacity-50"
				variant="ghost"
				onclick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
				aria-label="Go to next page"
			>
				Next
				<ChevronRightIcon size={16} aria-hidden="true" />
			</Button>
		</div>
	</div>
</div>
