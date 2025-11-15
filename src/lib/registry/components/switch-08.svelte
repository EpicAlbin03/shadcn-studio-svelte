<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	let checked = $state(true);
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="toggle-label" bind:checked aria-label="Toggle switch label" />
	<Label for="toggle-label" class="text-sm font-medium">
		{checked ? 'Yes' : 'No'}
	</Label>
</div>
