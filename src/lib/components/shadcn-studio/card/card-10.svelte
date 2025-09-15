<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	const tabs = [
		{
			name: 'Home',
			value: 'home',
			content:
				"Welcome to the Home tab! Here, you can explore the latest updates, news, and highlights. Stay informed about what's happening and never miss out on important announcements."
		},
		{
			name: 'Profile',
			value: 'profile',
			content:
				'This is your Profile tab. Manage your personal information, update your account details, and customize your settings to make your experience unique.'
		},
		{
			name: 'Messages',
			value: 'messages',
			content:
				'Messages: Check your recent messages, start new conversations, and stay connected with your friends and contacts. Manage your chat history and keep the communication flowing.'
		}
	];
</script>

<Card.Root class="w-max">
	<Card.Content>
		<Tabs value={tabs[0].value} class="w-full max-w-sm">
			<TabsList class="w-full justify-start rounded-none border-b bg-background p-0">
				{#each tabs as tab (tab.value)}
					<TabsTrigger
						value={tab.value}
						class="h-full rounded-none border-b-2 border-transparent bg-background data-[state=active]:border-b-primary data-[state=active]:shadow-none"
					>
						{tab.name}
					</TabsTrigger>
				{/each}
			</TabsList>
			{#each tabs as tab (tab.value)}
				<TabsContent value={tab.value}>
					<p class="p-4 text-sm text-muted-foreground">{tab.content}</p>
				</TabsContent>
			{/each}
		</Tabs>
	</Card.Content>
</Card.Root>
