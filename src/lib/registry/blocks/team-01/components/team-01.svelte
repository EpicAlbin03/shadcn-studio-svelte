<script lang="ts">
	import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	type TeamMember = {
		image: string;
		alt: string;
		name: string;
		role: string;
		description: string;
		socialLinks: {
			facebook: string;
			twitter: string;
			github: string;
			instagram: string;
		};
	}[];

	type Props = { teamMembers: TeamMember };

	let { teamMembers }: Props = $props();
</script>

<section class="py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center sm:mb-16 lg:mb-24">
			<h2 class="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
				Get to Know Our Amazing Team
			</h2>
			<p class="text-xl text-muted-foreground">
				Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 xl:grid-cols-4">
			{#each teamMembers as member}
				<Card.Root
					class="overflow-hidden py-0 shadow-none transition-colors duration-300 hover:border-primary"
				>
					<Card.Content class="px-0">
						<div class="bg-muted pt-10">
							<img src={member.image} alt={member.alt} class="mx-auto h-60 w-auto" />
						</div>
						<div class="space-y-3 p-6">
							<Card.Title class="text-lg">{member.name}</Card.Title>
							<Separator />
							<div class="text-muted-foreground">
								<p class="mb-1 font-medium">{member.role}</p>
								<p>{member.description}</p>
							</div>
							<div class="flex gap-3">
								<a href={member.socialLinks.facebook}>
									<FacebookIcon class="size-5" />
								</a>
								<a href={member.socialLinks.twitter}>
									<TwitterIcon class="size-5" />
								</a>
								<a href={member.socialLinks.github}>
									<GithubIcon class="size-5" />
								</a>
								<a href={member.socialLinks.instagram}>
									<InstagramIcon class="size-5" />
								</a>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
