<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import * as Accordion from '$lib/components/ui/accordion';
	import { introFaqs } from '$lib/assets/data/faqs';
	import MetaData from '$lib/components/MetaData.svelte';
	import {
		DocPageHeader,
		DocSection,
		DocHeading,
		DocParagraph,
		DocList
	} from '$lib/components/docs';

	const title = 'Introduction';
	const description =
		'An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.';
</script>

<MetaData {title} {description} />

<div class="flex flex-1 flex-col space-y-6 p-4 sm:space-y-10 sm:p-8">
	<DocPageHeader {title} {description} />

	<DocSection>
		<DocHeading>What is shadcn/studio?</DocHeading>
		<DocParagraph>
			<strong> This isn't a traditional component library or a replacement for Shadcn </strong>
			. Instead, it's a unique collection offers customizable variants of components, blocks, and templates.
			Preview, customize, and copy-paste them into your apps with ease.
		</DocParagraph>
		<DocParagraph>
			Building on the solid foundation of the Shadcn components & blocks, we've enhanced it with
			custom-designed components & blocks to give you a head start. This allows you to craft,
			customize, and ship your projects faster and more efficiently.
		</DocParagraph>
	</DocSection>

	<DocSection>
		<DocHeading>Not a Standard Library, but a Distribution of Components</DocHeading>
		<DocParagraph>
			Following the philosophy of Shadcn, shadcn/studio isn't a conventional "install-from-NPM"
			library. Rather, it's an open-source distribution of components designed for maximum
			adaptability. You can copy the code, modify styles, adjust logic, or integrate it with other
			tools—free from the limitations of typical libraries. This &quot;open code&quot; model
			empowers you to customize with confidence and creativity.
		</DocParagraph>
	</DocSection>

	<DocSection>
		<DocHeading>Why Should I use shadcn/studio?</DocHeading>
		<DocParagraph>
			shadcn/ui aims to provide core components with a unique distribution system, allowing
			developers to copy and paste reusable, customizable UI elements directly into their codebase.
		</DocParagraph>

		<DocParagraph>
			While this approach offers flexibility and control, it comes with some limitations: a lack of
			diverse component variants examples, limited theme customization options, and limited
			pre-built blocks. Additionally, its extensive customization options, though powerful, can
			sometimes feel overwhelming, especially for those seeking a more guided or streamlined
			experience.
		</DocParagraph>
	</DocSection>

	<DocSection>
		<DocHeading level={3}>This is where shadcn/studio shines ✨</DocHeading>
		<DocParagraph>
			An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired
			with a powerful theme generator to craft, customize, and ship faster 🚀. It provides a robust
			toolkit for building stunning, interactive user interfaces with ease.
		</DocParagraph>
		<DocList class="lg:max-w-7/10">
			<li>
				<strong>Open-source:</strong> Dive into a growing, community-driven collection of copy-and-paste
				components, blocks, and templates.
			</li>
			<li>
				<strong>Component & Blocks variants:</strong> Access a diverse, collection of customizable shadcn
				component and block variants to quickly build and style your UI with ease.
			</li>
			<li>
				<strong>Animated variants with Motion:</strong> Add smooth, modern animations to your components,
				enhancing user experiences with minimal effort.
			</li>
			<li>
				<strong>Powerful theme generator:</strong> Tailor your UI effortlessly with real-time previews,
				ensuring consistent, branded designs delivered faster.
			</li>
		</DocList>
	</DocSection>

	<DocSection>
		<DocHeading>Frequently Asked Questions</DocHeading>
		<Accordion.Root type="single" class="w-full">
			{#each introFaqs as { question, answer }, index (question)}
				<Accordion.Item value="question-{index}">
					<AccordionPrimitive.Header class="flex">
						<AccordionPrimitive.Trigger
							class="flex flex-1 items-center justify-between py-3 text-start font-medium text-foreground/80 transition-all hover:underline [&[data-state=open]>svg]:rotate-45"
						>
							{question}
							<PlusIcon
								class="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
							/>
						</AccordionPrimitive.Trigger>
					</AccordionPrimitive.Header>
					<Accordion.Content class="text-muted-foreground">{answer}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</DocSection>
</div>
