import { BookIcon, GiftIcon, HeartIcon } from '@lucide/svelte';

export const tabs = [
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
