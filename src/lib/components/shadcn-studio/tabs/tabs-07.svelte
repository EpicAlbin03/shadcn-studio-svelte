<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import { tabs } from './data';
</script>

<div class="w-full max-w-md">
	<Tabs value="explore" class="gap-4">
		<TabsList class="h-full">
			{#each tabs as { icon: Icon, name, value } (value)}
				<Tooltip>
					<TooltipTrigger>
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
					</TooltipTrigger>
					<TooltipContent class="px-2 py-1 text-xs">{name}</TooltipContent>
				</Tooltip>
			{/each}
		</TabsList>

		{#each tabs as tab (tab.value)}
			<TabsContent value={tab.value}>
				<p class="text-sm text-muted-foreground">{@html tab.content}</p>
			</TabsContent>
		{/each}
	</Tabs>
</div>
