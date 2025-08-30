<script lang="ts">
	import type { ThemeStyleProps } from '$lib/types/theme';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import ColorSwatch from './ColorSwatch.svelte';
	import { mode as _mode } from 'mode-watcher';

	// const settings = $derived(themeSettings.theme);
	// const updateSettings = $derived(themeSettings.updateSettings);
	// const mode = $derived(_mode.current ?? 'light');
	// const currentTheme = $derived(settings.theme.styles?.[mode]) as
	// 	| Partial<ThemeStyleProps>
	// 	| undefined;

	// const updateColor = (key: keyof ThemeStyleProps, value: string) => {
	// 	if (!currentTheme) return;

	// 	// apply common styles to both light and dark modes
	// 	if (key === 'font-sans' || key === 'font-serif' || key === 'font-mono' || key === 'radius') {
	// 		updateSettings({
	// 			theme: {
	// 				...settings.theme,
	// 				styles: {
	// 					...settings.theme.styles,
	// 					light: { ...settings.theme.styles?.light, [key]: value },
	// 					dark: { ...settings.theme.styles?.dark, [key]: value }
	// 				}
	// 			}
	// 		});

	// 		return;
	// 	}

	// 	updateSettings({
	// 		theme: {
	// 			...settings.theme,
	// 			styles: {
	// 				...settings.theme.styles,
	// 				[mode]: {
	// 					...settings.theme.styles?.[mode as keyof ThemePreset],
	// 					[key]: value
	// 				}
	// 			}
	// 		}
	// 	});
	// };
</script>

