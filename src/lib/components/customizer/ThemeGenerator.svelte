<script lang="ts">
	import { Palette, X } from '@lucide/svelte';
	import Shepherd from 'shepherd.js';
	import { offset } from 'svelte-floating-ui/dom';
	import 'shepherd.js/dist/css/shepherd.css';
	import { RainbowButton } from '$lib/components/ui/rainbow-button';
	import * as Sheet from '$lib/components/ui/sheet';
	import './shepherd.css';
	import { onMount } from 'svelte';
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
			id: 'theme-generator-intro',
			title: 'shadcn/ui Theme Generator 🤩',
			text: 'Transform your shadcn components in real time—customize, save, and ship stunning interfaces faster than ever.',
			attachTo: {
				element: '[data-tour="theme-generator"]',
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
		if (!userConfig.settings.themeCustomizerTourCompleted) {
			tour.start();
			tour.on('complete', () => {
				userConfig.setSettings({ themeCustomizerTourCompleted: true });
			});
		}

		return () => {
			tour.complete();
		};
	});
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger>
		{#snippet child({ props })}
			<RainbowButton
				{...props}
				class="cursor-pointer"
				aria-label="Theme generator"
				data-tour="theme-generator"
			>
				<Palette class="h-4 w-4" />
			</RainbowButton>
		{/snippet}
	</Sheet.Trigger>
	<Sheet.Content
		class="h-full w-full gap-0 sm:max-w-[400px] [&>button]:hidden"
		interactOutsideBehavior="ignore"
		preventScroll={false}
		overlay={false}
	>
		<Sheet.Header
			class="min-h-(--header-height) flex-row items-center justify-between border-b border-dashed px-6"
		>
			<Sheet.Title>Theme Generator</Sheet.Title>
			<Sheet.Close
				class="flex size-7 cursor-pointer items-center justify-center rounded transition-colors hover:bg-muted"
			>
				<X class="size-4" />
			</Sheet.Close>
		</Sheet.Header>
		<ThemeControlPanel />
	</Sheet.Content>
</Sheet.Root>
