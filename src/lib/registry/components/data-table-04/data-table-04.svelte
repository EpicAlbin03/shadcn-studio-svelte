<script lang="ts" module>
	export type Item = {
		id: string;
		product: string;
		productImage: string;
		fallback: string;
		price: number;
		availability: 'In Stock' | 'Out of Stock' | 'Limited';
		rating: number;
	};
</script>

<script lang="ts">
	import {
		type ColumnDef,
		type ColumnFiltersState,
		type Row,
		type RowSelectionState,
		getCoreRowModel,
		getFacetedUniqueValues,
		getFilteredRowModel
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
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import Filter from './Filter.svelte';

	const items: Item[] = [
		{
			id: '1',
			product: 'Black Chair',
			productImage: '/components/product-01.webp',
			fallback: 'BC',
			price: 159,
			availability: 'In Stock',
			rating: 3.9
		},
		{
			id: '2',
			product: 'Nike Jordan',
			productImage: '/components/product-02.webp',
			fallback: 'NJ',
			price: 599,
			availability: 'Limited',
			rating: 4.4
		},
		{
			id: '3',
			product: 'OnePlus 7 Pro',
			productImage: '/components/product-03.webp',
			fallback: 'O7P',
			price: 1299,
			availability: 'Out of Stock',
			rating: 3.5
		},
		{
			id: '4',
			product: 'Nintendo Switch',
			productImage: '/components/product-04.webp',
			fallback: 'NS',
			price: 499,
			availability: 'In Stock',
			rating: 4.9
		},
		{
			id: '5',
			product: 'Apple Magic Mouse',
			productImage: '/components/product-05.webp',
			fallback: 'AMM',
			price: 970,
			availability: 'Limited',
			rating: 4.1
		},
		{
			id: '6',
			product: 'Apple Watch',
			productImage: '/components/product-06.webp',
			fallback: 'AW',
			price: 1500,
			availability: 'Limited',
			rating: 3.1
		},
		{
			id: '7',
			product: 'Casio G-Shock',
			productImage: '/components/product-08.webp',
			fallback: 'CGS',
			price: 194,
			availability: 'Out of Stock',
			rating: 1.5
		},
		{
			id: '8',
			product: 'RayBan Sunglasses',
			productImage: '/components/product-10.webp',
			fallback: 'RBS',
			price: 199,
			availability: 'Out of Stock',
			rating: 2.4
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
				})
		},
		{
			accessorKey: 'product',
			header: 'Product',
			cell: ({ row }) => {
				return renderSnippet(ProductSnippet, row);
			}
		},
		{
			accessorKey: 'price',
			header: 'Price',
			cell: ({ row }) => {
				const price = row.getValue('price');
				const priceSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>$${price}</div>`
					};
				});
				return renderSnippet(priceSnippet);
			},
			enableSorting: false,
			meta: {
				filterVariant: 'range'
			}
		},
		{
			accessorKey: 'availability',
			header: 'Availability',
			cell: ({ row }) => {
				return renderSnippet(AvailabilitySnippet, row.getValue('availability'));
			},
			enableSorting: false,
			meta: {
				filterVariant: 'select'
			}
		},
		{
			accessorKey: 'rating',
			header: 'Rating',
			cell: ({ row }) => {
				const rating = row.getValue('rating');
				const ratingSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${rating}</div>`
					};
				});
				return renderSnippet(ratingSnippet);
			},
			meta: {
				filterVariant: 'range'
			}
		}
	];

	let rowSelection = $state<RowSelectionState>({});
	let columnFilters = $state<ColumnFiltersState>([]);

	const table = createSvelteTable({
		get data() {
			return items;
		},
		columns,
		state: {
			get rowSelection() {
				return rowSelection;
			},
			get columnFilters() {
				return columnFilters;
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
		},
		enableSortingRemoval: false
	});
</script>

{#snippet ProductSnippet(row: Row<Item>)}
	<div class="flex items-center gap-3">
		<Avatar.Root class="rounded-sm">
			<Avatar.Image src={row.original.productImage} alt={row.original.fallback} />
			<Avatar.Fallback class="text-xs">{row.original.fallback}</Avatar.Fallback>
		</Avatar.Root>
		<div class="font-medium">{row.getValue('product')}</div>
	</div>
{/snippet}

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

<div class="w-full">
	<div class="flex flex-wrap gap-3 px-2 py-6">
		<div class="w-44">
			<Filter column={table.getColumn('product')!} />
		</div>
		<div class="w-36">
			<Filter column={table.getColumn('price')!} />
		</div>
		<div class="w-44">
			<Filter column={table.getColumn('availability')!} />
		</div>
		<div class="w-36">
			<Filter column={table.getColumn('rating')!} />
		</div>
	</div>
	<div class="rounded-md border">
		<Table.Root>
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
	<p class="mt-4 text-center text-sm text-muted-foreground">Data table with column filter</p>
</div>
