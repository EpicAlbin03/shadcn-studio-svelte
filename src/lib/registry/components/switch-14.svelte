<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(true);
</script>

<div>
	<div class="relative inline-grid h-8 grid-cols-[1fr_1fr] items-center text-sm font-medium">
		<Switch
			bind:checked
			class="peer absolute inset-0 rounded-md data-[size=default]:h-[inherit] data-[size=default]:w-auto data-unchecked:bg-input/50 [&_span]:z-10 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] data-[size=default]:[&_span]:h-full data-[size=default]:[&_span]:w-1/2 data-[size=default]:[&_span]:data-checked:translate-x-9 rtl:data-[size=default]:[&_span]:data-checked:-translate-x-9"
			aria-label="Square switch with permanent text indicators"
		/>
		<span
			class="pointer-events-none relative ms-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-checked:invisible peer-data-unchecked:translate-x-full peer-data-unchecked:rtl:-translate-x-full"
		>
			<span class="text-[10px] font-medium uppercase">No</span>
		</span>
		<span
			class="pointer-events-none relative me-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-checked:-translate-x-full peer-data-checked:text-background peer-data-unchecked:invisible peer-data-checked:rtl:translate-x-full"
		>
			<span class="text-[10px] font-medium uppercase">Yes</span>
		</span>
	</div>
</div>
