<script lang="ts" module>
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { type Icon as IconType } from '@lucide/svelte';

	export type StatisticsCardData = {
		icon: typeof IconType;
		value: string;
		title: string;
		changePercentage: string;
		class?: string;
	};
</script>

<script lang="ts">
	let {
		icon: Icon,
		value,
		title,
		changePercentage,
		class: className
	}: StatisticsCardData = $props();
</script>

<Card.Root class={cn('gap-4', className)}>
	<Card.Header class="flex items-center gap-2">
		<div
			class="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
		>
			<Icon class="size-4" />
		</div>
		<span class="text-2xl">{value}</span>
	</Card.Header>
	<Card.Content class="flex flex-col gap-2">
		<span class="font-semibold">{title}</span>
		<p class="space-x-2">
			<span class="text-sm">{changePercentage}</span>
			<span class="text-sm text-muted-foreground">than last week</span>
		</p>
	</Card.Content>
</Card.Root>
