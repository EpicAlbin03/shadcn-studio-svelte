<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="flex-row">
		<TabsList class="h-full flex-col">
			{#each tabs as { icon: Icon, name, value } (value)}
				<TabsTrigger {value} class="flex w-full items-center justify-start gap-1.5 px-2.5 sm:px-3">
					<Icon />
					{name}
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
