<script lang="ts">
	import { CircleCheckIcon } from '@lucide/svelte';

	type Feature = {
		title: string;
		description: string;
	};

	type Props = { features: Feature[] };

	let { features }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center gap-20 max-lg:flex-col">
			<div>
				<div class="space-y-4">
					<p class="text-sm font-medium text-primary uppercase">Social Proof</p>
					<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
						Create Impactful White Label Reports
					</h2>
					<p class="text-lg text-muted-foreground">
						Craft customizable reports that showcase your campaign's success, align with your brand,
						and simplify sharing insights with stakeholders while enabling data export and ROI
						analysis.
					</p>
				</div>

				<ul class="mt-11 space-y-6 text-lg font-medium">
					{#each features as feature}
						<li class="flex gap-2">
							<CircleCheckIcon class="mt-0.75 size-5" />
							<span>{feature.title}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="shrink-0">
				<img
					src="/blocks/social-proof.webp"
					alt="Social Widget"
					class="w-142 object-contain dark:hidden"
				/>
				<img
					src="/blocks/social-proof-dark.webp"
					alt="Social Widget"
					class="hidden w-142 object-contain dark:inline-block"
				/>
			</div>
		</div>
	</div>
</section>
