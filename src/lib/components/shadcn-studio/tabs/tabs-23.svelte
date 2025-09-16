<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	const tabs = [
		{
			name: 'Explore',
			value: 'explore',
			count: 8,
			content: `Discover <span class='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
				curated just for you. Start exploring and let your curiosity lead the way!`
		},
		{
			name: 'Favorites',
			value: 'favorites',
			count: 3,
			content: `All your <span class='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.`
		},
		{
			name: 'Surprise Me',
			value: 'surprise',
			count: 6,
			content: `<span class='text-foreground font-semibold'>Surprise!</span> Here's something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!`
		}
	];
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="flex-row">
		<TabsList class="h-full flex-col gap-1.5">
			{#each tabs as tab (tab.value)}
				<TabsTrigger
					value={tab.value}
					class="flex w-full items-center justify-start gap-1.5 px-2.5 sm:px-3"
				>
					{tab.name}
					<Badge class="h-5 min-w-5 rounded-full px-1 tabular-nums">{tab.count}</Badge>
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
