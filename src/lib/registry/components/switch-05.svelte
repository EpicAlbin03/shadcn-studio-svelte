<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
</script>

<div class="flex items-center gap-3">
	<Switch aria-label="Small switch" />
	<Switch
		aria-label="Medium switch"
		class="data-[size=default]:h-6 data-[size=default]:w-10 data-[size=default]:[&_span]:size-5 data-[size=default]:[&_span]:data-checked:translate-x-4.5 rtl:data-[size=default]:[&_span]:data-checked:-translate-x-4.5"
	/>
	<Switch
		aria-label="Large switch"
		class="data-[size=default]:h-7 data-[size=default]:w-12 data-[size=default]:[&_span]:size-6 data-[size=default]:[&_span]:data-checked:translate-x-5.5 rtl:data-[size=default]:[&_span]:data-checked:-translate-x-5.5"
	/>
</div>