<div class="space-y-6">
	<Accordion type="multiple" value={['brand']} class="w-full space-y-4">
		<!-- Brand Colors -->
		<!-- <AccordionItem value="brand" class="rounded-lg border px-4">
			<AccordionTrigger class="cursor-pointer py-3 text-base font-medium"
				>Brand Colors</AccordionTrigger
			>
			<AccordionContent class="space-y-3 pt-2 pb-4">
				<ColorSwatch
					label="Primary"
					value={currentTheme?.primary || ''}
					onChange={(value) => updateColor('primary', value)}
				/>
				<ColorSwatch
					label="Primary Foreground"
					value={currentTheme?.['primary-foreground'] || ''}
					onChange={(value) => updateColor('primary-foreground', value)}
				/>
				<ColorSwatch
					label="Secondary"
					value={currentTheme?.secondary || ''}
					onChange={(value) => updateColor('secondary', value)}
				/>
				<ColorSwatch
					label="Secondary Foreground"
					value={currentTheme?.['secondary-foreground'] || ''}
					onChange={(value) => updateColor('secondary-foreground', value)}
				/>
				<ColorSwatch
					label="Destructive"
					value={currentTheme?.destructive || ''}
					onChange={(value) => updateColor('destructive', value)}
				/>
			</AccordionContent>
		</AccordionItem> -->

		<!-- Base Colors -->
		<!-- <AccordionItem value="base" class="rounded-lg border px-4">
			<AccordionTrigger class="cursor-pointer py-3 text-base font-medium"
				>Base Colors</AccordionTrigger
			>
			<AccordionContent class="space-y-3 pt-2 pb-4">
				<ColorSwatch
					label="Background"
					value={currentTheme?.background || ''}
					onChange={(value) => updateColor('background', value)}
				/>
				<ColorSwatch
					label="Foreground"
					value={currentTheme?.foreground || ''}
					onChange={(value) => updateColor('foreground', value)}
				/>
				<ColorSwatch
					label="Card"
					value={currentTheme?.card || ''}
					onChange={(value) => updateColor('card', value)}
				/>
				<ColorSwatch
					label="Card Foreground"
					value={currentTheme?.['card-foreground'] || ''}
					onChange={(value) => updateColor('card-foreground', value)}
				/>
				<ColorSwatch
					label="Popover"
					value={currentTheme?.popover || ''}
					onChange={(value) => updateColor('popover', value)}
				/>
				<ColorSwatch
					label="Popover Foreground"
					value={currentTheme?.['popover-foreground'] || ''}
					onChange={(value) => updateColor('popover-foreground', value)}
				/>
			</AccordionContent>
		</AccordionItem> -->

		<!-- Other Colors -->
		<!-- <AccordionItem value="other" class="rounded-lg !border px-4">
			<AccordionTrigger class="cursor-pointer py-3 text-base font-medium"
				>Other Colors</AccordionTrigger
			>
			<AccordionContent class="space-y-3 pt-2 pb-4">
				<ColorSwatch
					label="Muted"
					value={currentTheme?.muted || ''}
					onChange={(value) => updateColor('muted', value)}
				/>
				<ColorSwatch
					label="Muted Foreground"
					value={currentTheme?.['muted-foreground'] || ''}
					onChange={(value) => updateColor('muted-foreground', value)}
				/>
				<ColorSwatch
					label="Accent"
					value={currentTheme?.accent || ''}
					onChange={(value) => updateColor('accent', value)}
				/>
				<ColorSwatch
					label="Accent Foreground"
					value={currentTheme?.['accent-foreground'] || ''}
					onChange={(value) => updateColor('accent-foreground', value)}
				/>
				<ColorSwatch
					label="Border"
					value={currentTheme?.border || ''}
					onChange={(value) => updateColor('border', value)}
				/>
				<ColorSwatch
					label="Input"
					value={currentTheme?.input || ''}
					onChange={(value) => updateColor('input', value)}
				/>
				<ColorSwatch
					label="Ring"
					value={currentTheme?.ring || ''}
					onChange={(value) => updateColor('ring', value)}
				/>
			</AccordionContent>
		</AccordionItem> -->

		<!-- Sidebar Colors -->
		<!-- <AccordionItem value="sidebar" class="rounded-lg !border px-4">
			<AccordionTrigger class="cursor-pointer py-3 text-base font-medium"
				>Sidebar Colors</AccordionTrigger
			>
			<AccordionContent class="space-y-3 pt-2 pb-4">
				<ColorSwatch
					label="Sidebar"
					value={currentTheme?.sidebar || ''}
					onChange={(value) => updateColor('sidebar', value)}
				/>
				<ColorSwatch
					label="Sidebar Foreground"
					value={currentTheme?.['sidebar-foreground'] || ''}
					onChange={(value) => updateColor('sidebar-foreground', value)}
				/>
				<ColorSwatch
					label="Sidebar Primary"
					value={currentTheme?.['sidebar-primary'] || ''}
					onChange={(value) => updateColor('sidebar-primary', value)}
				/>
				<ColorSwatch
					label="Sidebar Primary Foreground"
					value={currentTheme?.['sidebar-primary-foreground'] || ''}
					onChange={(value) => updateColor('sidebar-primary-foreground', value)}
				/>
				<ColorSwatch
					label="Sidebar Accent"
					value={currentTheme?.['sidebar-accent'] || ''}
					onChange={(value) => updateColor('sidebar-accent', value)}
				/>
				<ColorSwatch
					label="Sidebar Accent Foreground"
					value={currentTheme?.['sidebar-accent-foreground'] || ''}
					onChange={(value) => updateColor('sidebar-accent-foreground', value)}
				/>
				<ColorSwatch
					label="Sidebar Border"
					value={currentTheme?.['sidebar-border'] || ''}
					onChange={(value) => updateColor('sidebar-border', value)}
				/>
				<ColorSwatch
					label="Sidebar Ring"
					value={currentTheme?.['sidebar-ring'] || ''}
					onChange={(value) => updateColor('sidebar-ring', value)}
				/>
			</AccordionContent>
		</AccordionItem> -->

		<!-- Chart Colors -->
		<!-- <AccordionItem value="chart" class="rounded-lg !border px-4">
			<AccordionTrigger class="cursor-pointer py-3 text-base font-medium"
				>Chart Colors</AccordionTrigger
			>
			<AccordionContent class="space-y-3 pt-2 pb-4">
				<ColorSwatch
					label="Chart 1"
					value={currentTheme?.['chart-1'] || ''}
					onChange={(value) => updateColor('chart-1', value)}
				/>
				<ColorSwatch
					label="Chart 2"
					value={currentTheme?.['chart-2'] || ''}
					onChange={(value) => updateColor('chart-2', value)}
				/>
				<ColorSwatch
					label="Chart 3"
					value={currentTheme?.['chart-3'] || ''}
					onChange={(value) => updateColor('chart-3', value)}
				/>
				<ColorSwatch
					label="Chart 4"
					value={currentTheme?.['chart-4'] || ''}
					onChange={(value) => updateColor('chart-4', value)}
				/>
				<ColorSwatch
					label="Chart 5"
					value={currentTheme?.['chart-5'] || ''}
					onChange={(value) => updateColor('chart-5', value)}
				/>
			</AccordionContent>
		</AccordionItem> -->
	</Accordion>
</div>
