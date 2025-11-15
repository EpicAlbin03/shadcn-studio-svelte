<script lang="ts">
	import {
		ChevronDownIcon,
		ChevronFirstIcon,
		ChevronLastIcon,
		ChevronLeftIcon,
		ChevronRightIcon,
		ChevronUpIcon
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
	import { createRawSnippet } from 'svelte';

	type Item = {
		product_name: string;
		price: string;
		availability: 'In Stock' | 'Out of Stock' | 'Limited';
	};

	const data: Item[] = [
		{
			product_name: 'Apple iPhone 15',
			price: '$999',
			availability: 'In Stock'
		},
		{
			product_name: 'Apple iPhone 16',
			price: '$999',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Samsung Galaxy S23',
			price: '$849',
			availability: 'In Stock'
		},
		{
			product_name: 'Google Pixel 8',
			price: '$699',
			availability: 'Limited'
		},
		{
			product_name: 'OnePlus 11',
			price: '$799',
			availability: 'In Stock'
		},
		{
			product_name: 'Xiaomi 13 Pro',
			price: '$749',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Motorola Edge 40',
			price: '$699',
			availability: 'In Stock'
		},
		{
			product_name: 'Sony Xperia 1 V',
			price: '$1200',
			availability: 'Limited'
		},
		{
			product_name: 'Apple iPhone 14 Pro',
			price: '$1099',
			availability: 'In Stock'
		},
		{
			product_name: 'Samsung Galaxy Z Flip 5',
			price: '$999',
			availability: 'Limited'
		},
		{
			product_name: 'Google Pixel 7a',
			price: '$499',
			availability: 'In Stock'
		},
		{
			product_name: 'Oppo Find X5 Pro',
			price: '$1099',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Realme GT 2 Pro',
			price: '$799',
			availability: 'In Stock'
		},
		{
			product_name: 'Apple iPhone SE (2022)',
			price: '$429',
			availability: 'In Stock'
		},
		{
			product_name: 'Samsung Galaxy A54',
			price: '$449',
			availability: 'In Stock'
		},
		{
			product_name: 'Huawei P50 Pro',
			price: '$899',
			availability: 'Limited'
		},
		{
			product_name: 'Asus ROG Phone 6',
			price: '$999',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Vivo X90 Pro',
			price: '$1049',
			availability: 'In Stock'
		},
		{
			product_name: 'Samsung Galaxy S22 Ultra',
			price: '$1199',
			availability: 'Limited'
		},
		{
			product_name: 'Nokia X30 5G',
			price: '$599',
			availability: 'In Stock'
		},
		{
			product_name: 'Apple iPhone 13 Mini',
			price: '$699',
			availability: 'In Stock'
		},
		{
			product_name: 'Google Pixel 7 Pro',
			price: '$899',
			availability: 'In Stock'
		},
		{
			product_name: 'Samsung Galaxy Z Fold 5',
			price: '$1799',
			availability: 'Limited'
		},
		{
			product_name: 'OnePlus Nord 2T',
			price: '$399',
			availability: 'In Stock'
		},
		{
			product_name: 'Redmi Note 12 Pro',
			price: '$299',
			availability: 'In Stock'
		},
		{
			product_name: 'Xiaomi Mi 11 Ultra',
			price: '$749',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Honor Magic 5 Pro',
			price: '$1199',
			availability: 'In Stock'
		},
		{
			product_name: 'Apple iPhone 12',
			price: '$799',
			availability: 'In Stock'
		},
		{
			product_name: 'Realme Narzo 50 Pro',
			price: '$249',
			availability: 'In Stock'
		},
		{
			product_name: 'Sony Xperia 5 IV',
			price: '$999',
			availability: 'Limited'
		},
		{
			product_name: 'Oppo Reno 8 Pro',
			price: '$499',
			availability: 'In Stock'
		},
		{
			product_name: 'Motorola Moto G Power (2023)',
			price: '$299',
			availability: 'In Stock'
		},
		{
			product_name: 'Infinix Zero Ultra',
			price: '$599',
			availability: 'Limited'
		},
		{
			product_name: 'Samsung Galaxy Note 20 Ultra',
			price: '$1099',
			availability: 'Out of Stock'
		},
		{
			product_name: 'LG Wing 5G',
			price: '$999',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Huawei Mate X2',
			price: '$1999',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Google Pixel 6',
			price: '$599',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Nokia G60',
			price: '$349',
			availability: 'In Stock'
		},
		{
			product_name: 'Realme X7 Pro',
			price: '$499',
			availability: 'Out of Stock'
		},
		{
			product_name: 'Sony Xperia 10 IV',
			price: '$399',
			availability: 'Out of Stock'
		}
	];

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
				const productName = row.getValue('product_name');
				const productNameSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-medium">${productName}</div>`
					};
				});
				return renderSnippet(productNameSnippet);
			}
		},
		{
			header: 'Price',
			accessorKey: 'price',
			cell: ({ row }) => {
				const price = row.getValue('price');
				const priceSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-medium">${price}</div>`
					};
				});
				return renderSnippet(priceSnippet);
			}
		},
		{
			header: 'Availability',
			accessorKey: 'availability',
			cell: ({ getValue }) => {
				return renderSnippet(AvailabilitySnippet, { value: getValue() as string });
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
		enableSortingRemoval: false,
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
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
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

{#snippet AvailabilitySnippet({ value }: { value: string })}
	{@const styles = {
		'In Stock':
			'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
		'Out of Stock':
			'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
		Limited:
			'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
	}[value]}
	<Badge class={cn('rounded-full border-none focus-visible:outline-none', styles)}>
		{value}
	</Badge>
{/snippet}

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
												<ChevronUpIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
											{:else if header.column.getIsSorted() === 'desc'}
												<ChevronDownIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
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
			<Select.Root
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
				</Select.Trigger>
				<Select.Content
					class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2"
				>
					{#each [5, 10, 25, 50] as pageSize (pageSize)}
						<Select.Item value={pageSize.toString()}>{pageSize}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
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
				<ChevronFirstIcon size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
				aria-label="Go to previous page"
			>
				<ChevronLeftIcon size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
				aria-label="Go to next page"
			>
				<ChevronRightIcon size={16} aria-hidden="true" />
			</Button>

			<Button
				size="sm"
				variant="outline"
				class="disabled:pointer-events-none disabled:opacity-50"
				onclick={() => table.lastPage()}
				disabled={!table.getCanNextPage()}
				aria-label="Go to last page"
			>
				<ChevronLastIcon size={16} aria-hidden="true" />
			</Button>
		</div>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Paginated data table</p>
</div>
