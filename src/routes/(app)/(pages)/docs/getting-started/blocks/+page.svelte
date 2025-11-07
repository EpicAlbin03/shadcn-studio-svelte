<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { CircleAlertIcon, PlusIcon } from '@lucide/svelte';
	import { gettingStartedPages } from '$lib/utils/pages';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	const title = 'shadcn/studio Blocks Documentation';
	const description =
		'Build responsive layouts with shadcn/studio Blocks for rapid, professional web development.';
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
		<h2 class="text-2xl font-bold">What does the Block mean?</h2>
		<p class="text-foreground/80">
			A Block refers to a segment of pre-designed code, crafted by professional designers and
			developers to provide reusable components or structures within a project. This modular
			approach helps streamline the development process, ensuring consistency and efficiency.
		</p>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">How to effectively use the blocks?</h2>
		<p class="text-foreground/80">
			Before using the shadcn/studio Blocks, make sure that you've installed shadcn in your project
			by following the official
			<a
				href="https://shadcn-svelte.com/docs/installation"
				target="_blank"
				rel="noopener noreferrer"
				class="underline"
			>
				installation guide
			</a>.
		</p>
		<p class="text-foreground/80">
			Visit the
			<a href="/blocks" target="_blank" rel="noopener noreferrer" class="underline">
				Blocks page
			</a>
			to explore categories like Marketing, Dashboards, Bento, Datatable, and more.
		</p>
		<img />

		<h2 class="text-xl font-bold">Copy the Code</h2>
		<ul class="ml-4 list-disc space-y-2">
			<li>Choose your desired block (e.g., About us Section).</li>
			<li>
				Click the <strong>Code</strong> tab to view different files containing respective code.
				<img />
			</li>
			<li>
				Copy the code and paste it into your project, following the folder structure shown on the
				left in the above image.
			</li>
		</ul>

		<h2 class="text-xl font-bold">Using Shadcn CLI</h2>
		<p class="text-foreground/80">
			The Shadcn CLI is the fastest way to add blocks to your project. It handles everything
			automatically:
		</p>
		<ul class="ml-4 list-disc space-y-2 text-foreground/80">
			<li>Downloads the block code</li>
			<li>Installs required dependencies</li>
			<li>Sets up proper file structure</li>
			<li>Configures all necessary imports</li>
		</ul>
		<Alert.Root class="border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
			<CircleAlertIcon />
			<Alert.Description class="inline text-sky-600/80 dark:text-sky-400/80">
				Need help with Shadcn CLI? Check the
				<a
					href={gettingStartedPages.find((p) => p.slug === 'how-to-use-shadcn-cli')?.href}
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-sky-600 dark:hover:text-sky-400"
				>
					CLI documentation
				</a>
				for step-by-step setup.
			</Alert.Description>
		</Alert.Root>

		<h2 class="text-xl font-bold">Using Copy Prompt</h2>
		<p class="text-foreground/80">
			Let AI do the heavy lifting! Perfect for quick iterations and smart customizations.
		</p>
		<ul class="ml-4 list-disc space-y-2 text-foreground/80">
			<li>Click Copy Prompt on any block</li>
			<li>Paste into your AI editor (VS Code, Cursor, Windsurf)</li>
			<li>Add custom instructions like: "Add this block below the hero section."</li>
			<li>Let AI generate the perfect code for your needs</li>
		</ul>
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
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">How to customize the blocks?</h2>
		<p class="text-foreground/80">
			Customizing blocks is easy with shadcn/ui and TailwindCSS. Here's how you can do it:
		</p>

		<h3 class="text-lg font-semibold">1. Using Shadcn components:</h3>
		<p class="text-foreground/80">
			Shadcn offers predefined props for common UI elements like size, variant, many more.
		</p>
		<p class="text-foreground/80">For example:</p>
		<p class="text-foreground/80">
			Change Button size: You can change button size using props like
		</p>
		<CodeBlock
			code="<Button>Normal Button</Button>

To

