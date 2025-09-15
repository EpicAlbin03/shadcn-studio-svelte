<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

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
		}
	];
</script>

<Dialog>
	<form>
		<DialogTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Refer & Earn</Button>
			{/snippet}
		</DialogTrigger>
		<DialogContent class="sm:max-w-xl">
			<DialogHeader>
				<DialogTitle class="text-xl">Refers & Earn AI Credits</DialogTitle>
				<DialogDescription class="text-base">
					Get 5 AI credits per successful referral sign up. Use AI credits to get AskFred insights,
					custom meetings notes, automated soundbites etc.
				</DialogDescription>
			</DialogHeader>
			<form class="flex flex-col gap-4 pt-4">
				<div class="grid grow-1 gap-3">
					<Label for="email">Refer by email</Label>
					<Input
						type="text"
						id="email"
						name="email"
						placeholder="Emails, separated by comas or tab"
						required
					/>
				</div>
				<div class="flex items-center gap-3">
					<Checkbox id="terms" />
					<Label for="terms">Refer 13 people from acme.com</Label>
				</div>
				<div class="flex -space-x-2">
					{#each avatars as avatar}
						<Avatar.Root class="ring-2 ring-background">
							<Avatar.Image src={avatar.src} alt={avatar.name} />
							<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
						</Avatar.Root>
					{/each}
					<Avatar.Root class="ring-2 ring-background">
						<Avatar.Fallback class="text-xs">+10</Avatar.Fallback>
					</Avatar.Root>
				</div>
				<DialogFooter class="sm:justify-end">
					<DialogClose>
						{#snippet child({ props })}
							<Button {...props} variant="outline">Cancel</Button>
						{/snippet}
					</DialogClose>
					<Button type="submit">Refer</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</form>
</Dialog>
