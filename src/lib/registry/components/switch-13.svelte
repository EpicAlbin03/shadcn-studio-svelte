<script lang="ts">
	import { CheckIcon, XIcon } from '@lucide/svelte';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(true);
</script>

<div>
	<div class="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
		<Switch
			bind:checked
			class="peer absolute inset-0 h-[inherit] w-14 data-[state=unchecked]:bg-input/50 [&_span]:z-10 [&_span]:size-6.5 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-7 [&_span]:data-[state=checked]:rtl:-translate-x-7"
			aria-label="Switch with permanent icon indicators"
		/>
		<span
			class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-6 peer-data-[state=unchecked]:rtl:-translate-x-6"
		>
			<XIcon class="size-4" aria-hidden="true" />
		</span>
		<span
			class="pointer-events-none relative flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-background peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full"
		>
			<CheckIcon class="size-4" aria-hidden="true" />
		</span>
	</div>
</div>
