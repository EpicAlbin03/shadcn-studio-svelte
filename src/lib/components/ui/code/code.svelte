<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';
	import { CopyButton } from '$lib/components/ui/copy-button';

	export const codeVariants = tv({
		base: 'not-prose relative h-full overflow-auto',
		variants: {
			variant: {
				default: 'bg-transparent',
				secondary: 'bg-secondary/50'
			}
		}
	});

	export type CodeVariant = VariantProps<typeof codeVariants>['variant'];
	export type CodeProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: CodeVariant;
		code: string;
		isHighlighted: boolean;
		standalone?: boolean;
		copyButton?: boolean;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		variant = 'default',
		code,
		isHighlighted,
		standalone = true,
		copyButton = true,
		class: className,
		...restProps
	}: CodeProps = $props();

	const standaloneClass = $derived.by(() => {
		if (standalone) {
			return cn(
				variant === 'secondary' ? 'border-transparent' : 'border-border',
				'border rounded-lg'
			);
		}
	});
</script>

<div
	bind:this={ref}
	class={cn(codeVariants({ variant }), standaloneClass, className)}
	{...restProps}
>
	{#if copyButton}
		<div class="pointer-events-none absolute right-0 h-full">
			<CopyButton
				class="pointer-events-auto sticky top-2 z-10 mr-2 size-7 shrink-0 rounded-md bg-code p-0 text-primary/70"
				text={code}
			/>
		</div>
	{/if}
	{#if isHighlighted}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html code}
	{:else}
		<pre class="m-0 p-4 text-sm" style="background-color: transparent;"><code>{code}</code></pre>
	{/if}
</div>

<style>
	@reference '../../../../app.css';

	:global([data-line-numbers]) {
		display: grid;
		min-width: 100%;
		white-space: pre;
		border: 0;
		background: transparent;
		padding: 0;
		counter-reset: line;
		box-decoration-break: clone;
	}

	:global([data-line-numbers] [data-line]::before) {
		font-size: var(--text-sm);
		counter-increment: line;
		content: counter(line);
		display: inline-block;
		width: calc(var(--spacing) * 16);
		padding-right: calc(var(--spacing) * 6);
		text-align: right;
		color: var(--color-code-number);
		background-color: var(--color-code);
		position: sticky;
		left: 0;
	}

	:global([data-line-numbers] [data-highlighted-line][data-line]::before) {
		background-color: var(--color-code-highlight);
	}

	:global([data-line]) {
		padding-top: calc(var(--spacing) * 0.5);
		padding-bottom: calc(var(--spacing) * 0.5);
		min-height: calc(var(--spacing) * 1);
		width: 100%;
		display: inline-block;
	}

	:global([data-line] span) {
		color: var(--shiki-light);

		@variant dark {
			color: var(--shiki-dark) !important;
		}
	}

	:global([data-highlighted-line]),
	:global([data-highlighted-chars]) {
		position: relative;
		background-color: var(--color-code-highlight);
	}

	:global([data-highlighted-line]) {
		&:after {
			position: absolute;
			top: 0;
			left: 0;
			width: 2px;
			height: 100%;
			content: '';
			background-color: color-mix(in oklab, var(--muted-foreground) 50%, transparent);
		}
	}

	:global([data-highlighted-chars]) {
		border-radius: var(--radius-sm);
		padding-inline: 0.3rem;
		padding-block: 0.1rem;
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}
</style>
