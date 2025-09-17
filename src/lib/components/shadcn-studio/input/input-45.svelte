<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { ChevronDownIcon, ChevronUpIcon } from '@lucide/svelte';
	import { onDestroy } from 'svelte';

	const id = $props.id();

	let count = $state(1024);
	const minValue = 0;
	const timerDuration = 100;
	let timer: ReturnType<typeof setInterval> | null = null;

	function updateCount(val: number) {
		if (val >= minValue) {
			count = val;
		}
	}

	function startIncrement() {
		updateCount(count + 1);
		timer = setInterval(() => {
			updateCount(count + 1);
		}, timerDuration);
	}

	function startDecrement() {
		updateCount(count - 1);
		timer = setInterval(() => {
			updateCount(count - 1);
		}, timerDuration);
	}

	function stopCounting() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	onDestroy(() => {
		if (timer) {
			clearInterval(timer);
		}
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label class="flex items-center gap-2 text-sm leading-none font-medium select-none">
		Input with stacked chevrons
	</Label>
	<div
		class="relative inline-flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-input bg-transparent text-base whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:border-ring data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:data-focus-within:has-aria-invalid:ring-destructive/40"
	>
		<input
			{id}
			bind:value={() => count, (v) => updateCount(v)}
			class="w-full grow px-3 py-2 text-center tabular-nums outline-none selection:bg-primary selection:text-primary-foreground"
		/>
		<div class="flex h-[calc(100%+2px)] flex-col">
			<button
				onmousedown={startIncrement}
				onmouseup={stopCounting}
				onmouseleave={stopCounting}
				class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
			>
				<ChevronUpIcon class="size-3" />
				<span class="sr-only">Increment</span>
			</button>
			<button
				onmousedown={startDecrement}
				onmouseup={stopCounting}
				onmouseleave={stopCounting}
				class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
			>
				<ChevronDownIcon class="size-3" />
				<span class="sr-only">Decrement</span>
			</button>
		</div>
	</div>
</div>
