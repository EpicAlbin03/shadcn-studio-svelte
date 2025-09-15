<script lang="ts">
	import { HeadsetIcon, PackageIcon, PlusIcon, RefreshCwIcon } from '@lucide/svelte';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	const items = [
		{
			icon: PackageIcon,
			title: 'How do I track my order?',
			content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`
		},
		{
			icon: RefreshCwIcon,
			title: 'What is your return policy?',
			content:
				'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.'
		},
		{
			icon: HeadsetIcon,
			title: 'How can I contact customer support?',
			content:
				'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
		}
	];
</script>

<Accordion.Root type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<Accordion.Item value={`item-${index + 1}`}>
			<AccordionPrimitive.Header class="flex">
				<AccordionPrimitive.Trigger
					data-slot="accordion-trigger"
					class="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45"
				>
					<span class="flex items-center gap-4">
						<item.icon class="size-4 shrink-0" />
						<span>{item.title}</span>
					</span>
					<PlusIcon
						class="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200"
					/>
				</AccordionPrimitive.Trigger>
			</AccordionPrimitive.Header>
			<Accordion.Content class="text-muted-foreground">{item.content}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
