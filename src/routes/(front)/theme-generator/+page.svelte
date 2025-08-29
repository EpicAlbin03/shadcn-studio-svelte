<script lang="ts">
	import { PlusIcon, Sparkles } from '@lucide/svelte';
	// import * as AccordionPrimitive from '@radix-ui/react-accordion'
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Accordion, AccordionContent, AccordionItem } from '$lib/components/ui/accordion';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	// import CardsDemo from '$lib/components/examples/cards'
	// import MailPage from '$lib/components/examples/mail'
	// import DashboardPage from '$lib/components/examples/dashboard'
	// import MusicPage from '$lib/components/examples/music'
	// import V4Page from '$lib/components/examples/v4'
	import { cn } from '$lib/utils';
	import { features } from '$lib/assets/data/features';
	import { roadmap } from '$lib/assets/data/roadmap';
	import { faqs } from '$lib/assets/data/faqs';
</script>

<svelte:head>
	<title>Shadcn Theme Generator</title>
	<meta
		name="description"
		content="Preview your theme changes across different components and layouts."
	/>
	<!-- <link rel="canonical" href="https://shadcnstudio.com/theme-generator" /> -->

	<!-- Open Graph -->
	<!-- <meta property="og:title" content="Shadcn Theme Generator" />
<meta property="og:description" content="Preview your theme changes across different components and layouts." />
<meta property="og:url" content="https://shadcnstudio.com/theme-generator" />
<meta property="og:image" content="https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast" /> -->

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Shadcn Theme Generator" />
	<meta
		name="twitter:description"
		content="Preview your theme changes across different components and layouts."
	/>
	<!-- <meta name="twitter:image" content="https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png" /> -->
</svelte:head>

<div class="p-4 sm:p-8">
	<section class="pb-12 sm:pb-20">
		<div class="mb-12 flex flex-col items-center justify-center gap-4">
			<Badge variant="outline" class="rounded-full px-3 py-1.5 text-sm shadow-md">
				<Sparkles class="size-4" />
				Visual Theme Generator
			</Badge>
			<h1 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">
				Shadcn Theme Generator
			</h1>
			<p class="max-w-[800px] text-center text-muted-foreground">
				Preview your theme changes across different components and layouts.
			</p>
		</div>
		<Tabs value="examples" class="h-full w-full gap-6">
			<TabsList class="w-full">
				<TabsTrigger value="examples" class="cursor-pointer">Examples</TabsTrigger>
				<TabsTrigger value="mail" class="cursor-pointer">Mail</TabsTrigger>
				<TabsTrigger value="dashboard" class="cursor-pointer">Dashboard</TabsTrigger>
				<TabsTrigger value="music" class="cursor-pointer">Music</TabsTrigger>
				<TabsTrigger value="v4" class="cursor-pointer">Components</TabsTrigger>
			</TabsList>

			<!-- <TabsContent value='examples'>
            <CardsDemo />
          </TabsContent>

          <TabsContent value='mail'>
            <MailPage />
          </TabsContent>

          <TabsContent value='dashboard'>
            <DashboardPage />
          </TabsContent>

          <TabsContent value='music'>
            <MusicPage />
          </TabsContent>

          <TabsContent value='v4' class='rounded-lg border'>
            <ScrollArea class='h-[800px]'>
              <V4Page />
            </ScrollArea>
          </TabsContent> -->
		</Tabs>
	</section>
	<section class="py-12 sm:py-20">
		<div class="mb-12 flex flex-col items-center justify-center gap-4">
			<Badge variant="outline" class="rounded-full px-3 py-1.5 text-sm shadow-md">
				<Sparkles class="size-4" />
				Features
			</Badge>
			<h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">
				Design Your Perfect UI with Ease
			</h2>
			<p class="max-w-[800px] text-center text-muted-foreground">
				Transform your shadcn components in real time—customize, save, and ship stunning interfaces
				faster than ever.
			</p>
		</div>
		<div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card class="group gap-0">
					<CardHeader class="pb-3">
						{@render CardDecorator(feature.icon)}
						<h3 class="mt-6 text-xl font-semibold">{feature.title}</h3>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">{feature.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>
	<section id="roadmap" class="py-12 sm:py-20">
		<div class="mb-12 flex flex-col items-center justify-center gap-4">
			<Badge variant="outline" class="rounded-full px-3 py-1.5 text-sm shadow-md">
				<Sparkles class="size-4" />
				Roadmap
			</Badge>
			<h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">
				What&apos;s Coming Next
			</h2>
			<p class="max-w-[800px] text-center text-muted-foreground">
				Discover the latest updates and features we&apos;re working on to enhance your experience.
			</p>
		</div>
		<div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each roadmap as item}
				<Card class="group gap-0">
					<CardContent class="relative">
						<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
							<item.icon class="size-6" aria-hidden />
						</div>
						<h3 class="mb-2 text-xl font-semibold">{item.title}</h3>
						<p class="text-sm text-muted-foreground">{item.description}</p>
						<Badge
							variant={item.status === 'In Progress' ? 'outline' : 'secondary'}
							class={cn('absolute end-6 top-0 shadow')}
						>
							{item.status}
						</Badge>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>
	<section class="py-12 sm:py-20">
		<div class="mb-12 flex flex-col items-center justify-center gap-4">
			<Badge variant="outline" class="rounded-full px-3 py-1.5 text-sm shadow-md">
				<Sparkles class="size-4" />
				FAQ
			</Badge>
			<h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">
				Frequently Asked Questions
			</h2>
			<p class="max-w-[800px] text-center text-muted-foreground">
				Find answers to common questions about shadcn/studio.
			</p>
		</div>
		<div class="mx-auto grid w-full max-w-6xl gap-x-10 md:grid-cols-2">
			<!-- <Accordion type='single' collapsible class='w-full'>
						{#each faqs.slice(4) as { question, answer }, index (question)}
              <AccordionItem value={`question-${index}`}>
                <AccordionPrimitive.Header class='flex'>
                  <AccordionPrimitive.Trigger
                    class={cn(
                      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                      'text-start text-lg'
                    )}
                  >
                    {question}
                    <PlusIcon class='text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200' />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent class='text-muted-foreground'>{answer}</AccordionContent>
              </AccordionItem>
							{/each}
          </Accordion>
          <Accordion type='single' collapsible class='w-full'>
						{#each faqs.slice(4) as { question, answer }, index (question)}
						<AccordionItem value={`question-${index + 5}`}>
							<AccordionPrimitive.Header class='flex'>
								<AccordionPrimitive.Trigger
									class={cn(
										'flex flex-1 items-center justify-between py-4 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
										'text-start text-lg'
									)}
								>
									{question}
									<PlusIcon class='text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200' />
								</AccordionPrimitive.Trigger>
							</AccordionPrimitive.Header>
							<AccordionContent class='text-muted-foreground'>{answer}</AccordionContent>
						</AccordionItem>
						{/each}
          </Accordion> -->
		</div>
	</section>
</div>

{#snippet CardDecorator(Icon: LucideIcon)}
	<div
		class="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
	>
		<div
			aria-hidden="true"
			class="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
		></div>
		<div
			aria-hidden="true"
			class="absolute inset-0 bg-radial from-transparent to-background to-75%"
		></div>
		<div
			class="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-background"
		>
			<Icon class="size-6" aria-hidden="true" />
		</div>
	</div>
{/snippet}
