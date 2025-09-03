<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { Accordion, AccordionContent, AccordionItem } from '$lib/components/ui/accordion';

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
				'Our customer support team is available 24/7. You can reach us via live chat, email at support$libexample.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
		}
	];
</script>

<Accordion type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<AccordionItem value={`item-${index + 1}`}>
			<AccordionPrimitive.Header class="flex">
				<AccordionPrimitive.Trigger
					data-slot="accordion-trigger"
					class="flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0"
				>
					{item.title}
					<PlusIcon
						class="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200"
					/>
				</AccordionPrimitive.Trigger>
			</AccordionPrimitive.Header>
			<AccordionContent class="text-muted-foreground">{item.content}</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
