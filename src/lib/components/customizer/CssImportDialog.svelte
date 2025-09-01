<script lang="ts">
	import { AlertCircle, FileCode } from '@lucide/svelte';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';
	import { toast } from 'svelte-sonner';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import {
		parseCssInput,
		parseLetterSpacing,
		parseShadowVariables
	} from '$lib/utils/parse-css-input';

	const userConfig = UserConfigContext.get();

	let open = $state(false);
	let cssText = $state('');
	let error = $state<string | null>(null);

	const onImport = (css: string) => {
		const { lightColors, darkColors } = parseCssInput(css);
		const { lightShadows, darkShadows } = parseShadowVariables(css);
		const letterSpacing = parseLetterSpacing(css);

		// Always preserve both themes and merge with new ones
		const currentLightStyles = userConfig.activeTheme.cssVars?.light || {};
		const currentDarkStyles = userConfig.activeTheme.cssVars?.dark || {};

		const updatedSettings = {
			...userConfig.activeTheme,
			cssVars: {
				light: {
					...currentLightStyles,
					...lightColors,
					...lightShadows,
					'letter-spacing': letterSpacing
				},
				dark: {
					...currentDarkStyles,
					...darkColors,
					...darkShadows
				}
			}
		};

		userConfig.setActiveTheme(updatedSettings);

		// Show success message with details
		toast.success('Theme imported successfully', {
			description: 'Both light and dark mode styles have been updated'
		});
	};

	const handleImport = () => {
		// Basic validation - check if the CSS contains some expected variables
		if (!cssText.trim()) {
			error = 'Please enter CSS content';

			return;
		}

		try {
			// Here you would add more sophisticated CSS parsing validation
			// For now we'll just do a simple check
			if (!cssText.includes('--') || !cssText.includes(':')) {
				error =
					'Invalid CSS format. CSS should contain variable definitions like --primary: #color';

				return;
			}

			onImport(cssText);
			cssText = '';
			error = null;
			open = false;
		} catch (err) {
			error = 'Failed to parse CSS. Please check your syntax.';
		}
	};

	const handleClose = () => {
		cssText = '';
		error = null;
		open = false;
	};
</script>

<Dialog bind:open>
	<DialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" class="cursor-pointer">
				<FileCode class="size-4" />
				Import
			</Button>
		{/snippet}
	</DialogTrigger>
	<DialogContent class="max-h-[90vh] sm:max-w-[600px]">
		<DialogHeader>
			<DialogTitle class="text-foreground">Import Custom CSS</DialogTitle>
			<DialogDescription>
				Paste your CSS file below to customize the theme colors. Make sure to include variables like
				--primary, --background, etc.
			</DialogDescription>
		</DialogHeader>

		{#if error}
			<Alert variant="destructive" class="mb-4">
				<AlertCircle class="mr-2 h-4 w-4" />
				<AlertDescription>{error}</AlertDescription>
			</Alert>
		{/if}

		<div class="grid gap-4 py-4">
			<Textarea
				placeholder={`:root {
  --background: 0 0% 100%;
  --foreground: oklch(0.52 0.13 144.17);
  --primary: #3e2723;
  /* And more */
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: hsl(37.50 36.36% 95.69%);
  --primary: rgb(46, 125, 50);
  /* And more */
}
  `}
				class="max-h-[500px] min-h-[300px] font-mono text-sm text-foreground"
				bind:value={cssText}
				onchange={() => {
					if (error) error = null;
				}}
			/>
		</div>
		<DialogFooter>
			<Button variant="outline" onclick={handleClose} class="cursor-pointer text-foreground"
				>Cancel</Button
			>
			<Button onclick={handleImport} class="cursor-pointer">Import</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
