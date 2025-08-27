<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { Search, Palette, Component, Sparkles } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		CommandDialog,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList,
		CommandSeparator,
		CommandShortcut
	} from '$lib/components/ui/command';
	import { searchData } from '$lib/assets/data/search';

	let open = $state(false);
	let search = $state('');

	const breakpoint = new MediaQuery('(max-width: 1279px)', false);
	const isBreakpointReached = $derived(breakpoint.current);

	function handleKeydown(e: KeyboardEvent) {
		if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
			if (
				(e.target instanceof HTMLElement && e.target.isContentEditable) ||
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement ||
				e.target instanceof HTMLSelectElement
			) {
				return;
			}

			e.preventDefault();
			open = !open;
		}
	}

	function runCommand(command: () => unknown) {
		open = false;
		command();
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<Button
	variant="outline"
	class="relative w-9 cursor-pointer text-sm font-normal xl:w-52 xl:justify-start xl:!pe-12 xl:text-muted-foreground xl:shadow-none"
	onclick={() => (open = true)}
	{...isBreakpointReached && { size: 'icon' }}
>
	<Search class="size-4" />
	<span class="inline-flex max-xl:hidden">Search...</span>
	<span class="sr-only">Search</span>
	<kbd
		class="pointer-events-none absolute top-[.4375rem] right-1.5 flex h-5 items-center gap-1 rounded border bg-muted px-1.5 text-xs font-medium select-none max-xl:hidden"
	>
		<span class="text-sm">⌘</span>K
	</kbd>
</Button>
<CommandDialog bind:open>
	<CommandInput placeholder="Type a command or search..." bind:value={search} />
	<CommandList>
		<CommandEmpty>No results found.</CommandEmpty>
		{#if search}
			{#each searchData as searchGroup, index}
				<CommandGroup heading={searchGroup.title}>
					{#each searchGroup.data as item, i}
						<CommandItem onselect={() => runCommand(() => goto(item.href))}>
							<item.icon />
							<span>{item.name}</span>
							{#if item.shortcut}
								<CommandShortcut>{item.shortcut}</CommandShortcut>
							{/if}
						</CommandItem>
					{/each}
				</CommandGroup>
				{#if index !== searchData.length - 1}
					<CommandSeparator />
				{/if}
			{/each}
		{:else}
			<CommandGroup heading="Suggestions">
				<CommandItem onselect={() => runCommand(() => goto('/theme-generator'))}>
					<Palette />
					<span>Theme Generator</span>
				</CommandItem>
				<CommandItem onselect={() => runCommand(() => goto('/components'))}>
					<Component />
					<span>Components</span>
				</CommandItem>
				<CommandItem onselect={() => runCommand(() => goto('/docs/getting-started/introduction'))}>
					<Sparkles />
					<span>Introduction</span>
				</CommandItem>
			</CommandGroup>
		{/if}
	</CommandList>
</CommandDialog>
