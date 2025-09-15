<script lang="ts">
	import { PlusIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	const avatars = [
		{
			src: '/avatars/03.webp',
			fallback: 'OS',
			name: 'Olivia Sparks'
		},
		{
			src: '/avatars/06.webp',
			fallback: 'HL',
			name: 'Howard Lloyd'
		},
		{
			src: '/avatars/05.webp',
			fallback: 'HR',
			name: 'Hallie Richards'
		},
		{
			src: '/avatars/16.webp',
			fallback: 'JW',
			name: 'Jenny Wilson'
		},
		{
			src: '/avatars/01.webp',
			fallback: 'DR',
			name: 'Darlene Robertson'
		},
		{
			src: '/avatars/02.webp',
			fallback: 'LA',
			name: 'Leslie Alexander'
		}
	];
</script>

<div class="flex -space-x-2">
	{#each avatars.slice(0, 3) as avatar}
		<Avatar.Root class="ring-2 ring-background">
			<Avatar.Image src={avatar.src} alt={avatar.name} />
			<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
		</Avatar.Root>
	{/each}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<button
					{...props}
					class="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-muted ring-2 ring-background has-focus-visible:ring-ring/50"
				>
					<PlusIcon class="size-4" />
					<span class="sr-only">Add</span>
				</button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			{#each avatars.slice(3) as avatar}
				<DropdownMenu.Item>
					<Avatar.Root>
						<Avatar.Image src={avatar.src} alt={avatar.name} />
						<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
					</Avatar.Root>
					{avatar.name}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
