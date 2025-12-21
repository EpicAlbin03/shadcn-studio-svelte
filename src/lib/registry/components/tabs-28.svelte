<script lang="ts">
	import { motion, AnimatePresence } from 'motion-sv';
	import { BookIcon, GiftIcon, HeartIcon } from '@lucide/svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';

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
</script>

<div class="w-full max-w-md">
	<Tabs.Root bind:value={activeTab} class="gap-4">
		<Tabs.List class="h-auto gap-2 rounded-xl p-1">
			{#each tabs as { icon: Icon, name, value } (value)}
				{@const isActive = activeTab === value}
				<motion.div
					initial={false}
					animate={{ width: isActive ? 120 : 32 }}
					transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
					class="overflow-hidden"
				>
					<Tabs.Trigger {value} class="flex h-8 w-full items-center justify-center gap-1 px-2">
						{#snippet child({ props })}
							<div {...props}>
								<Icon class="aspect-square size-4 flex-shrink-0" />
								<AnimatePresence initial={false}>
									{#if isActive}
										<motion.span
											class="font-medium whitespace-nowrap max-sm:hidden"
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: 'auto' }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, ease: 'easeOut' }}
										>
											{name}
										</motion.span>
									{/if}
								</AnimatePresence>
							</div>
						{/snippet}
					</Tabs.Trigger>
				</motion.div>
			{/each}
		</Tabs.List>

		{#each tabs as tab (tab.value)}
			<Tabs.Content value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
