<script lang="ts">
	import { ArchiveIcon, PencilIcon, Trash2Icon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Table from '$lib/components/ui/table/index.js';

	const items = [
		{
			id: '1',
			productName: 'Chair',
			model: 'Wooden Garden  Chair',
			src: '/components/product-01.webp',
			fallback: 'WGC',
			color: 'Black',
			category: 'Furniture',
			price: '$269.09'
		},
		{
			id: '2',
			productName: 'Nike Shoes',
			model: 'Jordan 1 Retro OG',
			src: '/components/product-02.webp',
			fallback: 'J1R',
			color: 'Red',
			category: 'Sneakers',
			price: '$150.00'
		},
		{
			id: '3',
			productName: 'OnePluse',
			model: 'OnePlus 7 Pro',
			src: '/components/product-03.webp',
			fallback: 'O7P',
			color: 'Nebula Blue',
			category: 'Smartphone',
			price: '$869.00'
		},
		{
			id: '4',
			productName: 'Nintendo',
			model: 'Nintendo Switch',
			src: '/components/product-04.webp',
			fallback: 'NS',
			color: 'Neon Blue and Red',
			category: 'Console Gaming',
			price: '$499.00'
		},
		{
			id: '5',
			productName: 'Apple Magic Mouse',
			model: 'Apple Magic Mouse',
			src: '/components/product-05.webp',
			fallback: 'AMM',
			color: 'Black',
			category: 'Electronics',
			price: '$110.29'
		}
	];

	const id = $props.id();
</script>

<div class="w-full">
	<div class="[&>div]:rounded-sm [&>div]:border">
		<Table.Root>
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head>
						<Checkbox {id} aria-label="select-all" />
					</Table.Head>
					<Table.Head>Product</Table.Head>
					<Table.Head>Color</Table.Head>
					<Table.Head>Category</Table.Head>
					<Table.Head>Price</Table.Head>
					<Table.Head class="w-0">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each items as item (item.id)}
					<Table.Row class="has-data-[state=checked]:bg-muted/50">
						<Table.Cell>
							<Checkbox id="table-checkbox-{item.id}" aria-label="product-checkbox-{item.id}" />
						</Table.Cell>
						<Table.Cell>
							<div class="flex items-center gap-3">
								<Avatar.Root class="rounded-sm">
									<Avatar.Image src={item.src} alt={item.model} />
									<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
								</Avatar.Root>
								<div>
									<div class="font-medium">{item.productName}</div>
									<span class="mt-0.5 text-xs text-muted-foreground">{item.model}</span>
								</div>
							</div>
						</Table.Cell>
						<Table.Cell>{item.color}</Table.Cell>
						<Table.Cell>{item.category}</Table.Cell>
						<Table.Cell>{item.price}</Table.Cell>
						<Table.Cell class="flex items-center gap-1">
							<Button
								variant="ghost"
								size="icon"
								class="rounded-full"
								aria-label="product-{item.id}-edit"
							>
								<PencilIcon />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								class="rounded-full"
								aria-label="product-{item.id}-remove"
							>
								<Trash2Icon />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								class="rounded-full"
								aria-label="product-{item.id}-archive"
							>
								<ArchiveIcon />
							</Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Product Table</p>
</div>
