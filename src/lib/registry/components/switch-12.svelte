<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(true);
</script>

<div>
	<div class="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
		<Switch
			bind:checked
			class="peer absolute inset-0 data-[size=default]:h-[inherit] data-[size=default]:w-14 data-checked:bg-input/50 data-unchecked:bg-input/50 [&_span]:bg-background! [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] data-[size=default]:[&_span]:size-6.5 data-[size=default]:[&_span]:data-checked:translate-x-7 rtl:data-[size=default]:[&_span]:data-checked:-translate-x-7"
			aria-label="Switch with icon indicators"
		/>
		<span
			class="pointer-events-none relative ms-1.75 flex min-w-7 items-center text-center peer-data-checked:text-muted-foreground/70"
		>
			<CheckIcon class="size-4" aria-hidden="true" />
		</span>
		<span
			class="pointer-events-none relative -ms-px flex min-w-7 items-center text-center peer-data-unchecked:text-muted-foreground/70"
		>
			<XIcon class="size-4" aria-hidden="true" />
		</span>
	</div>
</div>
