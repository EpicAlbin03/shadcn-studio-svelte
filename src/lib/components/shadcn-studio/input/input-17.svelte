<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end text add-on</Label>
	<div class="relative">
		<Input {id} type="text" placeholder="shadcnstudio" class="peer pe-13" />
		<span
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
		>
			.com
		</span>
	</div>
</div>
