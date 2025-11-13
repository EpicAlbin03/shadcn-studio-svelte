<script lang="ts">
	import { CircleCheckIcon, DollarSignIcon, MessageSquareTextIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { cn } from '$lib/utils';

	type Props = {
		open?: boolean;
		class?: string;
		data: {
			id: string;
			title: string;
			price: number;
			description: string;
			features: string[];
		}[];
	};

	let { open = $bindable(false), data, class: className }: Props = $props();

	let plan = $state('1');
</script>

<Dialog.Root {open}>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">
				<span>Select Plan</span>
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class={cn('sm:max-w-155 [&>[data-slot=dialog-close]>svg]:size-5', className)}>
		<Dialog.Header class="flex-row items-center gap-4">
			<Avatar.Root class="size-11 rounded-md">
				<Avatar.Fallback class="shrink-0 rounded-md border bg-transparent">
					<DollarSignIcon class="size-6" />
				</Avatar.Fallback>
			</Avatar.Root>
			<div class="space-y-1">
				<Dialog.Title class="m-0 text-lg">Select Plan</Dialog.Title>
				<Dialog.Description>Simple and flexible per-user pricing</Dialog.Description>
			</div>
		</Dialog.Header>

		<RadioGroup.Root class="w-full gap-6 sm:grid-cols-2" bind:value={plan}>
			{#each data as planData (planData.id)}
				<div
					class="relative flex w-full flex-col gap-4 rounded-md border border-input px-5 py-6 outline-none has-data-[state=checked]:border-primary"
				>
					<div class="flex flex-col gap-1">
						<div class="flex items-center justify-between gap-2">
							<Label for={planData.id} class="text-base">
								{planData.title}
							</Label>
							<RadioGroup.Item
								value={planData.id}
								id={planData.id}
								class="size-5 after:absolute after:inset-0 [&_svg]:size-3"
								aria-label={`plan-radio-${planData.title.toLowerCase().replace(/\s+/g, '-')}`}
							/>
						</div>
						<p>
							<span class="text-2xl font-medium">${planData.price}</span>
							<span class="text-xl text-muted-foreground">/user</span>
						</p>
						<p class="text-sm text-muted-foreground">{planData.description}</p>
					</div>

					<div class="flex flex-col gap-2.5">
						{#each planData.features as feature}
							<div class="flex items-center gap-2">
								<CircleCheckIcon class="size-5 shrink-0" />
								<span class="text-sm">{feature}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</RadioGroup.Root>

		<Dialog.Footer class="gap-4 max-sm:flex-col sm:justify-between">
			<Button size="lg" class="bg-primary/10 text-primary hover:bg-primary/20">
				<MessageSquareTextIcon />
				Chat with us
			</Button>
			<div class="flex justify-between gap-4">
				<Dialog.Close>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="lg">Cancel</Button>
					{/snippet}
				</Dialog.Close>
				<Button size="lg">Purchase now</Button>
			</div>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
