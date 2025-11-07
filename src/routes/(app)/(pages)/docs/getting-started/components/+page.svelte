<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { gettingStartedPages } from '$lib/utils/pages';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { CircleAlertIcon } from '@lucide/svelte';

	const title = 'shadcn/studio Components Documentation';
	const description =
		'Everything you need to know about shadcn/studio components and how to use it.';
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
		<h2 class="text-2xl font-bold">What we provide?</h2>
		<p class="text-foreground/80">
			We provide a rich catalog of production-ready component variants that you can use directly in
			any shadcn/ui project via a simple CLI command. Each variant is accessible, theme-aware, and
			fully typed, with sensible defaults.
		</p>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">How to effectively use the shadcn/studio component variants?</h2>
		<p class="text-foreground/80">
			Before using the shadcn/studio component variants, make sure that you've installed shadcn in
			your project by following the official
			<a href="/docs/installation" target="_blank" rel="noopener noreferrer" class="underline">
				installation guide
			</a>.
		</p>
		<p class="text-foreground/80">
			Visit the
			<a href="/components" target="_blank" rel="noopener noreferrer" class="underline">
				Components page
			</a>
			to explore components variants.
		</p>
		<img />

		<h2 class="text-xl font-bold">Copy the Code</h2>
		<ul class="ml-4 list-disc space-y-2">
			<li>Choose your desired component (e.g., Accordion).</li>
			<li>
				Hover over the component variant and click the <strong>Code</strong> button to view different
				files containing respective code.
			</li>
		</ul>
		<img />
		<ul class="ml-4 list-disc space-y-2">
			<li>Copy the code and paste it into your project where needed.</li>
		</ul>
		<img />

		<h2 class="text-xl font-bold">Using Shadcn CLI</h2>
		<p class="text-foreground/80">
			shadcn/studio uses shadcn CLI, offering an easy way to install our components.
		</p>
		<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			<CircleAlertIcon />
			<Alert.Description class="inline text-sky-600/80 dark:text-sky-400/80">
				For detailed CLI setup and usage instructions, check out the
				<a
					href={gettingStartedPages.find((p) => p.slug === 'how-to-use-shadcn-cli')?.href}
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-sky-600 dark:hover:text-sky-400"
				>
					CLI documentation
				</a>.
			</Alert.Description>
		</Alert.Root>
		<ul class="ml-4 list-disc space-y-2">
			<li>Copy the CLI command by clicking the copy icon.</li>
		</ul>
		<img />
		<ul class="ml-4 list-disc space-y-2">
			<li>Run the copied command in your terminal in the root of your project.</li>
		</ul>

		<h2 class="text-xl font-bold">Using Copy Prompt Functionality</h2>
		<p class="text-foreground/80">
			The <strong>Copy Prompt</strong> feature in shadcn/studio allows you to quickly copy generate AI-optimized
			prompts for effortless integration of components into your project. Hover over the component variant
			and click the Copy Prompt button on any component section. Paste the copied prompt into your preferred
			IDE like VS Code, Cursor, or Windsurf and append custom instructions such as desired layout, placement
			context, or target framework conversions. Let the AI editor do the rest.
		</p>
		<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			<CircleAlertIcon />
			<Alert.Description class="inline text-sky-600/80 dark:text-sky-400/80">
				For the detailed understanding of the copy prompt, refer to the
				<a
					href={gettingStartedPages.find((p) => p.slug === 'copy-prompt')?.href}
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-sky-600 dark:hover:text-sky-400"
				>
					Copy Prompt
				</a>
				documentation.
			</Alert.Description>
		</Alert.Root>
		<img />
	</div>
</div>
