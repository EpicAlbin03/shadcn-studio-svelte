<script lang="ts">
	import { BookIcon, GiftIcon, HeartIcon } from '@lucide/svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	const tabs = [
		{
			name: 'Explore',
			value: 'explore',
			icon: BookIcon,
			content: `Discover <span class='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
				curated just for you. Start exploring and let your curiosity lead the way!`
		},
		{
			name: 'Favorites',
			value: 'favorites',
			icon: HeartIcon,
			content: `All your <span class='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.`
		},
		{
			name: 'Surprise Me',
			value: 'surprise',
			icon: GiftIcon,
			content: `<span class='text-foreground font-semibold'>Surprise!</span> Here's something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!`
		}
	];
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="flex-row gap-4">
		<TabsList class="h-full flex-col gap-2">
			{#each tabs as { icon: Icon, name, value } (value)}
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<TabsTrigger
								{...props}
								{value}
								class="flex w-full flex-col items-center gap-1"
								aria-label="tab-trigger"
							>
								<Icon />
							</TabsTrigger>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content class="px-2 py-1 text-xs" side="left">
						{name}
					</Tooltip.Content>
				</Tooltip.Root>
			{/each}
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div>
