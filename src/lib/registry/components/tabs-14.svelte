<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area';
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
		},
		{
			name: 'Trending',
			value: 'trending',
			content: `Stay on top of what’s <span class='text-foreground font-semibold'>trending</span>. Discover what
        everyone's talking about, from viral trends to the latest memes and conversations.`
		},
		{
			name: 'Events',
			value: 'events',
			content: `Check out upcoming <span class='text-foreground font-semibold'>events</span> happening near you. Whether
        virtual or in-person, there’s always something to join and be a part of.`
		},
		{
			name: 'News',
			value: 'news',
			content: `Stay updated with the latest <span class='text-foreground font-semibold'>news</span> across the globe. From
        tech breakthroughs to world events, get the stories that matter most.`
		},
		{
			name: 'Community',
			value: 'community',
			content: `Connect with the <span class='text-foreground font-semibold'>community</span>—share your thoughts, ask
        questions, and join discussions with like-minded individuals.`
		},
		{
			name: 'Rewards',
			value: 'rewards',
			content: `Unlock exclusive <span class='text-foreground font-semibold'>rewards</span> and perks for your activity.
        Keep an eye out for new ways to earn and redeem your points.`
		},
		{
			name: 'Profile',
			value: 'profile',
			content: `View and edit your <span class='text-foreground font-semibold'>profile</span> information, track your
        activity, and customize your experience. It's all about you here!`
		}
	];
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-1">
		<ScrollArea orientation="horizontal">
			<TabsList class="mb-3">
				{#each tabs as tab (tab.value)}
					<TabsTrigger value={tab.value}>
						{tab.name}
					</TabsTrigger>
				{/each}
			</TabsList>
		</ScrollArea>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div>
