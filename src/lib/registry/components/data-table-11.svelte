<script lang="ts">
	import {
		ChevronDownIcon,
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
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Table from '$lib/components/ui/table';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table';
	import { usePagination } from '$lib/hooks/use-pagination.svelte';
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
				return renderSnippet(AvailabilitySnippet, row.getValue('availability'));
			}
		}
	];

	const pageSize = 5;

	let rowSelection = $state<RowSelectionState>({});
	let pagination = $state<PaginationState>({
		pageIndex: 0,
		pageSize: pageSize
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

	const { pages, showLeftEllipsis, showRightEllipsis } = $derived(
		usePagination({
			currentPage: table.getState().pagination.pageIndex + 1,
			totalPages: table.getPageCount(),
			paginationItemsToDisplay: 5
		})
	);
</script>

{#snippet AvailabilitySnippet(availability: string)}
	{@const styles = {
		'In Stock':
			'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
		'Out of Stock':
			'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
		Limited:
			'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
	}[availability]}
	<Badge class={cn('rounded-full border-none focus-visible:outline-none', styles)}>
		{availability}
	</Badge>
{/snippet}

<div class="w-full space-y-4">
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

	<div class="flex items-center justify-between gap-3 max-sm:flex-col">
		<p class="flex-1 text-sm whitespace-nowrap text-muted-foreground" aria-live="polite">
			Page <span class="text-foreground">{table.getState().pagination.pageIndex + 1}</span> of
			<span class="text-foreground">{table.getPageCount()}</span>
		</p>

		<div class="grow">
			<div class="flex items-center justify-center space-x-2">
				<Button
					size="icon"
					variant="outline"
					class="disabled:pointer-events-none disabled:opacity-50"
					onclick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					aria-label="Go to previous page"
				>
					<ChevronLeftIcon size={16} aria-hidden="true" />
				</Button>

				{#if showLeftEllipsis}
					<span class="px-3 py-2 text-sm text-muted-foreground">...</span>
				{/if}

				{#each pages as page (page)}
					{@const isActive = page === table.getState().pagination.pageIndex + 1}
					<Button
						size="icon"
						variant={isActive ? 'outline' : 'ghost'}
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
					size="icon"
					variant="outline"
					class="disabled:pointer-events-none disabled:opacity-50"
					onclick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
					aria-label="Go to next page"
				>
					<ChevronRightIcon size={16} aria-hidden="true" />
				</Button>
			</div>
		</div>

		<div class="flex flex-1 justify-end">
			<Select.Root
				type="single"
				value={table.getState().pagination.pageSize.toString()}
				onValueChange={(value) => {
					if (value) {
						table.setPageSize(Number(value));
					}
				}}
			>
				<Select.Trigger
					id="results-per-page"
					class="w-fit whitespace-nowrap"
					aria-label="Results per page"
				>
					{table.getState().pagination.pageSize} / page
				</Select.Trigger>
				<Select.Content>
					{#each [5, 10, 25, 50] as pageSizeOption (pageSizeOption)}
						<Select.Item value={pageSizeOption.toString()}>
							{pageSizeOption} / page
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">
		Data table with pagination
		<a href="https://originui.com/table" class="underline hover:text-primary" target="_blank">
			Origin UI
		</a>
	</p>
</div>
