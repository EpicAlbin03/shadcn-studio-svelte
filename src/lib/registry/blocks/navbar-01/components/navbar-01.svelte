<script lang="ts">
	import { MenuIcon, SearchIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Logo from './logo.svelte';

	type NavigationItem = {
		title: string;
		href: string;
	}[];

	type Props = { navigationData: NavigationItem };

	let { navigationData }: Props = $props();
</script>

<header class="sticky top-0 z-50 bg-background">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
		<div
			class="flex flex-1 items-center gap-8 font-medium text-muted-foreground md:justify-center lg:gap-16"
		>
			<a href="#" class="hover:text-primary max-md:hidden"> Home </a>
			<a href="#" class="hover:text-primary max-md:hidden"> Products </a>
			<a href="#">
				<Logo class="gap-3 text-foreground" />
			</a>
			<a href="#" class="hover:text-primary max-md:hidden"> About Us </a>
			<a href="#" class="hover:text-primary max-md:hidden"> Contacts </a>
		</div>

		<div class="flex items-center gap-6">
			<Button variant="ghost" size="icon">
				<SearchIcon />
				<span class="sr-only">Search</span>
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="md:hidden">
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="icon">
							<MenuIcon />
							<span class="sr-only">Menu</span>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" align="end">
					<DropdownMenu.Group>
						{#each navigationData as item}
							<DropdownMenu.Item>
								<a href={item.href}>{item.title}</a>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
