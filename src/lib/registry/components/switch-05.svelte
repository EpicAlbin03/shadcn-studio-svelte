<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
</script>

<div class="flex items-center gap-3">
	<Switch aria-label="Small switch" />
	<Switch
		aria-label="Medium switch"
		class="h-6 w-10 [&_span]:size-5 data-[state=checked]:[&_span]:translate-x-4.5 data-[state=checked]:[&_span]:rtl:-translate-x-4.5"
	/>
	<Switch
		aria-label="Large switch"
		class="h-7 w-12 [&_span]:size-6 data-[state=checked]:[&_span]:translate-x-5.5 data-[state=checked]:[&_span]:rtl:-translate-x-5.5"
	/>
</div>
