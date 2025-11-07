<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { Button } from '$lib/components/ui/button';
	import { gettingStartedPages } from '$lib/utils/pages';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { CircleAlertIcon } from '@lucide/svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { PUBLIC_URL } from '$lib/config/site-config';

	const title = 'Copy Prompt';
	const description =
		'Learn how to use the Copy Prompt feature to copy AI-optimized prompts in one click for effortless integration of components and blocks into your project.';
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
		<h2 class="text-2xl font-bold">Setup</h2>
		<p class="text-foreground/80">
			Before utilizing the Copy Prompt, make sure that you've installed shadcn in your project by
			following the official <a
				href="https://shadcn-svelte.com/docs/installation"
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				installation guide
			</a>.
		</p>

		<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			<CircleAlertIcon />
			<Alert.Description class="inline text-sky-600/80 dark:text-sky-400/80">
				The copy prompt functionality works the same way in both the blocks and docs components.
			</Alert.Description>
		</Alert.Root>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">What is Copy Prompt?</h2>
		<p class="text-foreground/80">
			The <strong>Copy Prompt</strong> feature in shadcn/studio allows you to quickly copy AI-optimized
			prompts for effortless integration of components/blocks into your project. These prompts are specifically
			designed for use with AI tools such as GitHub Copilot, Cursor, Windsurf, and others, enabling fast
			and accurate implementation with the correct styling and configuration.
		</p>
		<p class="text-foreground/80">Each prompt includes:</p>
		<ol class="ml-4 list-decimal space-y-1 text-foreground/80">
			<li>Complete component structure with proper TSX syntax</li>
			<li>Essential Tailwind CSS utility classes and styling patterns</li>
			<li>Configuration options, states, and variants</li>
			<li>Import statements and dependencies</li>
			<li>Usage examples and implementation context</li>
		</ol>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">Why to Use Copy Prompt?</h2>
		<p class="text-foreground/80">
			The <strong>Copy Prompt</strong> streamlines development by offering:
		</p>
		<ul class="ml-4 list-disc space-y-1 text-foreground/80">
			<li><strong>Efficiency</strong>: Instantly copy pre-written instructions and code.</li>
			<li>
				<strong>Accuracy</strong>: Reduces manual errors by providing well-structured prompts.
			</li>
			<li>
				<strong>Productivity</strong>: Speeds up integration by eliminating ambiguity, especially
				when working with AI development tools.
			</li>
		</ul>
		<p class="text-foreground/80">
			This is particularly helpful when referencing documentation, building UI rapidly, or
			collaborating with AI coding assistants.
		</p>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">How to Use Copy Prompt?</h2>
		<p class="text-foreground/80">To leverage this feature:</p>
		<ol class="ml-4 list-decimal space-y-1 text-foreground/80">
			<li>
				Click Copy Prompt Button: <ul class="ml-4 list-disc space-y-1 text-foreground/80">
					<li>
						<strong>For components</strong>: Hover over the component and then click the
						<strong>Copy Prompt</strong>button.
						<img />
					</li>
					<li>
						<strong>For blocks</strong>: Click the
						<strong>Open in v0</strong>button located in top-right corner of the block section.
						<img />
					</li>
				</ul>
			</li>
			<li>
				Paste the copied prompt into your preferred AI tool (e.g. GitHub Copilot, Cursor, Windsurf,
				etc.).
			</li>
			<li>
				Append custom instructions such as desired layout or placement context. <br /><br /> Example
				additions: <br /><br />
				<CodeBlock
					code="<!-- Copied snippet from 'Copy Prompt' -->
Insert this code below the FAQ section in the respective file."
					lang="svelte"
				/>
				<br />
				<CodeBlock
					code="<!-- Copied snippet from 'Copy Prompt' -->
Use the accordion above and update the content related to 'Svelte usage'."
					lang="svelte"
				/>
			</li>
		</ol>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">Prompt Customization</h2>
		<ul class="ml-4 list-disc space-y-1 text-foreground/80">
			<li>Always review the generated code before implementing it in your project</li>
			<li>Customize color schemes and styling to match your design system</li>
			<li>Add specific business logic or data handling as needed</li>
		</ul>

		<h2 class="text-2xl font-bold">Integration Tips</h2>
		<ul class="ml-4 list-disc space-y-1 text-foreground/80">
			<li>Ensure all required dependencies are installed before implementation</li>
			<li>Check for naming conflicts with existing components</li>
			<li>Update import paths to match your project structure</li>
			<li>Consider accessibility requirements for your specific use case</li>
		</ul>

		<h2 class="text-2xl font-bold">Performance Considerations</h2>
		<ul class="ml-4 list-disc space-y-1 text-foreground/80">
			<li>Review generated code for unnecessary re-renders or heavy computations</li>
			<li>Optimize images and assets referenced in the components</li>
			<li>Consider lazy loading for complex components or blocks</li>
			<li>Implement proper error boundaries where appropriate</li>
		</ul>
	</div>
</div>
