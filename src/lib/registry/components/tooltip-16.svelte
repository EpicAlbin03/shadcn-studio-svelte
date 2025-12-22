<script lang="ts">
	import { MotionTooltip } from '$lib/registry/ui/motion-tooltip';

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
		<MotionTooltip items={avatars} />
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
</div>
