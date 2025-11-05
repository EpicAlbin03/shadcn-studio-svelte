<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

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

<Card.Root class="max-w-md">
	<Card.Header>
		<Card.Title>Meeting Notes</Card.Title>
		<Card.Description>Transcript from the meeting with the client.</Card.Description>
	</Card.Header>
	<Card.Content class="text-sm">
		<p>Client requested dashboard redesign with focus on mobile responsiveness.</p>
		<ol class="mt-4 flex list-decimal flex-col gap-2 pl-6">
			<li>New analytics widgets for daily/weekly metrics</li>
			<li>Simplified navigation menu</li>
			<li>Dark mode support</li>
			<li>Timeline: 6 weeks</li>
			<li>Follow-up meeting scheduled for next Tuesday</li>
		</ol>
	</Card.Content>
	<Card.Footer>
		<div class="flex -space-x-2 hover:space-x-1">
			{#each avatars as avatar}
				<Avatar.Root class="ring-2 ring-background transition-all duration-300 ease-in-out">
					<Avatar.Image src={avatar.src} alt={avatar.name} />
					<Avatar.Fallback class="text-xs">{avatar.fallback}</Avatar.Fallback>
				</Avatar.Root>
			{/each}
		</div>
	</Card.Footer>
</Card.Root>
