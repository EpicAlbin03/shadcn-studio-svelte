<script lang="ts">
	import { HeadsetIcon, PackageIcon, RefreshCwIcon } from '@lucide/svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	const items = [
		{
			icon: PackageIcon,
			title: 'How do I track my order?',
			content: "You'll receive tracking information via email once your order ships.",
			media: '/components/accordion-01.webp'
		},
		{
			icon: RefreshCwIcon,
			title: 'What is your return policy?',
			content: 'We offer a 30-day return policy for most items.',
			media: '/components/accordion-02.webp'
		},
		{
			icon: HeadsetIcon,
			title: 'How can I contact customer support?',
			content:
				'You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567.',
			media: '/components/accordion-03.webp'
		}
	];
</script>

<Accordion.Root type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<Accordion.Item value="item-{index + 1}">
			<Accordion.Trigger>
				<span class="flex items-center gap-4">
					<item.icon class="size-4 shrink-0" />
					{item.title}
				</span>
			</Accordion.Trigger>
			<Accordion.Content class="space-y-4">
				<p class="text-muted-foreground">{item.content}</p>
				<img src={item.media} alt={item.title} class="w-full rounded-md" />
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
