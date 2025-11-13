<script lang="ts">
	import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Progress } from '$lib/components/ui/progress';

	const listItems = ['Share', 'Update', 'Refresh'];

	type Props = {
		title: string;
		earning: number;
		trend: 'up' | 'down';
		percentage: number;
		comparisonText: string;
		earningData: {
			img: string;
			platform: string;
			technologies: string;
			earnings: string;
			progressPercentage: number;
		}[];
		class?: string;
	};

	let {
		earningData,
		title,
		earning,
		trend,
		percentage,
		comparisonText,
		class: className
	}: Props = $props();
</script>

<Card.Root class={className}>
	<Card.Header class="flex items-center justify-between gap-2">
		<span class="text-lg font-semibold">{title}</span>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						size="icon"
						class="size-6 rounded-full text-muted-foreground"
					>
						<EllipsisVerticalIcon />
						<span class="sr-only">Menu</span>
					</Button>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Group>
					{#each listItems as item}
						<DropdownMenu.Item>{item}</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Card.Header>
	<Card.Content class="flex flex-1 flex-col gap-4">
		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-2">
				<span class="text-2xl font-semibold">${earning}</span>
				<span class="flex items-center gap-1">
					{#if trend === 'up'}
						<ChevronUpIcon class="size-4" />
					{:else}
						<ChevronDownIcon class="size-4" />
					{/if}
					<span class="text-sm">{percentage}%</span>
				</span>
			</div>
			<span class="text-sm text-muted-foreground">{comparisonText}</span>
		</div>
		<div class="flex flex-1 flex-col justify-evenly gap-4">
			{#each earningData as earning}
				<div class="flex items-center justify-between gap-2.5">
					<div class="flex items-center justify-between gap-2.5">
						<Avatar.Root class="size-11 rounded-sm">
							<Avatar.Fallback class="shrink-0 rounded-sm bg-primary/10">
								<img src={earning.img} alt={earning.platform} class="size-6" />
							</Avatar.Fallback>
						</Avatar.Root>
						<div class="flex flex-col gap-1">
							<span class="font-medium">{earning.platform}</span>
							<span class="text-sm text-muted-foreground">{earning.technologies}</span>
						</div>
					</div>
					<div class="space-y-2">
						<p class="text-sm">{earning.earnings}</p>
						<Progress value={earning.progressPercentage} class="w-36" />
					</div>
				</div>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
