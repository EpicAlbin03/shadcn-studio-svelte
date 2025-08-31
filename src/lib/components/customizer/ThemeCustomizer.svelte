<script lang="ts">
	import { Palette, X } from '@lucide/svelte';
	import Shepherd from 'shepherd.js';
	import { offset } from 'svelte-floating-ui/dom';
	import 'shepherd.js/dist/css/shepherd.css';
	import { RainbowButton } from '$lib/components/ui/rainbow-button/index';
	import {
		Sheet,
		SheetContent,
		SheetHeader,
		SheetTitle,
		SheetTrigger,
		SheetClose
	} from '$lib/components/ui/sheet';
	import './shepherd.css';
	import { onMount } from 'svelte';
	import { getLocalStorage, setLocalStorage } from '$lib/utils/local-storage';
	import ThemeControlPanel from './ThemeControlPanel.svelte';
	import { UserConfigContext } from '$lib/config/user-config.svelte';

	const userConfig = UserConfigContext.get();

	let open = $state(false);

	onMount(() => {
		// Initialize the tour
		const tour = new Shepherd.Tour({
			useModalOverlay: true,
			defaultStepOptions: {
				classes: 'shadow-md rounded-lg',
				cancelIcon: {
					enabled: true
				}
			}
		});

		// Add steps to the tour
		tour.addStep({
			id: 'theme-customizer-intro',
			title: 'shadcn/ui Theme Generator 🤩',
			text: 'Transform your shadcn components in real time—customize, save, and ship stunning interfaces faster than ever.',
			attachTo: {
				element: '[data-tour="theme-customizer"]',
				on: 'bottom'
			},
			floatingUIOptions: {
				middleware: [offset(10)]
			},
			buttons: [
				{
					text: 'Skip',
					action: tour.complete,
					classes: 'shepherd-button-secondary'
				},
				{
					text: 'Start Customizing',
					action: () => {
						open = true;
						tour.complete();
					}
				}
			]
		});

		// Start the tour if it hasn't been shown before
		if (!userConfig.themeCustomizerTourCompleted) {
			tour.start();
			tour.on('complete', () => {
				userConfig.setThemeCustomizerTourCompleted(true);
			});
		}

		return () => {
			tour.complete();
		};
	});
</script>

<Sheet bind:open>
	<SheetTrigger>
		{#snippet child({ props })}
			<RainbowButton
				{...props}
				class="cursor-pointer"
				aria-label="Theme customizer"
				data-tour="theme-customizer"
			>
				<Palette class="h-4 w-4" />
			</RainbowButton>
		{/snippet}
	</SheetTrigger>
	<SheetContent class="h-full w-full gap-0 sm:max-w-[400px] [&>button]:hidden">
		<SheetHeader
			class="min-h-(--header-height) flex-row items-center justify-between border-b border-dashed px-6"
		>
			<SheetTitle>Theme Customizer</SheetTitle>
			<SheetClose
				class="flex size-7 cursor-pointer items-center justify-center rounded transition-colors hover:bg-muted"
			>
				<X class="size-4" />
			</SheetClose>
		</SheetHeader>
		<ThemeControlPanel />
	</SheetContent>
</Sheet>
