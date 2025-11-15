<script lang="ts">
	import { UserPlusIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const friends = [
		{
			src: '/avatars/01.webp',
			fallback: 'CP',
			name: 'Cristofer Press',
			mail: 'cristoferpress@gmail.com'
		},
		{
			src: '/avatars/02.webp',
			fallback: 'Ck',
			name: 'Carla Korsgaard',
			mail: 'carlakorsgaard@gmail.com'
		},
		{
			src: '/avatars/03.webp',
			fallback: 'HB',
			name: 'Hanna Baptista',
			mail: 'hannabaptista@gmail.com'
		},
		{
			src: '/avatars/04.webp',
			fallback: 'ZD',
			name: 'Zord Dorwart',
			mail: 'zorddorwart@gmail.com'
		},
		{
			src: '/avatars/05.webp',
			fallback: 'CB',
			name: 'Corey Bergson',
			mail: 'coreybergson@gmail.com'
		},
		{
			src: '/avatars/06.webp',
			fallback: 'JL',
			name: 'James Lubin',
			mail: 'jameslubin@gmail.com'
		}
	];
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Invite</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-lg">
		<Dialog.Header class="text-center">
			<Dialog.Title class="text-xl">Invite new members</Dialog.Title>
		</Dialog.Header>
		<form class="flex gap-4 max-sm:flex-col">
			<div class="grid gap-3">
				<Label for="email">Email</Label>
				<Input type="email" id="email" name="email" placeholder="example@gmail.com" required />
			</div>
			<Button type="submit" class="sm:self-end">Send Invite</Button>
		</form>
		<p class="mt-2">Invite Friends</p>
		<ul class="space-y-4">
			{#each friends as friend}
				<li class="flex items-center justify-between gap-3">
					<div class="flex items-center gap-3 max-[420px]:w-50">
						<Avatar.Root class="size-10">
							<Avatar.Image src={friend.src} alt={friend.name} />
							<Avatar.Fallback class="text-xs">{friend.fallback}</Avatar.Fallback>
						</Avatar.Root>
						<div class="flex flex-1 flex-col overflow-hidden">
							<span>{friend.name}</span>
							<span class="truncate text-sm text-muted-foreground">{friend.mail}</span>
						</div>
					</div>
					<Button
						size="sm"
						class="bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400"
					>
						<UserPlusIcon />
						Invite
					</Button>
				</li>
			{/each}
		</ul>
	</Dialog.Content>
</Dialog.Root>
