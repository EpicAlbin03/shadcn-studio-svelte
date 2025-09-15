<!-- <script lang="ts">
	import {
		Tabs,
		TabsContent,
		TabsContents,
		TabsList,
		TabsTrigger
	} from '$lib/components/ui/motion-tabs';
	import { tabs } from './data';
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
