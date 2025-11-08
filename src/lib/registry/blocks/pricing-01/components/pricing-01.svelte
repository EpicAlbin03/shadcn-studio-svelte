<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Switch } from '$lib/components/ui/switch';
	import { Separator } from '$lib/components/ui/separator';

	type PricingPlan = {
		id: string;
		title: string;
		description: string;
		monthly: number;
		annual: number;
	}[];

	type Props = {
		pricingData: PricingPlan;
	};

	let { pricingData }: Props = $props();

	let isAnnual = $state(false);
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8">
		<div class="flex flex-col items-center gap-10 text-center">
			<div class="flex flex-col items-center gap-4">
				<h2 class="text-2xl font-semibold sm:text-3xl lg:text-4xl">
					Select the Best Plan for You!
				</h2>
				<p class="text-xl text-muted-foreground">
					Discover Our Flexible Plans, Compare Features, and Choose <br />
					the Ideal Option for Your Needs.
				</p>
			</div>

			<div class="flex items-center gap-3">
				<span class="font-medium">Monthly</span>
				<Switch bind:checked={isAnnual} />
				<span class="font-medium">Annually</span>
			</div>
		</div>
		<div class="flex items-center justify-center gap-6 max-lg:flex-col">
			{#each pricingData as plan (plan.id)}
				{@const price = isAnnual ? plan.annual : plan.monthly}
				{@const period = isAnnual ? 'year' : 'month'}
				{@const savings = isAnnual ? plan.monthly * 12 - plan.annual : null}

				<Card class="w-full shadow-none sm:w-lg">
					<CardContent class="flex justify-between gap-4">
						<div class="flex flex-col justify-center gap-5">
							<div class="flex flex-col gap-2">
								<h3 class="text-3xl font-semibold">{plan.title}</h3>
								<p class="text-base text-muted-foreground">{plan.description}</p>
							</div>
							<div class="flex flex-col items-end sm:hidden">
								<div class="flex items-end">
									<span class="text-5xl font-bold text-primary">${price}</span>
									<span class="ml-1 text-lg text-muted-foreground">/{period}</span>
								</div>
								{#if savings}
									<span class="mt-1 text-sm font-medium text-green-600">
										Save ${savings.toLocaleString()}/year
									</span>
								{/if}
							</div>
							<Button class="w-fit">Enterprise</Button>
						</div>

						<Separator orientation="vertical" class="!h-[132px] max-sm:hidden" />

						<div class="flex items-end justify-end max-sm:hidden">
							<div class="flex flex-col items-end">
								<div class="flex items-end">
									<span class="text-5xl font-bold text-primary">${price}</span>
									<span class="ml-1 text-lg text-muted-foreground">/{period}</span>
								</div>
								{#if savings}
									<span class="mt-1 text-sm font-medium text-green-600">
										Save ${savings.toLocaleString()}/year
									</span>
								{/if}
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
