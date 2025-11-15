<script lang="ts">
	import { DownloadIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with icon button</Label>
	<div class="flex rounded-md shadow-xs">
		<Input
			{id}
			type="email"
			placeholder="Email address"
			class="-me-px rounded-e-none shadow-none focus-visible:z-1"
		/>
		<Button variant="outline" size="icon" class="rounded-s-none">
			<DownloadIcon />
			<span class="sr-only">Download</span>
		</Button>
	</div>
</div>
