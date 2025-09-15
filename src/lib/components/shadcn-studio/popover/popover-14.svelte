<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover/index.js';

	const members = [
		{
			image: '/avatars/03.webp',
			fallback: 'HL',
			name: 'Howard Lloyd',
			designation: 'Product Manager'
		},
		{
			image: '/avatars/06.webp',
			fallback: 'OS',
			name: 'Olivia Sparks',
			designation: 'Software Engineer'
		},
		{
			image: '/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards',
			designation: 'UI/UX Designer'
		}
	];

	const id = $props.id();
</script>

<Popover>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Slide-in from bottom</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content
		class="w-80 duration-400 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-bottom-20 data-[state=open]:zoom-in-100"
	>
		<div class="grid gap-4">
			<div class="space-y-1">
				<div class="font-medium">Share to team members</div>
				<p class="text-sm text-muted-foreground">
					Give your team members access to this project and start collaborating in real time
				</p>
			</div>
			<div class="w-full space-y-1.5">
				<Label for={id} class="text-xs font-normal text-muted-foreground">Email address</Label>
				<div class="flex gap-2">
					<Input {id} type="email" placeholder="example@xyz.com" class="h-8" />
					<Button type="submit" size="sm">Share invite</Button>
				</div>
			</div>
			<div class="space-y-1.5">
				<Label class="text-xs font-normal text-muted-foreground">Team members</Label>
				<ul class="grid gap-2">
					{#each members as member, index}
						<li class="flex items-center gap-3">
							<Checkbox id={`member-${index + 1}`} />
							<Label for={`member-${index + 1}`} class="flex flex-1 items-center gap-2">
								<div class="flex flex-1 items-center gap-2">
									<Avatar.Root class="size-6">
										<Avatar.Image src={member.image} alt={member.name} />
										<Avatar.Fallback class="text-xs">{member.fallback}</Avatar.Fallback>
									</Avatar.Root>
									<span class="text-sm font-medium">{member.name}</span>
								</div>
								<span class="text-xs text-muted-foreground">{member.designation}</span>
							</Label>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
