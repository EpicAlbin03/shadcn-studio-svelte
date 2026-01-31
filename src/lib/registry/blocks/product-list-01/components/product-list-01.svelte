<script lang="ts">
	import { HeartIcon, ShoppingCartIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	export type ProductItem = {
		image: string;
		imgAlt: string;
		name: string;
		price: number;
		salePrice?: number;
		badges: string[];
	};

	type Props = {
		products: ProductItem[];
	};

	let { products }: Props = $props();

	let favorites = $state<Record<number, boolean>>({});

	function toggleFavorite(index: number) {
		favorites[index] = !favorites[index];
	}
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
		<div class="space-y-4">
			<p class="text-sm font-medium">Samsung watch</p>
			<h2 class="text-2xl font-semibold sm:text-3xl lg:text-4xl">All New Collection</h2>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each products as product, index}
				<Card.Root class="border-none shadow-none {product.salePrice ? 'relative' : ''}">
					{#if product.salePrice}
						<Badge
							class="absolute top-6 left-6 rounded-sm bg-destructive/10 px-3 py-1 text-destructive uppercase focus-visible:ring-destructive/20 focus-visible:outline-none dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/5"
						>
							Sale
						</Badge>
					{/if}

					<Card.Content class="flex flex-1 flex-col justify-between gap-6">
						<a href="#">
							<img src={product.image} alt={product.imgAlt} class="mx-auto size-50" />
						</a>

						<div class="space-y-4">
							<div class="flex flex-col gap-2 text-center">
								<a href="#">
									<h3 class="text-xl font-semibold">{product.name}</h3>
								</a>
								<div class="flex items-center justify-center gap-2">
									{#each product.badges as badge}
										<Badge
											class="rounded-sm bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40"
										>
											{badge}
										</Badge>
									{/each}
								</div>
							</div>

							<Separator />

							<div class="flex items-center justify-between">
								{#if product.salePrice}
									<div class="flex items-center gap-2.5">
										<span class="text-2xl font-semibold">${product.salePrice.toFixed(2)}</span>
										<span class="font-medium text-muted-foreground line-through">
											${product.price.toFixed(2)}
										</span>
									</div>
								{:else}
									<span class="text-2xl font-semibold">${product.price.toFixed(2)}</span>
								{/if}

								<div>
									<Button
										variant="ghost"
										class="size-9"
										aria-label="Add to favorites"
										onclick={() => toggleFavorite(index)}
									>
										{#if favorites[index]}
											<HeartIcon class="size-4 fill-destructive stroke-destructive" />
										{:else}
											<HeartIcon class="size-4" />
										{/if}
									</Button>

									<Button variant="ghost" class="size-9" aria-label="Add to cart">
										<ShoppingCartIcon class="size-4" />
									</Button>
								</div>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
