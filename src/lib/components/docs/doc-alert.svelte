<script lang="ts">
	import type { Snippet } from 'svelte';
	import { CircleAlertIcon, TriangleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { tv, type VariantProps } from 'tailwind-variants';

	const alertVariants = tv({
		slots: {
			root: 'border-none',
			description: 'inline'
		},
		variants: {
			variant: {
				info: {
					root: 'bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400',
					description: 'text-sky-600/80 dark:text-sky-400/80'
				},
				warning: {
					root: 'bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
					description: 'text-amber-600/80 dark:text-amber-400/80'
				},
				error: {
					root: 'bg-destructive/10 text-destructive',
					description: 'text-destructive/80'
				}
			}
		},
		defaultVariants: {
			variant: 'info'
		}
	});

	type AlertVariant = VariantProps<typeof alertVariants>['variant'];

	type Props = {
		variant?: AlertVariant;
		title?: string;
		children: Snippet;
	};

	let { variant = 'info', title, children }: Props = $props();

	const classes = $derived(alertVariants({ variant }));
</script>

<Alert.Root class={classes.root()}>
	{#if variant === 'error'}
		<TriangleAlertIcon />
	{:else}
		<CircleAlertIcon />
	{/if}
	{#if title}
		<Alert.Title>{title}</Alert.Title>
	{/if}
	<Alert.Description class={classes.description()}>
		{@render children()}
	</Alert.Description>
</Alert.Root>
