<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { type Icon as IconType } from '@lucide/svelte';

	type ContactInfo = {
		title: string;
		icon: typeof IconType;
		description: string;
	}[];

	type Props = { contactInfo: ContactInfo };

	let { contactInfo }: Props = $props();
</script>

<section class="bg-muted py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">Contact Us</h2>
			<span class="absolute top-9 left-0 h-px w-full bg-primary"></span>
		</div>

		<div class="grid items-center gap-12 lg:grid-cols-2">
			<img
				src="/blocks/contact-us.webp"
				alt="Contact illustration"
				class="size-full rounded-md object-cover max-lg:max-h-70"
			/>

			<div>
				<h3 class="mb-6 text-2xl font-semibold">Happy to help you!</h3>
				<p class="mb-10 text-lg font-medium text-muted-foreground">
					shadcn/studio gives you the blocks and components you need to create a truly professional
					website, landing page or admin panel for your SaaS and gives the blocks.
				</p>

				<div class="grid gap-6 sm:grid-cols-2">
					{#each contactInfo as info}
						{@const Icon = info.icon}
						<Card.Root class="border-none shadow-none">
							<Card.Content class="flex flex-col items-center gap-4 text-center">
								<Avatar.Root class="size-9 border">
									<Avatar.Fallback class="bg-transparent [&>svg]:size-5">
										<Icon />
									</Avatar.Fallback>
								</Avatar.Root>
								<div class="space-y-3">
									<h4 class="text-lg font-semibold">{info.title}</h4>
									<div class="text-base font-medium text-muted-foreground">
										{#each info.description.split('\n') as line}
											<p>{line}</p>
										{/each}
									</div>
								</div>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
