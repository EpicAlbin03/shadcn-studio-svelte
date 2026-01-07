<script lang="ts" module>
	import { cn } from '$lib/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import BorderBeam from './border-beam.svelte';

	export type NeuralButtonProps = ButtonProps;
</script>

<script lang="ts">
	let {
		children,
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		...props
	}: NeuralButtonProps = $props();
</script>

{#snippet backgroundDecorations()}
	<span
		class="pointer-events-none absolute inset-0 -z-1 bg-gradient-to-r from-neutral-900/20 to-white/20"
	>
		<span
			class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)] bg-sky-600 dark:bg-sky-400/60"
		></span>
	</span>

	<svg
		width="98"
		height="40"
		viewBox="0 0 98 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute inset-x-0 bottom-px h-12 w-full! blur-[6px]"
	>
		<g filter="url(#filter0_f_28138_7760)">
			<path
				d="M99 37.5708C60.3329 38.179 38.3917 38.106 -1 37.5708C-1 37.5708 2.65293 34.4541 7.59896 29.7774C12.545 25.1008 81.7895 24.0613 90.3618 30.737C98.9341 37.4128 99 37.5708 99 37.5708Z"
				fill="white"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_28138_7760"
				x="-28.9"
				y="-1.9"
				width="155.8"
				height="67.8"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="13.95" result="effect1_foregroundBlur_28138_7760" />
			</filter>
		</defs>
	</svg>
{/snippet}

{#snippet overlayDecorations()}
	<span
		class="pointer-events-none absolute inset-0 z-1 rounded-xl [box-shadow:0px_1px_1.6px_0px_color-mix(in_oklab,white_68%,transparent)_inset]"
	></span>
	<BorderBeam colorFrom="white" colorTo="white" size={35} />
{/snippet}

<Button
	bind:ref
	{variant}
	{size}
	class={cn(
		'relative z-1  overflow-hidden rounded-xl bg-sky-600! text-white ring-2 ring-sky-600/60! transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 dark:bg-sky-400/60! dark:ring-sky-400/60!',
		size === 'lg' && 'text-base has-[>svg]:px-6',
		className
	)}
	{...props}
>
	{@render backgroundDecorations()}
	{@render children?.()}
	{@render overlayDecorations()}
</Button>
