<script lang="ts">
	import {
		ChevronDown,
		ChevronFirst,
		ChevronLast,
		ChevronLeft,
		ChevronRight,
		ChevronUp
	} from '@lucide/svelte';
	import type {
		ColumnDef,
		PaginationState,
		SortingState,
		RowSelectionState
	} from '@tanstack/table-core';
	import { getCoreRowModel, getPaginationRowModel, getSortedRowModel } from '@tanstack/table-core';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Table from '$lib/components/ui/table';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table';
	import { cn } from '$lib/utils';
	import { data } from './product-data.js';
	import type { Item } from './product-data.js';
	import { createRawSnippet } from 'svelte';

	const columns: ColumnDef<Item>[] = [
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
			size: 28,
			enableSorting: false
		},
		{
			header: 'Product Name',
			accessorKey: 'product_name',
			cell: ({ row }) => {
				const productNameSnippet = createRawSnippet<[string]>((getProductName) => {
					const productName = getProductName();
					return {
						render: () => `<div class="font-medium">${productName}</div>`
					};
				});
				return renderSnippet(productNameSnippet, row.getValue('product_name'));
			}
		},
		{
			header: 'Price',
			accessorKey: 'price',
			cell: ({ row }) => {
				const priceSnippet = createRawSnippet<[string]>((getPrice) => {
					const price = getPrice();
					return {
						render: () => `<div class="font-medium">${price}</div>`
					};
				});
				return renderSnippet(priceSnippet, row.getValue('price'));
			}
		},
		{
			header: 'Availability',
			accessorKey: 'availability',
			cell: ({ row }) => {
				const availability = row.getValue('availability') as string;

				const styles = {
					'In Stock':
						'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
					'Out of Stock':
						'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
					Limited:
						'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
				}[availability];

				const badgeSnippet = createRawSnippet<[string]>((getAvailability) => {
					const availability = getAvailability();
					return {
						render: () =>
							`<span class="${cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-none focus-visible:outline-none', styles)}">${availability}</span>`
					};
				});

				return renderSnippet(badgeSnippet, availability);
			}
		}
	];

	let rowSelection = $state<RowSelectionState>({});
	let pagination = $state<PaginationState>({
		pageIndex: 0,
		pageSize: 5
	});
	let sorting = $state<SortingState>([
		{
			id: 'product_name',
			desc: false
		}
	]);

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get rowSelection() {
				return rowSelection;
			},
			get pagination() {
				return pagination;
			},
			get sorting() {
				return sorting;
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
		enableSortingRemoval: false,
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: (updater) => {
			if (typeof updater === 'function') {
				pagination = updater(pagination);
			} else {
				pagination = updater;
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

	let labelId = Math.random().toString(36).substring(7);
</script>

<div class="space-y-4 md:w-full">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row class="hover:bg-transparent">
						{#each headerGroup.headers as header (header.id)}
							<Table.Head style="width: {header.getSize()}px" class="h-11">
								{#if !header.isPlaceholder}
									{#if header.column.getCanSort()}
										<div
											class={cn(
												'flex h-full cursor-pointer items-center justify-between gap-2 select-none'
											)}
											onclick={header.column.getToggleSortingHandler()}
											onkeydown={(e) => {
												if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
													e.preventDefault();
													header.column.getToggleSortingHandler()?.(e);
												}
											}}
											tabindex={header.column.getCanSort() ? 0 : undefined}
											role="button"
										>
											<FlexRender
												content={header.column.columnDef.header}
												context={header.getContext()}
											/>
											{#if header.column.getIsSorted() === 'asc'}
												<ChevronUp class="shrink-0 opacity-60" size={16} aria-hidden="true" />
											{:else if header.column.getIsSorted() === 'desc'}
												<ChevronDown class="shrink-0 opacity-60" size={16} aria-hidden="true" />
											{/if}
										</div>
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

	<div class="flex items-center justify-between gap-8">
		<div class="flex items-center gap-3">
			<Label for={labelId} class="max-sm:sr-only">Rows per page</Label>
			<Select
				type="single"
				value={table.getState().pagination.pageSize.toString()}
				onValueChange={(value: string) => {
					if (value) {
						table.setPageSize(Number(value));
					}
				}}
			>
				<Select.Trigger id={labelId} class="w-fit whitespace-nowrap">
					{table.getState().pagination.pageSize}
				</SelectTrigger>
				<SelectContent
					class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
				>
					{#each [5, 10, 25, 50] as pageSize (pageSize)}
						<Select.Item value={pageSize.toString()}>{pageSize}</SelectItem>
					{/each}
				</SelectContent>
			</Select>
		</div>

		<div class="flex grow justify-end text-sm whitespace-nowrap text-muted-foreground">
			<p class="text-sm whitespace-nowrap text-muted-foreground" aria-live="polite">
				<span class="text-foreground">
					{table.getState().pagination.pageIndex * table.getState().pagination.pageSize +
						1}-{Math.min(
						Math.max(
							table.getState().pagination.pageIndex * table.getState().pagination.pageSize +
								table.getState().pagination.pageSize,
							0
						),
						table.getRowCount()
					)}
				</span>
				of <span class="text-foreground">{table.getRowCount().toString()}</span>
			</p>
		</div>

		<div class="flex items-center space-x-2">
			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.firstPage()}
				disabled={!table.getCanPreviousPage()}
				aria-label="Go to first page"
			>
				<ChevronFirst size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
				aria-label="Go to previous page"
			>
				<ChevronLeft size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
				aria-label="Go to next page"
			>
				<ChevronRight size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.lastPage()}
				disabled={!table.getCanNextPage()}
				aria-label="Go to last page"
			>
				<ChevronLast size={16} aria-hidden="true" />
			</Button>
		</div>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Paginated data table</p>
</div>
