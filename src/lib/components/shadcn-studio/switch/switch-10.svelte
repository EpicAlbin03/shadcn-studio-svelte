<script lang="ts">
	import { MoonIcon, SunIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(true);
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="icon-label" bind:checked aria-label="Toggle switch" />
	<Label for="icon-label">
		<span class="sr-only">Toggle switch</span>
		{#if checked}
			<MoonIcon class="size-4" aria-hidden="true" />
		{:else}
			<SunIcon class="size-4" aria-hidden="true" />
		{/if}
	</Label>
</div>
