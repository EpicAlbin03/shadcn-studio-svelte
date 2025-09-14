<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import SelectNative from '$lib/components/ui/select-native.svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native select with error</Label>
	<SelectNative {id} type="single" aria-invalid>
		<option value="1">IST (Indian Standard Time)</option>
		<option value="2">EST (Eastern Standard Time)</option>
		<option value="3">PST (Pacific Standard Time)</option>
		<option value="4">GMT (Greenwich Mean Time)</option>
	</SelectNative>
	<p class="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
		Selected option is invalid
	</p>
</div>
