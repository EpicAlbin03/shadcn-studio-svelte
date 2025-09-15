<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { onMount } from 'svelte';

	let all = $state<NodeListOf<Element>>();

	const handleMouseMove = (event: MouseEvent) => {
		if (!all) return;

		all.forEach((element) => {
			const blob = element.querySelector('.blob') as HTMLElement;
			const fblob = element.querySelector('.fake-blob') as HTMLElement;

			if (!blob || !fblob) return;

			const rec = fblob.getBoundingClientRect();

			blob.style.opacity = '1';

			blob.animate(
				[
					{
						transform: `translate(${
							event.clientX - rec.left - rec.width / 2
						}px, ${event.clientY - rec.top - rec.height / 2}px)`
					}
				],
				{
					duration: 300,
					fill: 'forwards'
				}
			);
		});
	};

	onMount(() => {
		all = document.querySelectorAll('.spotlight-card');
	});
</script>

<svelte:window onmousemove={handleMouseMove} />

<div class="h-max w-max">
	<div
		class="spotlight-card group relative overflow-hidden rounded-xl bg-border p-px transition-all duration-300 ease-in-out"
	>
		<Card
			class="max-w-80 border-none transition-all duration-300 ease-in-out group-hover:bg-card/90 group-hover:backdrop-blur-[20px]"
		>
			<CardHeader>
				<CardTitle>Hover for the Glow-Up</CardTitle>
			</CardHeader>
			<CardContent>
				Glide your cursor here and watch magic unfold — an experience designed just for you.
			</CardContent>
		</Card>
		<div
			class="blob absolute start-0 top-0 h-20 w-20 rounded-full bg-sky-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-sky-400/60"
		></div>
		<div class="fake-blob absolute start-0 top-0 h-20 w-20 rounded-full"></div>
	</div>
</div>
