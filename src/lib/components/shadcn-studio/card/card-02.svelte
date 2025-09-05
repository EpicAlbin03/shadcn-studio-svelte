<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';

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
		}
	];
</script>

<Card class="max-w-md">
	<CardHeader>
		<CardTitle>Meeting Notes</CardTitle>
		<CardDescription>Transcript from the meeting with the client.</CardDescription>
	</CardHeader>
	<CardContent class="text-sm">
		<p>Client requested dashboard redesign with focus on mobile responsiveness.</p>
		<ol class="mt-4 flex list-decimal flex-col gap-2 pl-6">
			<li>New analytics widgets for daily/weekly metrics</li>
			<li>Simplified navigation menu</li>
			<li>Dark mode support</li>
			<li>Timeline: 6 weeks</li>
			<li>Follow-up meeting scheduled for next Tuesday</li>
		</ol>
	</CardContent>
	<CardFooter>
		<div class="flex -space-x-2 hover:space-x-1">
			{#each avatars as avatar}
				<Avatar class="ring-2 ring-background transition-all duration-300 ease-in-out">
					<AvatarImage src={avatar.src} alt={avatar.name} />
					<AvatarFallback class="text-xs">{avatar.fallback}</AvatarFallback>
				</Avatar>
			{/each}
		</div>
	</CardFooter>
</Card>
