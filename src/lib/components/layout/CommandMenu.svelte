<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import { goto } from '$app/navigation';
	import { Search, Palette, Component, Sparkles } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
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
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." bind:value={search} />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#if search}
			{#each searchData as searchGroup, index}
				<Command.Group heading={searchGroup.title}>
					{#each searchGroup.data as item, i}
						<Command.Item onSelect={() => runCommand(() => goto(item.href))}>
							<item.icon />
							<span>{item.name}</span>
							{#if item.shortcut}
								<Command.Shortcut>{item.shortcut}</Command.Shortcut>
							{/if}
						</Command.Item>
					{/each}
				</Command.Group>
				{#if index !== searchData.length - 1}
					<Command.Separator />
				{/if}
			{/each}
		{:else}
			<Command.Group heading="Suggestions">
				<Command.Item onSelect={() => runCommand(() => goto('/theme-generator'))}>
					<Palette />
					<span>Theme Generator</span>
				</Command.Item>
				<Command.Item onSelect={() => runCommand(() => goto('/components'))}>
					<Component />
					<span>Components</span>
				</Command.Item>
				<Command.Item onSelect={() => runCommand(() => goto('/docs/getting-started/introduction'))}>
					<Sparkles />
					<span>Introduction</span>
				</Command.Item>
			</Command.Group>
		{/if}
	</Command.List>
</Command.Dialog>
