<script lang="ts">
	import { MenuIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { cn } from '$lib/utils';
	import Logo from '$lib/registry/components/logo.svelte';

	export type NavigationSection = {
		title: string;
		href: string;
	};

	type HeaderProps = {
		navigationData: NavigationSection[];
		class?: string;
	};

	let { navigationData, class: className }: HeaderProps = $props();
</script>

<header class={cn('sticky top-0 z-50 h-16 border-b bg-background', className)}>
	<div
		class="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
	>
		<a href="#">
			<Logo class="gap-3" />
		</a>

		<NavigationMenu.Root class="max-md:hidden">
			<NavigationMenu.List class="flex-wrap justify-start gap-0">
				{#each navigationData as navItem (navItem.title)}
					<NavigationMenu.Item>
						<NavigationMenu.Link
							href={navItem.href}
							class="px-3 py-1.5 text-base! font-medium text-muted-foreground hover:bg-transparent hover:text-primary"
						>
							{navItem.title}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>

		<Button class="rounded-lg max-md:hidden" href="#">Login</Button>

		<div class="flex gap-4 md:hidden">
			<Button class="rounded-lg" href="#">Login</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ ...props })}
						<Button {...props} variant="outline" size="icon">
							<MenuIcon />
							<span class="sr-only">Menu</span>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" align="end">
					{#each navigationData as item}
						<DropdownMenu.Item>
							<a href={item.href}>{item.title}</a>
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
