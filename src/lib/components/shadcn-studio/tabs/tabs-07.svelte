<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-4">
		<TabsList class="h-full">
			{#each tabs as { icon: Icon, name, value } (value)}
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<TabsTrigger
								{...props}
								{value}
								class="flex flex-col items-center gap-1 px-2.5 sm:px-3"
								aria-label="tab-trigger"
							>
								<Icon />
							</TabsTrigger>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content class="px-2 py-1 text-xs">{name}</Tooltip.Content>
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
