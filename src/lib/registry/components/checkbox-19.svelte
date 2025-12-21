<script lang="ts">
	import { motion, AnimatePresence, easeOut } from 'motion-sv';
	import { MotionCheckbox } from '$lib/registry/ui/motion-checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
	let showConfetti = $state(false);

	const handleCheckedChange = (checked: boolean) => {
		if (checked) {
			showConfetti = true;
			setTimeout(() => (showConfetti = false), 800);
		}
	};
</script>

{#snippet ConfettiPiece({ index }: { index: number })}
	{@const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']}
	{@const color = colors[index % colors.length]}
	{@const angle = Math.random() * Math.PI * 2}
	{@const distance = 30 + Math.random() * 20}

	<motion.div
		class="absolute h-1 w-1 rounded-full"
		style={{ backgroundColor: color }}
		initial={{ x: '50%', y: '50%', scale: 0, opacity: 0 }}
		animate={{
			x: `calc(50% + ${Math.cos(angle) * distance}px)`,
			y: `calc(50% + ${Math.sin(angle) * distance}px)`,
			scale: [0, 1, 0],
			opacity: [0, 1, 0]
		}}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.4, delay: index * 0.05, ease: easeOut }}
	/>
{/snippet}

<div class="relative flex items-center gap-2">
	<MotionCheckbox {id} bind:checked onCheckedChange={handleCheckedChange} />
	<Label for={id}>Check to see magic</Label>
	<AnimatePresence>
		{#if showConfetti}
			<div class="pointer-events-none absolute inset-0">
				{#each Array(12) as _, i}
					{@render ConfettiPiece({ index: i })}
				{/each}
			</div>
		{/if}
	</AnimatePresence>
</div>
