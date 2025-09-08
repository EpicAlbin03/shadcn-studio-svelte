<script lang="ts">
	import { CircleCheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Command,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList
	} from '$lib/components/ui/command';
	import { Label } from '$lib/components/ui/label';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
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
	const selectedValue = $derived(frameworks.find((f) => f.value === value)?.label);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Combobox with custom check icon</Label>
	<Popover bind:open>
		<PopoverTrigger bind:ref={triggerRef}>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full max-w-xs justify-between"
				>
					{#if selectedValue}
						{selectedValue}
					{:else}
						<span class="text-muted-foreground">Select industry category</span>
					{/if}
					<ChevronsUpDownIcon class="opacity-50" />
				</Button>
			{/snippet}
		</PopoverTrigger>
		<PopoverContent class="p-0">
			<Command>
				<CommandInput placeholder="Search framework..." class="h-9" />
				<CommandList>
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{#each frameworks as framework (framework.value)}
							<CommandItem
								value={framework.value}
								onSelect={() => {
									value = framework.value;
									closeAndFocusTrigger();
								}}
							>
								{framework.label}
								<CircleCheckIcon
									class={cn(
										'ml-auto fill-blue-500 stroke-white',
										value === framework.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
