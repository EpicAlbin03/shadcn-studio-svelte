<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-4">
		<TabsList class="rounded-none border-b bg-background p-0">
			{#each tabs as tab (tab.value)}
				<TabsTrigger
					value={tab.value}
					class="h-full rounded-none border-0 border-b-2 border-transparent bg-background text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground dark:data-[state=active]:border-primary"
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
