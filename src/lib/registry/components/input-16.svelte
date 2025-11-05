<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with start text add-on</Label>
	<div class="relative">
		<Input {id} type="text" placeholder="shadcnstudio.com" class="peer ps-17" />
		<span
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50"
		>
			https://
		</span>
	</div>
</div>
