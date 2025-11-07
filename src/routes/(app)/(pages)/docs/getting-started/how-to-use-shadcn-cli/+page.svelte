<script lang="ts">
	import { CircleAlertIcon, TriangleAlertIcon } from '@lucide/svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { gettingStartedPages } from '$lib/utils/pages';
	import PmAddComp from '$lib/components/pm-add-comp.svelte';

	const title = 'How to use Shadcn CLI';
	const description =
		'Learn how to use Shadcn CLI to install our components, blocks, and themes into your project seamlessly.';
</script>

<MetaData {title} {description} />

<div class="flex flex-1 flex-col space-y-6 p-4 sm:space-y-10 sm:p-8">
	<div class="flex flex-col items-start space-y-3">
		<h1 class="text-3xl font-bold sm:text-3xl">{title}</h1>
		<p class="text-muted-foreground">
			{description}
		</p>
	</div>
	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">Overview</h2>
		<p class="text-foreground/80">
			shadcn/studio uses the shadcn-svelte CLI, offering an easy way to install our components,
			blocks, and themes. The CLI is designed to help you quickly add ready-to-use assets without
			the need for NPM packages, following a simple "copy-and-paste" approach. Please refer to the
			official
			<a
				href="https://shadcn-svelte.com/docs/cli"
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				shadcn-svelte CLI documentation
			</a> for more details on its core functionality.
		</p>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">Setup</h2>
		<p class="text-foreground/80">
			Before using the shadcn/studio CLI, make sure that you've installed shadcn in your project by
			following the official
			<a
				href="https://shadcn-svelte.com/docs/installation"
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				installation guide
			</a>
		</p>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">Installation</h2>
		<p class="text-foreground/80">
			You can install components, blocks, and themes using the CLI commands below.
		</p>

		<h2 class="text-xl font-bold">Installing Components</h2>
		<p class="text-foreground/80">
			Components are enhanced versions of shadcn/ui components, with added functionality and
			styling. You can refer to the <a
				href={gettingStartedPages.find((p) => p.slug === 'components')?.href}
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				components documentation
			</a> for more information.
		</p>
		<div class="w-full">
			<PmAddComp name="button-01" />
		</div>

		<h2 class="text-xl font-bold">Installing Blocks</h2>
		<p class="text-foreground/80">
			You can refer to the <a
				href={gettingStartedPages.find((p) => p.slug === 'blocks')?.href}
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				blocks documentation
			</a> for more information.
		</p>
		<div class="w-full">
			<PmAddComp name="hero-section-01" />
		</div>

		<h2 class="text-xl font-bold">Installing Themes</h2>
		<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			<CircleAlertIcon />
			<Alert.Description class="text-sky-600/80 dark:text-sky-400/80">
				Only the pre-built themes are available for installation via the CLI.
			</Alert.Description>
		</Alert.Root>

		<Alert.Root
			class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
		>
			<CircleAlertIcon />
			<Alert.Description class="inline text-amber-600/80 dark:text-amber-400/80">
				You need to manually install the font dependencies and add them to your layout file, as they
				are not included in the themes. You can find the fonts from <a
					href="https://fonts.google.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-amber-600 dark:hover:text-amber-400"
				>
					Google Fonts
				</a>
			</Alert.Description>
		</Alert.Root>

		<Alert.Root
			class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
		>
			<CircleAlertIcon />
			<Alert.Description class="inline text-amber-600/80 dark:text-amber-400/80">
				Make sure you have <strong> @theme inline </strong>,
				<strong> :root </strong>, and
				<strong> .dark </strong> already specified in
				<strong> app.css </strong> before adding a theme or it won't add those styles.
			</Alert.Description>
		</Alert.Root>

		<div class="w-full">
			<PmAddComp name="art-deco" />
		</div>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">Advanced Usage</h2>

		<h2 class="text-xl font-bold">Installing Multiple Items</h2>
		<p class="text-foreground/80">You can install multiple items at once by listing them:</p>
		<div class="w-full">
			<PmAddComp name={['button-01', 'hero-section-01', 'art-deco']} />
		</div>

		<h2 class="text-xl font-bold">Force Overwriting Existing Files</h2>
		<p class="text-foreground/80">If you want to overwrite existing files during installation:</p>
		<div class="w-full">
			<PmAddComp name="button-01" overwrite />
		</div>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">Troubleshooting</h2>

		<h2 class="text-xl font-bold">1. Block/Component/Theme Not Found</h2>
		<Alert.Root class="border-none bg-destructive/10 text-destructive">
			<TriangleAlertIcon />
			<Alert.Title>Error: Block/Component/Theme not found</Alert.Title>
			<Alert.Description class="text-destructive/80">
				"The requested block/component/theme could not be found. Please check the
				block/component/theme name and try again."
			</Alert.Description>
		</Alert.Root>
		<div>
			<p class="mb-2 font-medium">Solution:</p>
			<ul class="ml-4 list-disc space-y-1 text-sm text-foreground/80">
				<li>Verify the spelling of the block/component/theme name.</li>
				<li>Ensure that the block/component/theme exists in the registry.</li>
			</ul>
		</div>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">Best Practices</h2>

		<ol class="ml-4 list-decimal space-y-1 text-foreground/80">
			<li>
				<strong>Regularly update</strong> your Shadcn CLI to stay up to date with new features.
			</li>
			<li>
				<strong>Customize components</strong> after installation to ensure they match your project's
				design requirements.
			</li>
		</ol>
	</div>
</div>
