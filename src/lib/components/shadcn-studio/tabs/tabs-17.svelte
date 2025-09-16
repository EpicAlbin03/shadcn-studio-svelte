<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	const tabs = [
		{
			name: 'Explore',
			value: 'explore',
			content: `Discover <span class='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
				curated just for you. Start exploring and let your curiosity lead the way!`
		},
		{
			name: 'Favorites',
			value: 'favorites',
			content: `All your <span class='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.`
		},
		{
			name: 'Surprise Me',
			value: 'surprise',
			content: `<span class='text-foreground font-semibold'>Surprise!</span> Here's something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!`
		}
	];
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="flex-row">
		<TabsList class="h-full flex-col bg-background">
			{#each tabs as tab (tab.value)}
				<TabsTrigger
					value={tab.value}
					class="w-full data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-primary/20 dark:data-[state=active]:text-primary"
				>
					{tab.name}
				</TabsTrigger>
			{/each}
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div>
