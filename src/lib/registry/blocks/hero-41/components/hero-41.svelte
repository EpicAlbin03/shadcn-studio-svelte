<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import Autoplay from 'embla-carousel-autoplay';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { cn } from '$lib/utils';

	export type MenuData = {
		id: number;
		img: string;
		imgAlt: string;
		userAvatar: string;
		userComment: string;
	};

	let { menudata }: { menudata: MenuData[] } = $props();

	let mainApi = $state<CarouselAPI>();
	let thumbApi = $state<CarouselAPI>();
	let commentsApi = $state<CarouselAPI>();
	let current = $state(0);

	const plugin = Autoplay({ delay: 3000, stopOnInteraction: false });

	// Sync carousels when main carousel changes
	$effect(() => {
		if (!mainApi) return;

		current = mainApi.selectedScrollSnap();

		const onSelect = () => {
			const selectedIndex = mainApi!.selectedScrollSnap();
			current = selectedIndex;
			thumbApi?.scrollTo(selectedIndex);
			commentsApi?.scrollTo(selectedIndex);
		};

		mainApi.on('select', onSelect);
		return () => mainApi?.off('select', onSelect);
	});

	// Sync carousels when thumbnail carousel changes
	$effect(() => {
		if (!thumbApi) return;

		const onSelect = () => {
			const selectedIndex = thumbApi!.selectedScrollSnap();
			current = selectedIndex;
			mainApi?.scrollTo(selectedIndex);
			commentsApi?.scrollTo(selectedIndex);
		};

		thumbApi.on('select', onSelect);
		return () => thumbApi?.off('select', onSelect);
	});

	// Sync carousels when comments carousel changes
	$effect(() => {
		if (!commentsApi) return;

		const onSelect = () => {
			const selectedIndex = commentsApi!.selectedScrollSnap();
			current = selectedIndex;
			mainApi?.scrollTo(selectedIndex);
			thumbApi?.scrollTo(selectedIndex);
		};

		commentsApi.on('select', onSelect);
		return () => commentsApi?.off('select', onSelect);
	});

	function handleThumbClick(index: number) {
		mainApi?.scrollTo(index);
	}
</script>

<section class="flex-1 py-12 sm:py-16 lg:py-24">
	<div class="mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
		<!-- Hero Header -->
		<div class="grid grid-cols-1 gap-6 gap-y-12 md:gap-y-16 lg:grid-cols-5">
			<div
				class="flex w-full flex-col justify-center gap-5 max-lg:items-center lg:col-span-3 lg:h-95.5"
			>
				<h1
					class="text-3xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl"
				>
					Savor the taste of perfection
				</h1>

				<p class="max-w-xl text-xl text-muted-foreground max-lg:text-center">
					Welcome to Restaurant where passion meets the plate.From sizzling appetisers to signature
					desserts, every dish is crafted to delight your senses.
				</p>

				<div class="flex items-center gap-4">
					<Button
						href="#"
						size="lg"
						class="group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
					>
						Order now
						<ArrowRightIcon class="transition-transform duration-200 group-hover:translate-x-0.5" />
					</Button>
					<Button
						href="#"
						size="lg"
						class="rounded-full bg-primary/10 text-base text-primary hover:bg-primary/20"
					>
						Book table
					</Button>
				</div>
			</div>

			<Carousel.Root
				class="w-full lg:col-span-2"
				setApi={(api) => (mainApi = api)}
				plugins={[plugin]}
				opts={{ loop: true }}
			>
				<Carousel.Content>
					{#each menudata as item (item.id)}
						<Carousel.Item class="flex w-full items-center justify-center">
							<img src={item.img} alt={item.imgAlt} class="size-95 object-contain" />
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
		</div>

		<div class="grid grid-cols-1 gap-24 gap-y-12 md:gap-y-16 lg:grid-cols-5">
			<Carousel.Root
				class="relative w-full max-lg:order-2 lg:col-span-3"
				setApi={(api) => (thumbApi = api)}
				opts={{ loop: true }}
			>
				<div
					class="pointer-events-none absolute inset-y-0 left-0 z-1 w-25 bg-gradient-to-r from-background via-85% to-transparent"
				></div>
				<div
					class="pointer-events-none absolute inset-y-0 right-0 z-1 w-25 bg-gradient-to-l from-background via-85% to-transparent"
				></div>
				<Carousel.Content class="my-1 flex">
					{#each menudata as item, index (item.id)}
						<Carousel.Item
							class={cn(
								'basis-1/2 cursor-pointer sm:basis-1/3 md:basis-1/4 lg:basis-1/3 xl:basis-1/4'
							)}
							onclick={() => handleThumbClick(index)}
						>
							<div class="relative flex h-33 items-center justify-center">
								<div
									class={cn(
										'absolute bottom-0 -z-1',
										current === index ? 'text-primary' : 'text-border'
									)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="161"
										height="92"
										viewBox="0 0 161 92"
										fill="none"
									>
										<path
											d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z"
											stroke="currentColor"
										/>
									</svg>
								</div>
								<img src={item.img} alt={item.imgAlt} class="size-25" />
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>

			<Carousel.Root
				class="flex w-full items-center justify-center lg:col-span-2"
				setApi={(api) => (commentsApi = api)}
				opts={{ loop: true }}
			>
				<Carousel.Content>
					{#each menudata as item (item.id)}
						<Carousel.Item
							class="flex h-full min-h-14 w-full justify-center gap-4 px-6 lg:items-center"
						>
							<img
								src={item.userAvatar}
								alt={item.imgAlt}
								class="size-10 rounded-full border-4 border-background drop-shadow-lg"
							/>
							<Separator
								orientation="vertical"
								class="hidden !h-6 !w-0.5 !rounded-full bg-primary sm:block"
							/>
							<p class="text-card-foreground">{item.userComment}</p>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
		</div>
	</div>
</section>
