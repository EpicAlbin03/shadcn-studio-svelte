<script lang="ts">
	import ProductList, { type ProductItem } from './components/product-list-01.svelte';

	const products: ProductItem[] = [
		{
			image: '/blocks/product-list-06.webp',
			imgAlt: 'Samsung Galaxy Watch 6',
			name: 'Samsung Galaxy Watch 6 Classic',
			price: 129,
			badges: ['Watch', 'Samsung']
		},
		{
			image: '/blocks/product-list-05.webp',
			imgAlt: 'Samsung Galaxy Watch 7',
			name: 'Samsung Galaxy Watch 7',
			price: 229,
			salePrice: 139,
			badges: ['Watch', 'Samsung']
		},
		{
			image: '/blocks/product-list-04.webp',
			imgAlt: 'Samsung Galaxy Watch Ultra',
			name: 'Samsung Galaxy Watch Ultra',
			price: 119,
			badges: ['Watch', 'Samsung']
		},
		{
			image: '/blocks/product-list-03.webp',
			imgAlt: 'Samsung Galaxy Watch 7',
			name: 'Samsung Galaxy Watch 7',
			price: 129,
			badges: ['Watch', 'Samsung']
		},
		{
			image: '/blocks/product-list-02.webp',
			imgAlt: 'Spigen Rugged Armor Pro',
			name: 'Spigen Rugged Armor Pro',
			price: 239,
			badges: ['Watch', 'Spigen']
		},
		{
			image: '/blocks/product-list-01.webp',
			imgAlt: 'Mosmoc Rugged No Gap',
			name: 'Mosmoc Rugged No Gap',
			price: 149,
			badges: ['Watch', 'Samsung']
		}
	];
</script>

<ProductList {products} />
