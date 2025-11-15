<script lang="ts">
	import { ChevronRightIcon, PanelsTopLeftIcon, PlusIcon, UserIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';

	const users = [
		{
			image: '/avatars/03.webp',
			fallback: 'HL',
			name: 'Howard Lloyd',
			bio: 'Senior Product Manager with 8+ years of experience in SaaS product development and team leadership.',
			projects: 5,
			followers: 120
		},
		{
			image: '/avatars/06.webp',
			fallback: 'OS',
			name: 'Olivia Sparks',
			bio: 'Full-stack Software Engineer specializing in React, Node.js, and cloud architecture solutions.',
			projects: 3,
			followers: 95,
			followed: true
		},
		{
			image: '/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards',
			bio: 'Creative UI/UX Designer with expertise in user research, wireframing, and accessible interface design.',
			projects: 4,
			followers: 80
		}
	];
</script>

<ul class="flex w-full max-w-[350px] flex-col gap-4">
	{#each users as user (user.name)}
		<Collapsible.Root>
			{#snippet child({ props })}
				<li {...props} class="flex flex-col gap-2">
					<Collapsible.Trigger class="flex w-full items-center justify-between gap-4">
						<div class="flex items-center gap-2">
							<Avatar.Root>
								<Avatar.Image src={user.image} alt={user.fallback} />
								<Avatar.Fallback>{user.fallback}</Avatar.Fallback>
							</Avatar.Root>
							<span class="font-medium">{user.name}</span>
						</div>
						<ChevronRightIcon class="size-4 transition-transform [[data-state=open]_&]:rotate-90" />
					</Collapsible.Trigger>
					<Collapsible.Content>
						<div class="flex flex-col gap-2">
							<p class="text-sm text-muted-foreground">{user.bio}</p>
							<div class="flex items-center justify-between gap-2">
								<div class="flex items-center gap-4">
									<span class="flex items-center gap-2">
										<UserIcon class="size-4" />
										<span class="text-sm">{user.followers}</span>
									</span>
									<span class="flex items-center gap-2">
										<PanelsTopLeftIcon class="size-4" />
										<span class="text-sm">{user.projects}</span>
									</span>
								</div>
								{#if user.followed}
									<Button variant="outline" class="h-7 rounded-full px-3 py-1 text-xs">
										Following
									</Button>
								{:else}
									<Button class="h-7 rounded-full px-3 py-1 text-xs">
										Follow
										<PlusIcon />
									</Button>
								{/if}
							</div>
						</div>
					</Collapsible.Content>
				</li>
			{/snippet}
		</Collapsible.Root>
	{/each}
</ul>
