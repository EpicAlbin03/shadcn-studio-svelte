<script lang="ts">
	import { CheckIcon, ChevronsUpDownIcon, XIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
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
	let values = $state(['london', 'react']);

	const toggleSelection = (value: string) => {
		values = values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
	};

	const removeSelection = (value: string) => {
		values = values.filter((v) => v !== value);
	};
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Multiple combobox</Label>
	<Popover bind:open>
		<PopoverTrigger>
			{#snippet child({ props })}
				<Button
					{...props}
					{id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="h-auto min-h-8 w-full justify-between hover:bg-transparent"
				>
					<div class="flex flex-wrap items-center gap-1 pe-2.5">
						{#if values.length > 0}
							{#each values as val (val)}
								{@const framework = frameworks.find((c) => c.value === val)}
								{#if framework}
									<Badge variant="outline">
										{framework.label}
										<Button
											variant="ghost"
											size="icon"
											class="size-4"
											onclick={(e: MouseEvent) => {
												e.stopPropagation();
												removeSelection(val);
											}}
										>
											<XIcon class="size-3" />
										</Button>
									</Badge>
								{/if}
							{/each}
						{:else}
							<span class="text-muted-foreground">Select framework</span>
						{/if}
					</div>
					<ChevronsUpDownIcon
						size={16}
						class="shrink-0 text-muted-foreground/80"
						aria-hidden="true"
					/>
				</Button>
			{/snippet}
		</PopoverTrigger>
		<PopoverContent class="w-(--radix-popper-anchor-width) p-0">
			<Command>
				<CommandInput placeholder="Search framework..." />
				<CommandList>
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{#each frameworks as framework (framework.value)}
							<CommandItem
								value={framework.value}
								onSelect={() => toggleSelection(framework.value)}
							>
								<span class="truncate">{framework.label}</span>
								{#if values.includes(framework.value)}
									<CheckIcon size={16} class="ml-auto" />
								{/if}
							</CommandItem>
						{/each}
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</div>
