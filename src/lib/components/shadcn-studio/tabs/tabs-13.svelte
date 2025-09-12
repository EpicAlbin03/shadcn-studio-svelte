<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
</script>

<div>
	<Tabs value="explore" class="gap-4">
		<TabsList class="justify-start rounded-none border-b bg-background p-0">
			{#each tabs as tab (tab.value)}
				<TabsTrigger
					value={tab.value}
					class="h-full rounded-none rounded-t border border-transparent border-b-border bg-background data-[state=active]:-mb-0.5 data-[state=active]:border-border data-[state=active]:border-b-background data-[state=active]:shadow-none dark:border-b-0 dark:data-[state=active]:-mb-0.5 dark:data-[state=active]:bg-background"
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
