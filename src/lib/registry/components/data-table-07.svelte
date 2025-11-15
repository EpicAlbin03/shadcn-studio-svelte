<script lang="ts">
	import {
		type Column,
		type ColumnDef,
		type ColumnPinningState,
		getCoreRowModel
	} from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import {
		ArrowLeftFromLineIcon,
		ArrowRightFromLineIcon,
		EllipsisIcon,
		PinOffIcon
	} from '@lucide/svelte';

	type Product = {
		productId: number;
		productName: string;
		category: string;
		stockQuantity: number;
		price: number;
		supplier: string;
		discontinued: 'no' | 'yes';
	};

	const data: Product[] = [
		{
			productId: 1,
			productName: 'Apple iPhone 14',
			category: 'Smartphones',
			stockQuantity: 4550,
			price: 1500,
			supplier: 'Dixon Electronics',
			discontinued: 'no'
		},
		{
			productId: 2,
			productName: 'Metal Frame Table',
			category: 'Furniture',
			stockQuantity: 150,
			price: 540,
			supplier: 'Milton Furniture',
			discontinued: 'no'
		},
		{
			productId: 3,
			productName: 'Xiaomi A Series',
			category: 'Electronics',
			stockQuantity: 1500,
			price: 2200,
			supplier: 'Xiaomi Electronics',
			discontinued: 'yes'
		},
		{
			productId: 4,
			productName: 'RC Monster Truck',
			category: 'Toys',
			stockQuantity: 10500,
			price: 250,
			supplier: 'Lego Toys',
			discontinued: 'no'
		},
		{
			productId: 5,
			productName: 'Glass Water Bottle',
			category: 'Kitchenware',
			stockQuantity: 5503,
			price: 69,
			supplier: 'Kitchen Essentials',
			discontinued: 'no'
		},
		{
			productId: 6,
			productName: 'BenQ Monitor 24',
			category: 'Electronics',
			stockQuantity: 600,
			price: 1000,
			supplier: 'BenQ Electronics',
			discontinued: 'yes'
		}
	];

	function getPinningStyles(column: Column<Product>) {
		const isPinned = column.getIsPinned();
		const styles: Record<string, string | number | undefined> = {};

		if (isPinned === 'left') {
			styles.left = `${column.getStart('left')}px`;
		} else if (isPinned === 'right') {
			styles.right = `${column.getAfter('right')}px`;
		}

		styles.position = isPinned ? 'sticky' : 'relative';
		styles['z-index'] = isPinned ? 1 : 0;

		return styles;
	}

	function getPinningStyleString(column: Column<Product>) {
		const styles = getPinningStyles(column);
		return Object.entries(styles)
			.filter(([, value]) => value !== undefined)
			.map(([key, value]) => `${key}: ${value}`)
			.join('; ');
	}

	const columns: ColumnDef<Product>[] = [
		{
			header: 'Product Name',
			accessorKey: 'productName',
			cell: ({ row }) => {
				const productName = row.getValue('productName');
				const productNameSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-medium">${productName}</div>`
					};
				});
				return renderSnippet(productNameSnippet);
			}
		},
		{
			header: 'Category',
			accessorKey: 'category',
			cell: ({ row }) => {
				const category = row.getValue('category');
				const categorySnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${category}</div>`
					};
				});
				return renderSnippet(categorySnippet);
			}
		},
		{
			header: 'Stock Quantity',
			accessorKey: 'stockQuantity',
			cell: ({ row }) => {
				const stock = row.getValue('stockQuantity');
				const stockSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${stock}</div>`
					};
				});
				return renderSnippet(stockSnippet);
			}
		},
		{
			header: 'Price',
			accessorKey: 'price',
			cell: ({ row }) => {
				const price = parseFloat(row.getValue('price'));
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(price);

				const priceSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${formatted}</div>`
					};
				});
				return renderSnippet(priceSnippet);
			}
		},
		{
			header: 'Supplier',
			accessorKey: 'supplier',
			cell: ({ row }) => {
				const supplier = row.getValue('supplier');
				const supplierSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${supplier}</div>`
					};
				});
				return renderSnippet(supplierSnippet);
			}
		},
		{
			header: 'Discontinued',
			accessorKey: 'discontinued',
			cell: ({ row }) => {
				const discontinued = row.getValue('discontinued');
				const discontinuedSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="capitalize">${discontinued}</div>`
					};
				});
				return renderSnippet(discontinuedSnippet);
			}
		}
	];

	let columnPinning = $state<ColumnPinningState>({ left: [], right: [] });

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		enableColumnPinning: true,
		enableSortingRemoval: false,
		state: {
			get columnPinning() {
				return columnPinning;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		onColumnPinningChange: (updater) => {
			if (typeof updater === 'function') {
				columnPinning = updater(columnPinning);
			} else {
				columnPinning = updater;
			}
		}
	});
</script>

<div class="w-full">
	<div class="rounded-md border">
		<Table.Root
			class="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-b [&_th]:border-border [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b"
		>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							{@const column = header.column}
							{@const isPinned = column.getIsPinned()}
							{@const isLastLeftPinned = isPinned === 'left' && column.getIsLastColumn('left')}
							{@const isFirstRightPinned = isPinned === 'right' && column.getIsFirstColumn('right')}
							<Table.Head
								class="relative h-10 truncate data-pinned:bg-muted/90 data-pinned:backdrop-blur-xs [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0"
								colspan={header.colSpan}
								style={getPinningStyleString(column)}
								data-pinned={isPinned || undefined}
								data-last-col={isLastLeftPinned ? 'left' : isFirstRightPinned ? 'right' : undefined}
							>
								<div class="flex items-center justify-between gap-2">
									<span class="truncate">
										{#if !header.isPlaceholder}
											<FlexRender
												content={header.column.columnDef.header}
												context={header.getContext()}
											/>
										{/if}
									</span>

									{#if !header.isPlaceholder && header.column.getCanPin()}
										{#if header.column.getIsPinned()}
											<Button
												size="icon"
												variant="ghost"
												class="-mr-1 size-7 shadow-none"
												onclick={() => header.column.pin(false)}
												aria-label="Unpin {header.column.columnDef.header} column"
												title="Unpin {header.column.columnDef.header} column"
											>
												<PinOffIcon class="opacity-60" size={16} aria-hidden="true" />
											</Button>
										{:else}
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															size="icon"
															variant="ghost"
															class="-mr-1 size-7 shadow-none"
															aria-label="Pin options for {header.column.columnDef.header} column"
															title="Pin options for {header.column.columnDef.header} column"
														>
															<EllipsisIcon class="opacity-60" size={16} aria-hidden="true" />
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Item onclick={() => header.column.pin('left')}>
														<ArrowLeftFromLineIcon
															size={16}
															class="opacity-60"
															aria-hidden="true"
														/>
														Stick to left
													</DropdownMenu.Item>
													<DropdownMenu.Item onclick={() => header.column.pin('right')}>
														<ArrowRightFromLineIcon
															size={16}
															class="opacity-60"
															aria-hidden="true"
														/>
														Stick to right
													</DropdownMenu.Item>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										{/if}
									{/if}
								</div>
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							{@const column = cell.column}
							{@const isPinned = column.getIsPinned()}
							{@const isLastLeftPinned = isPinned === 'left' && column.getIsLastColumn('left')}
							{@const isFirstRightPinned = isPinned === 'right' && column.getIsFirstColumn('right')}
							<Table.Cell
								class="truncate data-pinned:bg-background/90 data-pinned:backdrop-blur-xs"
								style={getPinningStyleString(column)}
								data-pinned={isPinned || undefined}
								data-last-col={isLastLeftPinned ? 'left' : isFirstRightPinned ? 'right' : undefined}
							>
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
	<p class="mt-4 text-center text-sm text-muted-foreground">Data table with pinnable columns</p>
</div>
