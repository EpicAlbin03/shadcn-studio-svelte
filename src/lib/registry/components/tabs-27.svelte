<script lang="ts">
	import * as MotionTabs from '$lib/registry/ui/motion-tabs';
	import { BookIcon, GiftIcon, HeartIcon } from '@lucide/svelte';

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
	<MotionTabs.Root value="explore" class="gap-4">
		<MotionTabs.List>
			{#each tabs as tab (tab.value)}
				<MotionTabs.Trigger value={tab.value}>
					{tab.name}
				</MotionTabs.Trigger>
			{/each}
		</MotionTabs.List>

		<MotionTabs.Contents class="mx-1 -mt-2 mb-1 h-full rounded-sm bg-background">
			{#each tabs as tab (tab.value)}
				<MotionTabs.Content value={tab.value}>
					<p class="text-sm text-muted-foreground">{@html tab.content}</p>
				</MotionTabs.Content>
			{/each}
		</MotionTabs.Contents>
	</MotionTabs.Root>

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
</div>
