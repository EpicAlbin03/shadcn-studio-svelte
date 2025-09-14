<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end add-on</Label>
	<div class="flex rounded-md shadow-xs">
		<Input {id} type="text" placeholder="shadcnstudio" class="-me-px rounded-e-none shadow-none" />
		<span
			class="-z-1 inline-flex items-center rounded-e-md border border-input bg-background px-3 text-sm text-muted-foreground"
		>
			.com
		</span>
	</div>
</div>
