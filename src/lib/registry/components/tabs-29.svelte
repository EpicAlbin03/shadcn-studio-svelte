<script lang="ts">
	import { motion } from 'motion-sv';
	import * as Tabs from '$lib/components/ui/tabs';
	import { watch } from 'runed';
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

	let activeTab = $state('explore');
	let tabRefs = $state<(HTMLButtonElement | null)[]>(Array(tabs.length).fill(null));
	let underlineStyle = $state({ left: 0, width: 0 });

	watch(
		() => activeTab,
		() => {
			const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
			const activeTabElement = tabRefs[activeIndex];

			if (activeTabElement) {
				const { offsetLeft, offsetWidth } = activeTabElement;

				underlineStyle = {
					left: offsetLeft,
					width: offsetWidth
				};
			}
		}
	);
</script>

<div class="w-full max-w-md">
	<Tabs.Root bind:value={activeTab} class="gap-4">
		<Tabs.List class="relative rounded-none border-b bg-background p-0">
			{#each tabs as tab, index (tab.value)}
				<Tabs.Trigger
					value={tab.value}
					bind:ref={tabRefs[index]}
					class="relative z-10 rounded-none border-0 bg-background data-[state=active]:shadow-none dark:data-[state=active]:bg-background"
				>
					{tab.name}
				</Tabs.Trigger>
			{/each}

			<motion.div
				class="absolute bottom-0 z-20 h-0.5 bg-primary"
				animate={{
					left: underlineStyle.left,
					width: underlineStyle.width
				}}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 40
				}}
			/>
		</Tabs.List>

		{#each tabs as tab (tab.value)}
			<Tabs.Content value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
