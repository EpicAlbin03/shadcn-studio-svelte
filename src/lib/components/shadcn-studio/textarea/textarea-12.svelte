<script lang="ts">
	import { HomeIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Textarea with end icon</Label>
	<div class="relative">
		<div
			class="pointer-events-none absolute end-0 top-2.5 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<HomeIcon class="size-4" />
			<span class="sr-only">Address</span>
		</div>
		<Textarea {id} placeholder="Address" class="peer pe-9" />
	</div>
</div>
