<script lang="ts">
	import { CalendarClockIcon, MenuIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import MenuDropdown, { type NavigationSection } from './menu-dropdown.svelte';
	import MenuNavigation from './menu-navigation.svelte';
	import { cn } from '$lib/utils';
	import BistroLogo from '$lib/registry/lib/assets/svg/bistro-logo.svelte';

	type HeaderProps = {
		navigationData: NavigationSection[];
		class?: string;
	};

	let { navigationData, class: className }: HeaderProps = $props();

	let isScrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class={cn(
		'fixed top-0 z-50 h-17.5 w-full border-b transition-all duration-300',
		{
			'bg-background shadow-md': isScrolled
		},
		className
	)}
>
	<div
		class="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
	>
		<!-- Logo -->
		<a href="#" class="flex items-center gap-3">
			<BistroLogo />
			<span class="text-[20px] font-semibold text-primary">Bistro</span>
		</a>

		<!-- Navigation -->
		<MenuNavigation
			{navigationData}
			className="max-lg:hidden [&_[data-slot=navigation-menu-list]]:gap-1"
		/>

		<!-- Actions -->
		<div class="flex gap-4">
			<Button class="rounded-full max-sm:hidden" href="#">Book table</Button>

			<!-- Navigation for small screens -->
			<div class="flex gap-3">
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button {...props} size="icon" class="rounded-full sm:hidden" href="#">
								<CalendarClockIcon />
								<span class="sr-only">Book table</span>
							</Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content>Book table</Tooltip.Content>
				</Tooltip.Root>

				<MenuDropdown align="end" {navigationData}>
					{#snippet trigger(props)}
						<Button {...props} variant="outline" size="icon" class="rounded-full lg:hidden">
							<MenuIcon />
							<span class="sr-only">Menu</span>
						</Button>
					{/snippet}
				</MenuDropdown>
			</div>
		</div>
	</div>
</header>
