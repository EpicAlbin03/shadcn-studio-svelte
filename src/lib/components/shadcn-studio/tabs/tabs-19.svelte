<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="flex-row">
		<TabsList class="h-full flex-col rounded-none border-l bg-background p-0">
			{#each tabs as tab (tab.value)}
				<TabsTrigger
					value={tab.value}
					class="h-full w-full justify-start rounded-none border-l-3 border-transparent bg-background data-[state=active]:border-primary data-[state=active]:shadow-none dark:data-[state=active]:border-primary"
				>
					{tab.name}
				</TabsTrigger>
			{/each}
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div>
