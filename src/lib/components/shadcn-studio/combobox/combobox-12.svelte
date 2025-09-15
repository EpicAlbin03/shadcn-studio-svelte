<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';

	const frameworks = [
		{ value: 'react', label: 'React' },
		{ value: 'nextjs', label: 'Nextjs' },
		{ value: 'angular', label: 'Angular' },
		{ value: 'vue', label: 'VueJS' },
		{ value: 'django', label: 'Django' },
		{ value: 'astro', label: 'Astro' },
		{ value: 'remix', label: 'Remix' },
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'solidjs', label: 'SolidJS' },
		{ value: 'qwik', label: 'Qwik' }
	];

	const id = $props.id();

	let open = $state(false);
	let values = $state(['react', 'nextjs', 'angular', 'vue', 'django', 'astro']);

	function toggleSelection(value: string) {
		values = values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Multiple Count badge</Label>
	<Popover.Root bind:open>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="h-auto min-h-8 w-full justify-between hover:bg-transparent"
				>
					{#if values.length > 0}
						<span>
							<Badge variant="outline">{values.length}</Badge>
							frameworks selected
						</span>
					{:else}
						<span class="text-muted-foreground">Select framework</span>
					{/if}
					<ChevronsUpDownIcon
						size={16}
						class="shrink-0 text-muted-foreground/80"
						aria-hidden="true"
					/>
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-(--radix-popper-anchor-width) p-0">
			<Command.Root>
				<Command.Input placeholder="Search framework..." />
				<Command.List>
					<Command.Empty>No framework found.</Command.Empty>
					<Command.Group>
						{#each frameworks as framework (framework.value)}
							<Command.Item
								value={framework.value}
								onSelect={() => toggleSelection(framework.value)}
							>
								<span class="truncate">{framework.label}</span>
								{#if values.includes(framework.value)}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
