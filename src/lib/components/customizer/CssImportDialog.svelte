<script lang="ts">
	import { AlertCircle } from '@lucide/svelte';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';

	type Props = {
		open: boolean;
		onImport: (css: string) => void;
	};

	let { open = $bindable(), onImport }: Props = $props();

	let cssText = $state('');
	let error = $state<string | null>(null);

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
