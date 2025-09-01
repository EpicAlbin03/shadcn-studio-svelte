<script lang="ts">
	import { Copy, RotateCcw, Sun, Moon, AlertCircle } from '@lucide/svelte';
	import type { ThemeStyleProps } from '$lib/types/theme';
	import ShadowControl from './ShadowControl.svelte';
	import ThemeFontSelect from './ThemeFontSelect.svelte';
	import SliderWithInput from './SliderWithInput.svelte';
	import ThemeColorPanel from './color-panel/ThemeColorPanel.svelte';
	import HoldToSaveTheme from './save-theme/HoldToSaveTheme.svelte';
	import ThemePresetSelect from './ThemePresetSelect.svelte';
	import ThemeVariablesDialog from './ThemeVariablesDialog.svelte';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import {
		DEFAULT_FONT_SANS,
		DEFAULT_FONT_SERIF,
		DEFAULT_FONT_MONO
	} from '$lib/assets/data/preset-themes';
	import { presetThemes } from '$lib/assets/data/preset-themes';
	import {
		getAppliedThemeFont,
		sansSerifFonts,
		serifFonts,
		monoFonts
	} from '$lib/utils/theme-fonts';
	import { mode as _mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { setMode } from '$lib/utils/mode';
	import { UserConfigContext } from '$lib/config/user-config.svelte';

	const userConfig = UserConfigContext.get();

	const mode = $derived(_mode.current ?? 'light');
	const currentStyles = $derived(userConfig.activeTheme.cssVars?.[mode] || {});

	// // Helper function to ensure both themes are updated together
	const updateBothThemes = (updates: Partial<ThemeStyleProps>) => {
		const currentLight = userConfig.activeTheme.cssVars?.light || {};
		const currentDark = userConfig.activeTheme.cssVars?.dark || {};

		const updatedTheme = {
			...userConfig.activeTheme,
			cssVars: {
				light: { ...currentLight, ...updates },
				dark: { ...currentDark, ...updates }
			}
		};

		userConfig.setActiveTheme(updatedTheme);
	};

	// // Update font change handlers to use the new helper
	const handleFontChange = (fontType: 'font-sans' | 'font-serif' | 'font-mono', value: string) => {
		console.log('font', fontType, value);
		updateBothThemes({ [fontType]: value });
	};

	// // Update radius change handler to use the new helper
	const handleRadiusChange = (value: number) => {
		updateBothThemes({ radius: `${value}rem` });
	};

	const handleStyleChange = (key: keyof ThemeStyleProps, value: string) => {
		const updatedTheme = {
			...userConfig.activeTheme,
			cssVars: {
				...userConfig.activeTheme.cssVars,
				[mode]: {
					...currentStyles,
					[key]: value
				}
			}
		};

		userConfig.setActiveTheme(updatedTheme);
	};

	const handleLetterSpacingChange = (value: number) => {
		updateBothThemes({ 'letter-spacing': `${value}em` });
	};

	const handleSpacingChange = (value: number) => {
		updateBothThemes({ spacing: `${value}rem` });
	};

	// onMount(() => {
	// 	// Ensure theme styles exist when component mounts
	// 	if (!settings.theme.styles?.light || !settings.theme.styles?.dark) {
	// 		const updatedSettings = {
	// 			...settings,
	// 			theme: {
	// 				...settings.theme,
	// 				styles: {
	// 					light: settings.theme.styles?.light || {},
	// 					dark: settings.theme.styles?.dark || {}
	// 				}
	// 			}
	// 		} as ThemeSettings;

	// 		updateSettings(updatedSettings);
	// 	}
	// });
</script>

<ScrollArea class="h-[calc(100vh-6.3125rem)]">
	<div class="flex flex-col gap-6 p-6">
		<div class="flex gap-3">
			<ThemeVariablesDialog />
			<Button
				variant="outline"
				class="flex-1 cursor-pointer gap-2"
				size="lg"
				onclick={() => userConfig.resetActiveTheme()}
			>
				<RotateCcw class="h-4 w-4" />
				Reset
			</Button>
		</div>

		<!-- Mode Selection -->
		<div class="flex flex-col gap-4">
			<h3 class="text-lg font-medium">Mode</h3>
			<ToggleGroup
				type="single"
				bind:value={() => mode, (v) => setMode(userConfig, v)}
				class="gap-4"
			>
				<ToggleGroupItem
					value="light"
					aria-label="Toggle light"
					class="cursor-pointer rounded-md border px-4 py-2 hover:text-foreground"
				>
					<Sun class="size-4" />
					<span>Light</span>
				</ToggleGroupItem>
				<ToggleGroupItem
					value="dark"
					aria-label="Toggle dark"
					class="cursor-pointer rounded-md border px-4 py-2 hover:text-foreground"
				>
					<Moon class="size-4" />
					<span>Dark</span>
				</ToggleGroupItem>
			</ToggleGroup>
		</div>

		<!-- Themes Selection -->
		<ThemePresetSelect />

		<Tabs value="colors" class="h-full w-full">
			<TabsList class="mb-3 grid w-full grid-cols-3">
				<TabsTrigger value="colors" class="cursor-pointer">Colors</TabsTrigger>
				<TabsTrigger value="typography" class="cursor-pointer">Typography</TabsTrigger>
				<TabsTrigger value="other" class="cursor-pointer">Other</TabsTrigger>
			</TabsList>

			<TabsContent value="colors">
				<!-- CSS Variables Section -->
				<ThemeColorPanel />
			</TabsContent>

			<!-- Text Selection} -->
			<TabsContent value="typography">
				<div class="mb-4">
					<Label for="font-sans" class="mb-1.5 block text-xs">Sans-Serif Font</Label>
					<ThemeFontSelect
						fonts={sansSerifFonts}
						defaultValue={DEFAULT_FONT_SANS}
						currentFont={getAppliedThemeFont(currentStyles, 'font-sans')}
						onFontChange={(value) => handleFontChange('font-sans', value)}
					/>
				</div>

				<div class="mb-4">
					<Label for="font-serif" class="mb-1.5 block text-xs">Serif Font</Label>
					<ThemeFontSelect
						fonts={serifFonts}
						defaultValue={DEFAULT_FONT_SERIF}
						currentFont={getAppliedThemeFont(currentStyles, 'font-serif')}
						onFontChange={(value) => handleFontChange('font-serif', value)}
					/>
				</div>

				<div>
					<Label for="font-mono" class="mb-1.5 block text-xs">Monospace Font</Label>
					<ThemeFontSelect
						fonts={monoFonts}
						defaultValue={DEFAULT_FONT_MONO}
						currentFont={getAppliedThemeFont(currentStyles, 'font-mono')}
						onFontChange={(value) => handleFontChange('font-mono', value)}
					/>
				</div>

				<div class="mt-6">
					<SliderWithInput
						value={parseFloat(
							userConfig.activeTheme.cssVars?.[mode]?.['letter-spacing']?.replace('em', '') || '0'
						)}
						onChange={handleLetterSpacingChange}
						min={-0.25}
						max={0.25}
						step={0.025}
						unit="em"
						label="Letter Spacing"
					/>
				</div>

				<Alert class="mt-6">
					<AlertCircle class="size-4" />
					<AlertDescription class="block">
						To use custom fonts, embed them in your project. See{' '}
						<a
							href="https://tailwindcss.com/docs/font-family"
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-2 hover:text-muted-foreground/90"
						>
							Tailwind docs
						</a>{' '}
						for details.
					</AlertDescription>
				</Alert>
			</TabsContent>

			<TabsContent value="other">
				<!-- Radius Selection -->
				<div class="flex flex-col gap-4">
					<SliderWithInput
						value={parseFloat(currentStyles.radius?.replace('rem', '') || '0')}
						onChange={handleRadiusChange}
						min={0}
						max={2.5}
						step={0.025}
						unit="rem"
						label="Radius"
					/>
				</div>

				<div class="mt-6">
					<SliderWithInput
						value={parseFloat(currentStyles?.spacing?.replace('rem', '') || '0.25')}
						onChange={handleSpacingChange}
						min={0.15}
						max={0.35}
						step={0.01}
						unit="rem"
						label="Spacing"
					/>
				</div>

				<div class="mt-6">
					<ShadowControl
						shadowColor={currentStyles['shadow-color'] || '#000000'}
						shadowOpacity={parseFloat(currentStyles['shadow-opacity'] || '0.1')}
						shadowBlur={parseFloat(currentStyles['shadow-blur']?.replace('px', '') || '0')}
						shadowSpread={parseFloat(currentStyles['shadow-spread']?.replace('px', '') || '0')}
						shadowOffsetX={parseFloat(currentStyles['shadow-offset-x']?.replace('px', '') || '0')}
						shadowOffsetY={parseFloat(currentStyles['shadow-offset-y']?.replace('px', '') || '0')}
						onChange={(key, value) => {
							if (key === 'shadow-color') {
								handleStyleChange(key as keyof ThemeStyleProps, value as string);
							} else if (
								key === 'shadow-opacity' ||
								key === 'shadow-depth' ||
								key === 'shadow-noise'
							) {
								handleStyleChange(key as keyof ThemeStyleProps, value.toString());
							} else {
								handleStyleChange(key as keyof ThemeStyleProps, `${value}px`);
							}
						}}
					/>
				</div>
			</TabsContent>
		</Tabs>

		<!-- <HoldToSaveTheme /> -->
	</div>
</ScrollArea>
