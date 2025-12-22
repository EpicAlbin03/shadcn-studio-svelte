<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Context } from 'runed';
	import { SvelteMap } from 'svelte/reactivity';
	import { cn } from '$lib/utils';

	export type MotionTabsContext = {
		activeValue: string;
		handleValueChange: (value: string) => void;
		registerTrigger: (value: string, exists: boolean) => void;
	};

	export type MotionTabsProps = HTMLAttributes<HTMLDivElement> & {
		value?: string;
		onValueChange?: (value: string) => void;
		children?: Snippet;
		class?: string;
	};

	export const motionTabsContext = new Context<MotionTabsContext>('MotionTabs');
</script>

<script lang="ts">
	let {
		value = $bindable(''),
		onValueChange,
		children,
		class: className,
		...restProps
	}: MotionTabsProps = $props();

	const triggers = new SvelteMap<string, boolean>();
	let initialSet = false;

	function handleValueChange(val: string) {
		value = val;
		onValueChange?.(val);
	}

	function registerTrigger(val: string, exists: boolean) {
		if (exists) {
			triggers.set(val, true);

			// Set first tab as default if no value
			if (!value && !initialSet) {
				value = val;
				initialSet = true;
			}
		} else {
			triggers.delete(val);
		}
	}

	motionTabsContext.set({
		get activeValue() {
			return value;
		},
		handleValueChange,
		registerTrigger
	});
</script>

<div data-slot="tabs" class={cn('flex flex-col gap-2', className)} {...restProps}>
	{@render children?.()}
</div>
