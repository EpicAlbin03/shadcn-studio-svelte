<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { onDestroy } from 'svelte';

	type CardTransform = {
		rotateX: number;
		rotateY: number;
		scale: number;
	};

	let cardRef = $state<HTMLDivElement>(null!);
	let imageRef = $state<HTMLImageElement>(null!);
	let animationFrameRef = $state<number>(null!);
	let lastMousePosition = $state({ x: 0, y: 0 });

	let rect: DOMRect;
	let centerX: number;
	let centerY: number;

	function updateCardTransform(mouseX: number, mouseY: number) {
		if (!rect) {
			rect = cardRef.getBoundingClientRect();
			centerX = rect.left + rect.width / 2;
			centerY = rect.top + rect.height / 2;
		}

		const relativeX = mouseX - centerX;
		const relativeY = mouseY - centerY;

		const cardTransform: CardTransform = {
			rotateX: -relativeY * 0.035,
			rotateY: relativeX * 0.035,
			scale: 1.025
		};

		const imageTransform: CardTransform = {
			rotateX: -relativeY * 0.025,
			rotateY: relativeX * 0.025,
			scale: 1.05
		};

		return { cardTransform, imageTransform };
	}

	function animate() {
		const transforms = updateCardTransform(lastMousePosition.x, lastMousePosition.y);
		if (!transforms) return;

		const { cardTransform, imageTransform } = transforms;

		cardRef.style.transform = `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) scale3d(${cardTransform.scale}, ${cardTransform.scale}, ${cardTransform.scale})`;
		cardRef.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2)';

		imageRef.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`;

		animationFrameRef = requestAnimationFrame(animate);
	}

	function handleMouseMove(e: MouseEvent) {
		lastMousePosition = { x: e.clientX, y: e.clientY };
	}

	function handleMouseEnter() {
		cardRef.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
		imageRef.style.transition = 'transform 0.2s ease';
		animate();
	}

	function handleMouseLeave() {
		if (animationFrameRef) {
			cancelAnimationFrame(animationFrameRef);
		}

		cardRef.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
		cardRef.style.boxShadow = 'none';
		cardRef.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';

		imageRef.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
		imageRef.style.transition = 'transform 0.5s ease';
	}

	onDestroy(() => {
		if (animationFrameRef) {
			cancelAnimationFrame(animationFrameRef);
		}
	});
</script>

<Card.Root
	bind:ref={cardRef}
	class="max-w-md"
	onmouseenter={handleMouseEnter}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	<Card.Header>
		<Card.Title>Dynamic 3D Hover Card</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-6 text-sm">
		<img
			bind:this={imageRef}
			src="/components/card-10.webp"
			alt="Banner"
			class="aspect-video w-full rounded-md object-cover"
			width={500}
			height={500}
		/>
		<p>
			Experience interactive depth and motion with this sleek 3D hover effect. Move your cursor to
			see it come alive!
		</p>
	</Card.Content>
</Card.Root>
