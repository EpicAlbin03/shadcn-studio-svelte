<script lang="ts">
	import { motion } from 'motion-sv';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	type FAQItem = {
		question: string;
		answer: string;
	};

	type Props = {
		faqItems: FAQItem[];
	};

	let { faqItems }: Props = $props();
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left Column - Content -->
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				inViewOptions={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<div class="space-y-4">
					<Badge variant="outline" class="text-sm font-normal">FAQS</Badge>
					<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
						Discover the Most common Questions
					</h2>
					<p class="text-xl leading-relaxed text-muted-foreground">
						We've gathered the questions we hear most often and answered them to help you make
						informed decisions.
					</p>
				</div>
			</motion.div>

			<!-- Right Column - FAQ Cards -->
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				inViewOptions={{ once: true }}
				transition={{ duration: 0.7, delay: 0.3 }}
				class="flex justify-end"
			>
				<div class="space-y-7 lg:w-[80%]">
					{#each faqItems as item, index}
						<motion.div
							initial={{ opacity: 0, y: -30 }}
							whileInView={{ opacity: 1, y: 0 }}
							inViewOptions={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
						>
							<Card.Root class="shadow-none hover:shadow-lg">
								<Card.Content class="space-y-2">
									<h3 class="text-xl font-medium">{item.question}</h3>
									<p class="leading-relaxed text-muted-foreground">{item.answer}</p>
								</Card.Content>
							</Card.Root>
						</motion.div>
					{/each}

					<!-- Check All Questions Link -->
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						inViewOptions={{ once: true }}
						transition={{ duration: 0.6, delay: 0.9 + faqItems.length * 0.15 }}
					>
						<Button variant="link" class="h-auto p-0 text-base underline" href="#">
							Check All Common Questions
						</Button>
					</motion.div>
				</div>
			</motion.div>
		</div>
	</div>
</section>
