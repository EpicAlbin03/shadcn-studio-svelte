<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import { motion, AnimatePresence } from 'motion/react';
	import { BookIcon, GiftIcon, HeartIcon } from '@lucide/svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
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
	<Tabs bind:value={activeTab} class="gap-4">
		<TabsList class="h-auto gap-2 rounded-xl p-1">
			{#each tabs as { icon: Icon, name, value } (value)}
				{@const isActive = activeTab === value}
				<motion.div
					layout
					class={cn(
						'flex h-8 items-center justify-center overflow-hidden rounded-md',
						isActive ? 'flex-1' : 'flex-none'
					)}
					onclick={() => (activeTab = value)}
					initial={false}
					animate={{
						width: isActive ? 120 : 32
					}}
					transition={{
						type: 'tween',
						stiffness: 400,
						damping: 25
					}}
				>
					<TabsTrigger {value}>
						{#snippet child({ props })}
							<motion.div
								{...props}
								class="flex h-8 w-full items-center justify-center"
								animate={{ filter: 'blur(0px)' }}
								exit={{ filter: 'blur(2px)' }}
								transition={{ duration: 0.25, ease: 'easeOut' }}
							>
								<Icon class="aspect-square size-4 flex-shrink-0" />
								<AnimatePresence initial={false}>
									{#if isActive}
										<motion.span
											class="font-medium max-sm:hidden"
											initial={{ opacity: 0, scaleX: 0.8 }}
											animate={{ opacity: 1, scaleX: 1 }}
											transition={{ duration: 0.25, ease: 'easeOut' }}
											style={{ originX: 0 }}
										>
											{name}
										</motion.span>
									{/if}
								</AnimatePresence>
							</motion.div>
						{/snippet}
					</TabsTrigger>
				</motion.div>
			{/each}
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div> -->
