<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	const items = [
		{
			name: 'Richard Payne',
			email: 'pwright$libyahoo.com',
			avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
			content:
				'Richard Payne is a remarkable individual known for his exceptional skills and expertise in various fields. With a strong background in technology and a passion for innovation, Richard has made significant contributions to the industry.'
		},
		{
			name: 'Jordan Stevenson',
			email: 'wramirez$liboutlook.com',
			avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
			content:
				'Jordan Stevenson is a talented individual with a passion for technology and innovation. Jordan has made significant contributions to various projects and has a deep understanding of programming languages and frameworks.'
		},
		{
			name: 'Nicholas Tanner',
			email: 'snguyen$libicloud.com',
			avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
			content:
				'Nicholas Tanner is a highly skilled individual with a strong passion for technology and innovation. Nicholas has made significant contributions to numerous projects and possesses a deep understanding of various programming languages and frameworks.'
		}
	];
</script>

<Accordion type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<AccordionItem value={`item-${index + 1}`}>
			<AccordionTrigger class="items-center hover:no-underline">
				<span class="flex items-center gap-4">
					<Avatar class="size-10.5 rounded-sm">
						<AvatarImage src={item.avatarImage} alt={item.name} class="rounded-sm" />
						<AvatarFallback class="rounded-sm text-xs">
							{item.name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')}
						</AvatarFallback>
					</Avatar>
					<span class="flex flex-col space-y-0.5">
						<span>{item.name}</span>
						<span class="font-normal text-muted-foreground">{item.email}</span>
					</span>
				</span>
			</AccordionTrigger>
			<AccordionContent class="text-muted-foreground">{item.content}</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
