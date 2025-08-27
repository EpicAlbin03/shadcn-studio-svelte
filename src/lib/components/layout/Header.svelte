<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import CommandMenu from '$lib/components/layout/CommandMenu.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';
	import ModeToggle from '$lib/components/layout/ModeToggle.svelte';
	import NavMenu from '$lib/components/layout/NavMenu.svelte';
	import ThemeCustomizer from '$lib/components/customizer/ThemeCustomizer.svelte';
	import Github from '$lib/assets/svg/Github.svelte';
	import Discord from '$lib/assets/svg/Discord.svelte';
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
				<DropdownMenu>
					<DropdownMenuTrigger
						class="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground max-sm:hidden"
					>
						v1.0.0-beta.3
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						<DropdownMenuGroup>
							<!-- <DropdownMenuItem>
                {#snippet child({ props })}
                  <a
                    {...props}
                    href="https://github.com/themeselection/shadcn-studio/blob/main/CHANGELOG.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cursor-pointer"
                  >
                    Changelog
                  </a>
                {/snippet}
              </DropdownMenuItem> -->
							<DropdownMenuItem>
								{#snippet child({ props })}
									<a {...props} href="/#roadmap" class="cursor-pointer">Roadmap</a>
								{/snippet}
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<nav
				class="flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8"
			>
				<NavMenu />
				<div class="flex items-center gap-2 md:gap-4">
					<CommandMenu />
					<ThemeCustomizer />
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
							<a
								href="https://discord.com/invite/kBHkY7DekX"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Discord class="size-5" />
								<span class="sr-only">Discord</span>
							</a>
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</div>
</header>
