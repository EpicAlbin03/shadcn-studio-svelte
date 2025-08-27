<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUp } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let showScrollButton = $state(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleScroll = () => {
		// Show button when scrolled down 320px or more
		showScrollButton = window.scrollY > 320;
	};

	onMount(() => {
		handleScroll();
	});
</script>

<svelte:window onscroll={handleScroll} />

<Button
	size="icon"
	class={cn('fixed end-6 bottom-6 z-50 cursor-pointer transition-all duration-200', {
		'scale-0': !showScrollButton
	})}
	onclick={scrollToTop}
>
	<ArrowUp class="size-4" />
	<span class="sr-only">Scroll to top</span>
</Button>
