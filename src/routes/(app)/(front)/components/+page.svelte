<script lang="ts">
	import { categories } from '$lib/config/components.svelte';
	import { MoreComponentsSVG } from '$lib/assets/svg';
	import MetaData from '$lib/components/MetaData.svelte';

	const title = 'Shadcn Components';
	const description =
		'An open-source collection of copy-and-paste Shadcn Components designed to accelerate your project development.';
</script>

<MetaData {title} {description} />

<div class="flex flex-col items-start justify-center space-y-4 p-6 sm:space-y-8 sm:p-8">
	<div class="flex flex-col space-y-3">
		<h1 class="text-2xl font-bold sm:text-3xl">Shadcn Components</h1>
		<p class="text-muted-foreground">
			An open-source collection of copy-and-paste Shadcn Components designed to accelerate your
			project development. Below is a summary of the available component categories:
		</p>
	</div>
	<div class="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
		{#each categories.filter((category) => !category.isComingSoon) as category (category.slug)}
			{@const Icon = category.svg}
			<div class="group overflow-hidden rounded-xl border">
				<a href="/docs/components/{category.slug}">
					<div
						class="relative flex h-52 items-center justify-center border-b bg-primary/[0.045] dark:bg-transparent"
					>
						<Icon class="transition-all duration-300 group-hover:scale-110" />
						{#if category.badge}
							<span class="absolute start-4 top-2 font-['Gamja_Flower'] text-xl">
								{category.badge}
							</span>
						{/if}
					</div>
					<div class="flex flex-col gap-0.5 p-4 text-center">
						<h2 class="text-lg font-medium">{category.name}</h2>
						<p class="text-sm text-muted-foreground">
							{`${category.components.length} ${category.components.length === 1 ? 'Component' : 'Components'}`}
						</p>
					</div>
				</a>
			</div>
		{/each}
		<div class="group overflow-hidden rounded-xl border">
			<div
				class="flex h-52 items-center justify-center border-b bg-primary/[0.045] dark:bg-transparent"
			>
				<MoreComponentsSVG class="transition-all duration-300 group-hover:scale-110" />
			</div>
			<div class="flex flex-col gap-0.5 p-4 text-center">
				<h2 class="text-lg font-medium">More Components</h2>
				<p class="text-sm text-muted-foreground">Coming Soon</p>
			</div>
		</div>
	</div>
</div>
