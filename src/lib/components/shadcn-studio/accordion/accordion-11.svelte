<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';

	const items = [
		{
			title: 'How do I track my order?',
			content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`
		},
		{
			title: 'What is your return policy?',
			content:
				'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.'
		},
		{
			title: 'How can I contact customer support?',
			content:
				'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
		}
	];
</script>

<Accordion type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<AccordionItem
			value={`item-${index + 1}`}
			class="rounded-md border-none px-5 transition-colors duration-200 data-[state=open]:bg-accent"
		>
			<AccordionTrigger>{item.title}</AccordionTrigger>
			<AccordionContent class="text-muted-foreground">{item.content}</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