<Button size='lg'>Large Button</Button>"
			lang="svelte"
		/>

		<h3 class="text-lg font-semibold">2. Using TailwindCSS:</h3>
		<p class="text-foreground/80">
			TailwindCSS provides utility classes to easily adjust the spacing, padding, margin, and other
			layout properties.
		</p>
		<p class="text-foreground/80">For example:</p>
		<ul class="ml-4 list-disc space-y-2 text-foreground/80">
			<li>
				<strong>Padding:</strong> You can adjust padding using classes like
				<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">p-2</code>,
				<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">p-4</code>
				(increasing the padding).
				<CodeBlock
					code={`<div class="p-4">
	<!-- Your content goes here -->
</div>`}
					lang="svelte"
				/>
			</li>
			<li>
				<strong>Margin:</strong> Similarly, you can adjust margin using classes like
				<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">m-2</code>,
				<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">m-4</code>
				(increasing the margin).
				<CodeBlock
					code={`<div class="m-4">
	<!-- Your content goes here -->
</div>`}
					lang="svelte"
				/>
			</li>
			<li>
				<strong>Gap:</strong> You can also use the
				<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">gap</code> class to adjust
				the space between elements within a flex or grid layout.
			</li>
		</ul>

		<h3 class="text-lg font-semibold">3. Update Icons</h3>
		<p class="text-foreground/80">
			Blocks uses Lucide Icons from
			<a
				href="https://lucide.dev/icons/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline">@lucide/svelte</a
			>, but you can also use any other icon of your choice.
		</p>
		<p class="text-foreground/80">
			With these simple steps, you can quickly adjust and style your blocks using both shadcn/ui and
			TailwindCSS classes without needing to write extra CSS.
		</p>
	</div>

	<div class="flex flex-col items-start space-y-6">
		<h2 class="text-2xl font-bold">How to Remove Animations from Blocks</h2>
		<p class="text-foreground/80">
			While our animations enhance the user experience, you might want to remove them to use only
			the UI elements or to implement your own custom animations. Follow these guidelines to modify
			animation behavior in your blocks:
		</p>
		<Alert.Root
			class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
		>
			<CircleAlertIcon />
			<Alert.Description class="text-amber-600/80 dark:text-amber-400/80">
				Some animations are tightly integrated with the block functionality. The methods below will
				work for most standalone animations, but certain dynamic elements may require additional
				adjustments.
			</Alert.Description>
		</Alert.Root>

		<h2 class="text-xl font-bold">Method 1: Remove Standalone Animation Components</h2>
		<p class="text-foreground/80">
			For many blocks, you can simply remove the animated component's import and usage. Here are the
			most common standalone animations you can remove without affecting functionality:
		</p>
		<ol class="ml-4 list-decimal space-y-2 text-foreground/80">
			<li>
				<strong>Background Stars</strong>
				<p class="text-foreground/80">
					Remove the <code class="rounded-lg bg-code px-2 text-sm text-code-foreground"
						>StarsBackground</code
					> component import and all instances where it's used.
				</p>
				<img />
			</li>
			<li>
				<strong>Border Beam</strong>
				<p class="text-foreground/80">
					Remove the <code class="rounded-lg bg-code px-2 text-sm text-code-foreground"
						>BorderBeam</code
					> component import and usage from your block.
				</p>
				<img />
			</li>
			<li>
				<strong>Cursor Effects</strong>
				<p class="text-foreground/80">
					Remove these cursor-related components: <code
						class="rounded-lg bg-code px-2 text-sm text-code-foreground">CursorProvider</code
					>,
					<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">Cursor</code>, and
					<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">CursorFollow</code>
				</p>
				<img />
			</li>
			<li>
				<strong>Glow Effect</strong>
				<p class="text-foreground/80">
					Remove the <code class="rounded-lg bg-code px-2 text-sm text-code-foreground"
						>GlowEffect</code
					> component import and usage for a cleaner interface without the glowing animation.
				</p>
				<img />
			</li>
		</ol>

		<h2 class="text-xl font-bold">Method 2: Replace with Static Alternatives</h2>
		<p class="text-foreground/80">
			For animations that are integrated with content display, replace the animated components with
			standard HTML or React components:
		</p>
		<ol class="ml-4 list-decimal space-y-2 text-foreground/80">
			<li>
				<strong>Number Ticker</strong>
				<p class="text-foreground/80">
					Replace the <code class="rounded-lg bg-code px-2 text-sm text-code-foreground"
						>NumberTicker</code
					>
					component with a simple
					<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">span</code> element to display
					static numbers.
				</p>
				<img />
				<p class="text-foreground/80">For example:</p>
				<CodeBlock
					code={`<NumberTicker startValue={0} value={plan.price} className='text-lg font-medium' />

To

<span className='text-lg font-medium'>{plan.price}</span>`}
					lang="svelte"
				/>
			</li>
			<li>
				<strong>Global Tooltip</strong>
				<p class="text-foreground/80">
					Replace components imported from <code
						class="rounded-lg bg-code px-2 text-sm text-code-foreground">/global-tooltip</code
					>
					with standard tooltip components from
					<code class="rounded-lg bg-code px-2 text-sm text-code-foreground">/tooltip</code>
				</p>
				<img />
			</li>
			<li>
				<strong>Motion Presets</strong>
				<p class="text-foreground/80">
					Replace animation wrappers like <code
						class="rounded-lg bg-code px-2 text-sm text-code-foreground">MotionPreset</code
					> with standard HTML elements.
				</p>
				<p class="text-foreground/80">For example:</p>
				<CodeBlock
					code={`<MotionPreset
  component='p'
  class='text-primary text-sm font-medium uppercase'
  fade
  blur
  slide={{ direction: 'down', offset: 50 }}
  transition={{ duration: 0.5 }}
>
  About us
</MotionPreset>

To

<p class='text-primary text-sm font-medium uppercase'>About us</p>`}
					lang="svelte"
				/>
				<br />
				<CodeBlock
					code={`<MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
  <Badge variant='outline' class='rounded-full text-sm font-normal'>
    Blog List
  </Badge>
</MotionPreset>

To

<div>
  <Badge variant='outline' class='rounded-full text-sm font-normal'>
    Blog List
  </Badge>
</div>`}
					lang="svelte"
				/>
			</li>
		</ol>
	</div>

	<div class="flex flex-col items-start space-y-3">
		<h2 class="text-2xl font-bold">Frequently Asked Questions (FAQs)</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="question-1">
				<AccordionPrimitive.Header class="flex">
					<AccordionPrimitive.Trigger
						class="flex flex-1 items-center justify-between py-3 text-start font-medium text-foreground/80 transition-all hover:underline [&[data-state=open]>svg]:rotate-45"
					>
						How can I change the theme?
						<PlusIcon
							class="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
						/>
					</AccordionPrimitive.Trigger>
				</AccordionPrimitive.Header>
				<Accordion.Content class="text-muted-foreground"
					>shadcn/studio offers a variety of pre-designed themes that allow you to effortlessly
					transform the appearance of your website. This time-saving feature removes the hassle of
					selecting color schemes, so you can focus on refining your site's structure and content
					while shadcn/studio takes care of the design.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="question-2">
				<AccordionPrimitive.Header class="flex">
					<AccordionPrimitive.Trigger
						class="flex flex-1 items-center justify-between py-3 text-start font-medium text-foreground/80 transition-all hover:underline [&[data-state=open]>svg]:rotate-45"
					>
						How can I create landing page/web page using blocks?
						<PlusIcon
							class="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
						/>
					</AccordionPrimitive.Trigger>
				</AccordionPrimitive.Header>
				<Accordion.Content class="text-muted-foreground"
					>shadcn/studio Pro blocks provide a wide selection of professionally designed blocks, each
					with a well-organized layout and structure. Simply select the blocks you need for your
					website and copy-paste them in sequence based on your requirements.</Accordion.Content
				>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</div>
