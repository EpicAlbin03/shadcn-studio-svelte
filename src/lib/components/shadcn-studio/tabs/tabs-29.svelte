<!-- <script lang="ts">
	import { motion } from 'motion/react';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
	import { watch } from 'runed';

	let activeTab = $state('explore');
	let tabRefs = $state<(HTMLButtonElement | null)[]>([]);
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
	<Tabs bind:value={activeTab} class="gap-4">
		<TabsList class="relative rounded-none border-b bg-background p-0">
			{#each tabs as tab, index (tab.value)}
				<TabsTrigger
					value={tab.value}
					bind:ref={tabRefs[index]}
					class="relative z-10 rounded-none border-0 bg-background data-[state=active]:shadow-none dark:data-[state=active]:bg-background"
				>
					{tab.name}
				</TabsTrigger>
			{/each}

			<motion.div
				class="absolute bottom-0 z-20 h-0.5 bg-primary"
				layoutId="underline"
				style={{
					left: underlineStyle.left,
					width: underlineStyle.width
				}}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 40
				}}
			/>
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div> -->
