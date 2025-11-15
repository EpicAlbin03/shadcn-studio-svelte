<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { gettingStartedPages } from '$lib/utils/pages';
	import {
		DocPageHeader,
		DocSection,
		DocHeading,
		DocParagraph,
		DocList,
		DocCodeBlock,
		DocAlert
	} from '$lib/components/docs';

	const title = 'How to use Shadcn CLI';
	const description =
		'Learn how to use Shadcn CLI to install our components, blocks, and themes into your project seamlessly.';
</script>

<MetaData {title} {description} />

<div class="flex flex-1 flex-col space-y-6 p-4 sm:space-y-10 sm:p-8">
	<DocPageHeader {title} {description} />

	<DocSection>
		<DocHeading heading="Overview" />
		<DocParagraph>
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
		</DocParagraph>
	</DocSection>

	<DocSection>
		<DocHeading heading="Setup" />
		<DocParagraph>
			Before using the shadcn/studio CLI, make sure that you've installed shadcn in your project by
			following the official
			<a
				href="https://shadcn-svelte.com/docs/installation"
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				installation guide
			</a>.
		</DocParagraph>
	</DocSection>

	<DocSection spacing="medium">
		<DocHeading heading="Installation" />
		<DocParagraph>
			You can install components, blocks, and themes using the CLI commands below.
		</DocParagraph>

		<DocHeading heading="Installing Components" level={3} />
		<DocParagraph>
			Components are enhanced versions of shadcn/ui components, with added functionality and
			styling. You can refer to the <a
				href={gettingStartedPages.find((p) => p.slug === 'components')?.href}
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				components documentation
			</a> for more information.
		</DocParagraph>
		<DocCodeBlock name="button-01" />

		<DocHeading heading="Installing Blocks" level={3} />
		<DocParagraph>
			You can refer to the <a
				href={gettingStartedPages.find((p) => p.slug === 'blocks')?.href}
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				blocks documentation
			</a> for more information.
		</DocParagraph>
		<DocCodeBlock name="hero-01" />

		<DocHeading heading="Installing Themes" level={3} />
		<DocAlert variant="info">
			Only the pre-built themes are available for installation via the CLI.
		</DocAlert>

		<DocAlert variant="warning">
			You need to manually install the font dependencies and add them to your layout file, as they
			are not included in the themes. You can find the fonts from <a
				href="https://fonts.google.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline hover:text-amber-600 dark:hover:text-amber-400"
			>
				Google Fonts
			</a>
		</DocAlert>

		<DocAlert variant="warning">
			Make sure you have <strong> @theme inline </strong>,
			<strong> :root </strong>, and
			<strong> .dark </strong> already specified in
			<strong> app.css </strong> before adding a theme or it won't add those styles.
		</DocAlert>

		<DocCodeBlock name="themes/art-deco" />
	</DocSection>

	<DocSection spacing="medium">
		<DocHeading heading="Advanced Usage" />

		<DocHeading heading="Installing Multiple Items" level={3} />
		<DocParagraph>You can install multiple items at once by listing them:</DocParagraph>
		<DocCodeBlock name={['button-01', 'hero-01', 'themes/art-deco']} />

		<DocHeading heading="Force Overwriting Existing Files" level={3} />
		<DocParagraph>If you want to overwrite existing files during installation:</DocParagraph>
		<DocCodeBlock name="button-01" overwrite />
	</DocSection>

	<DocSection spacing="medium">
		<DocHeading heading="Troubleshooting" />

		<DocHeading heading="Block/Component/Theme Not Found" level={3} />
		<DocAlert variant="error" title="Error: Block/Component/Theme not found">
			"The requested block/component/theme could not be found. Please check the
			block/component/theme name and try again."
		</DocAlert>
		<div>
			<p class="mb-2 font-medium">Solution:</p>
			<DocList class="space-y-1 text-sm text-muted-foreground">
				<li>Verify the spelling of the block/component/theme name.</li>
				<li>Ensure that the block/component/theme exists in the registry.</li>
			</DocList>
		</div>
	</DocSection>

	<DocSection spacing="medium">
		<DocHeading heading="Best Practices" />

		<DocList type="ol">
			<li>
				<strong>Regularly update</strong> your Shadcn CLI to stay up to date with new features.
			</li>
			<li>
				<strong>Customize components</strong> after installation to ensure they match your project's
				design requirements.
			</li>
		</DocList>
	</DocSection>
</div>
