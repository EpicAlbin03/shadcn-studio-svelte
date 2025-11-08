<script lang="ts">
	import { ArrowRightIcon, type Icon as IconType } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	type Features = {
		icon: typeof IconType;
		title: string;
		description: string;
		cardBorderColor: string;
		avatarTextColor: string;
		avatarBgColor: string;
	}[];

	type Props = {
		featuresList: Features;
	};

	let { featuresList }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 space-y-4 sm:mb-16 lg:mb-24">
			<h2 class="text-2xl font-semibold md:text-3xl lg:text-4xl">
				Discover the Exclusive Perks Today
			</h2>
			<p class="text-xl text-muted-foreground">
				Explore key features designed to enhance your shopping experience with intuitive navigation,
				robust security, and seamless functionality.
			</p>
			<Button
				variant="outline"
				class="rounded-lg text-base shadow-none has-[>svg]:px-6"
				size="lg"
				href="#"
			>
				See all features
				<ArrowRightIcon />
			</Button>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuresList as features}
				<Card.Root
					class={cn('shadow-none transition-colors duration-300', features.cardBorderColor)}
				>
					<Card.Content>
						<Avatar.Root class={cn('mb-6 size-10 rounded-md', features.avatarTextColor)}>
							<Avatar.Fallback class={cn('rounded-md [&>svg]:size-6', features.avatarBgColor)}>
								{@const Icon = features.icon}
								<Icon />
							</Avatar.Fallback>
						</Avatar.Root>
						<h6 class="mb-2 text-lg font-semibold">{features.title}</h6>
						<p class="text-muted-foreground">{features.description}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
