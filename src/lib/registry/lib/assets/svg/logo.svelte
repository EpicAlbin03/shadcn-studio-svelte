<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let props: SVGAttributes<SVGElement> = $props();
</script>

<svg
	width="1em"
	height="1em"
	viewBox="0 0 324 323"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<rect x="0.5" width="323" height="323" rx="161.5" fill="black" class="dark:invert" />
	<rect
		x="88.1023"
		y="144.792"
		width="151.802"
		height="36.5788"
		rx="18.2894"
		transform="rotate(-38.5799 88.1023 144.792)"
		fill="#EB4F27"
	/>
	<rect
		x="85.3459"
		y="244.537"
		width="151.802"
		height="36.5788"
		rx="18.2894"
		transform="rotate(-38.5799 85.3459 244.537)"
		fill="#EB4F27"
	/>
</svg>
