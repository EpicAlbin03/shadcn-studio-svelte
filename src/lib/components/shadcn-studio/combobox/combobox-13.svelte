<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	const frameworks = [
		{
			value: 'next.js',
			label: 'Next.js'
		},
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'nuxt.js',
			label: 'Nuxt.js'
		},
		{
			value: 'remix',
			label: 'Remix'
		},
		{
			value: 'astro',
			label: 'Astro'
		}
	];

	const id = $props.id();

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);
	const triggerContent = $derived(
		frameworks.find((framework) => framework.value === value)?.label ?? 'Select framework...'
	);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Combobox menu slide-in from bottom</Label>
	<Popover.Root bind:open>
		<Popover.Trigger bind:ref={triggerRef}>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full max-w-xs justify-between"
				>
					{triggerContent}
					<ChevronsUpDownIcon class="opacity-50" />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content
			class="p-0 duration-400 data-[state=open]:slide-in-from-bottom-10 data-[state=open]:zoom-in-100"
		>
			<Command.Root>
				<Command.Input placeholder="Search framework..." class="h-9" />
				<Command.List>
					<Command.Empty>No framework found.</Command.Empty>
					<Command.Group>
						{#each frameworks as framework (framework.value)}
							<Command.Item
								value={framework.value}
								onSelect={() => {
									value = framework.value;
									closeAndFocusTrigger();
								}}
							>
								{framework.label}
								<CheckIcon
									class={cn('ml-auto', value === framework.value ? 'opacity-100' : 'opacity-0')}
								/>
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
