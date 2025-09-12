<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-4">
		<TabsList class="h-full">
			{#each tabs as tab (tab.value)}
				<TabsTrigger value={tab.value} class="flex flex-col items-center gap-1 px-2.5 sm:px-3">
					<Badge class="h-5 min-w-5 rounded-full px-1 tabular-nums">{tab.count}</Badge>
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
