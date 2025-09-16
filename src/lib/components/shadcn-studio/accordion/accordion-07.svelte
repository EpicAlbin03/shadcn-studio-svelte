<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	const items = [
		{
			name: 'Richard Payne',
			email: 'pwright@yahoo.com',
			avatarImage: '/avatars/01.webp',
			content:
				'Richard Payne is a remarkable individual known for his exceptional skills and expertise in various fields. With a strong background in technology and a passion for innovation, Richard has made significant contributions to the industry.'
		},
		{
			name: 'Jordan Stevenson',
			email: 'wramirez@outlook.com',
			avatarImage: '/avatars/02.webp',
			content:
				'Jordan Stevenson is a talented individual with a passion for technology and innovation. Jordan has made significant contributions to various projects and has a deep understanding of programming languages and frameworks.'
		},
		{
			name: 'Nicholas Tanner',
			email: 'snguyen@icloud.com',
			avatarImage: '/avatars/03.webp',
			content:
				'Nicholas Tanner is a highly skilled individual with a strong passion for technology and innovation. Nicholas has made significant contributions to numerous projects and possesses a deep understanding of various programming languages and frameworks.'
		}
	];

	function getInitials(name: string) {
		return name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '');
	}
</script>

<Accordion.Root type="single" class="w-full" value="item-1">
	{#each items as item, index}
		<Accordion.Item value="item-{index + 1}">
			<Accordion.Trigger class="items-center hover:no-underline">
				<span class="flex items-center gap-4">
					<Avatar.Root class="size-10.5 rounded-sm">
						<Avatar.Image src={item.avatarImage} alt={item.name} class="rounded-sm" />
						<Avatar.Fallback class="rounded-sm text-xs">
							{getInitials(item.name)}
						</Avatar.Fallback>
					</Avatar.Root>
					<span class="flex flex-col space-y-0.5">
						<span>{item.name}</span>
						<span class="font-normal text-muted-foreground">{item.email}</span>
					</span>
				</span>
			</Accordion.Trigger>
			<Accordion.Content class="text-muted-foreground">{item.content}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
