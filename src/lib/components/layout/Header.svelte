<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import CommandMenu from '$lib/components/layout/CommandMenu.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';
	import ModeToggle from '$lib/components/layout/ModeToggle.svelte';
	import NavMenu from '$lib/components/layout/NavMenu.svelte';
	import ThemeGenerator from '$lib/components/customizer/ThemeGenerator.svelte';
	import Github from '$lib/assets/svg/Github.svelte';
	import X from '$lib/assets/svg/X.svelte';
	import type { Component } from 'svelte';

	type Props = {
		toggle: Component;
	};

	let { toggle }: Props = $props();

	let Toggle = $state(toggle);
</script>

<header
	class="sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 items-center justify-center border-b border-dashed bg-background/60 backdrop-blur-[8px]"
>
	<div
		class="mx-auto flex h-full w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]"
	>
		<div class="flex w-full items-center max-lg:gap-4">
			<div class="flex items-center gap-3 ps-4 sm:ps-8">
				<Toggle />
				<a href="/">
					<Logo class="max-[425px]:[&_span]:hidden" />
				</a>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground max-sm:hidden"
					>
						v1.0.0-beta.3
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="start">
						<DropdownMenu.Group>
							<!-- <DropdownMenu.Item>
                  <a
                    href="https://github.com/themeselection/shadcn-studio/blob/main/CHANGELOG.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cursor-pointer"
                  >
                    Changelog
                  </a>
              </DropdownMenu.Item> -->
							<DropdownMenu.Item>
								<a href="/theme-generator/#roadmap" class="cursor-pointer">Roadmap</a>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
			<nav
				class="flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8"
			>
				<NavMenu />
				<div class="flex items-center gap-2 md:gap-4">
					<CommandMenu />
					<ThemeGenerator />
					<ModeToggle />
					<div class="flex items-center gap-1.5 max-md:hidden">
						<Button variant="ghost" size="icon" class="cursor-pointer">
							<a
								href="https://github.com/EpicAlbin03/shadcn-studio-svelte"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github class="size-5" />
								<span class="sr-only">Github</span>
							</a>
						</Button>
						<Button variant="ghost" size="icon" class="cursor-pointer">
							<a href="https://x.com/EpicAlbin03" target="_blank" rel="noopener noreferrer">
								<X class="size-5" />
								<span class="sr-only">X</span>
							</a>
						</Button>
						<!-- <Button variant="ghost" size="icon" class="cursor-pointer">
							<a
								href="https://discord.com/invite/kBHkY7DekX"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Discord class="size-5" />
								<span class="sr-only">Discord</span>
							</a>
						</Button> -->
					</div>
				</div>
			</nav>
		</div>
	</div>
</header>
