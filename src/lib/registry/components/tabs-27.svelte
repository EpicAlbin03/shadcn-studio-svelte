<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import {
		Tabs,
		TabsContent,
		TabsContents,
		TabsList,
		TabsTrigger
	} from '$lib/components/ui/motion-tabs';

const tabs = [
	{
		name: 'Explore',
		value: 'explore',
		icon: BookIcon,
		count: 8,
		content: `Discover <span class='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
				curated just for you. Start exploring and let your curiosity lead the way!`
	},
	{
		name: 'Favorites',
		value: 'favorites',
		icon: HeartIcon,
		count: 3,
		content: `All your <span class='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.`
	},
	{
		name: 'Surprise Me',
		value: 'surprise',
		icon: GiftIcon,
		count: 6,
		content: `<span class='text-foreground font-semibold'>Surprise!</span> Here's something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!`
	}
];
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-4">
		<TabsList>
			{#each tabs as tab (tab.value)}
				<TabsTrigger value={tab.value}>
					{tab.name}
				</TabsTrigger>
			{/each}
		</TabsList>

		<TabsContents class="mx-1 -mt-2 mb-1 h-full rounded-sm bg-background">
			{#each tabs as tab (tab.value)}
				<TabsContent value={tab.value}>
					<p class="text-sm text-muted-foreground">{tab.content}</p>
				</TabsContent>
			{/each}
		</TabsContents>
	</Tabs>

	<p class="mt-4 text-center text-xs text-muted-foreground">
		Inspired by
		<a
			class="underline hover:text-foreground"
			href="https://animate-ui.com/docs/components/tabs"
			target="_blank"
			rel="noopener noreferrer"
		>
			Animate UI
		</a>
	</p>
</div> -->
