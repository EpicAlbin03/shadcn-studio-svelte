<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';

	type FAQs = {
		question: string;
		answer: string;
	}[];

	type Props = { faqItems: FAQs };

	let { faqItems }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">Need Help? We've Got Answers</h2>
			<p class="text-xl text-muted-foreground">
				Explore Our Most Commonly Asked Questions and Find the Information You Need.
			</p>
		</div>

		<Accordion.Root type="single" class="w-full" value="item-1">
			{#each faqItems as item, index}
				<Accordion.Item value={`item-${index + 1}`}>
					<Accordion.Trigger class="text-lg">{item.question}</Accordion.Trigger>
					<Accordion.Content class="text-muted-foreground">{item.answer}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
