<script lang="ts" module>
	import { toast as sonnerToast } from 'svelte-sonner';
	import type { ToastT } from 'svelte-sonner';
	import { X } from '@lucide/svelte';

	export const toast = (type: ToastT['type'], message: string, options?: Partial<ToastT>) => {
		// @ts-ignore
		sonnerToast[type](message, {
			cancel: {
				label: cancelLabel,
				onclick: () => {}
			},
			cancelButtonStyle: {
				backgroundColor: 'transparent',
				color: 'var(--foreground)',
				height: '20px',
				width: '20px',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0',
				margin: '0',
				marginInlineStart: 'auto'
			},
			duration: 3000,
			...options
		});
	};
</script>

{#snippet cancelLabel()}
	<X class="size-4" />
{/snippet}
