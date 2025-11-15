<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import { AnimatedTooltip } from '$lib/components/ui/motion-tooltip';

	const avatars = [
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
		},
		{
			image: '/avatars/16.webp',
			fallback: 'JW',
			name: 'Jenny Wilson',
			designation: 'Junior Developer'
		}
	];
</script>

<div class="space-y-4">
	<div class="flex w-full flex-row items-center justify-center">
		<AnimatedTooltip items={avatars} />
	</div>
	<p class="text-xs text-muted-foreground">
		Inspired by
		<a
			class="underline hover:text-foreground"
			href="https://ui.aceternity.com/components/animated-tooltip"
			target="_blank"
			rel="noopener noreferrer"
		>
			Aceternity UI
		</a>
	</p>
</div> -->
