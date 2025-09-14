<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with text add-ons</Label>
	<div class="relative">
		<Input {id} type="text" placeholder="shadcnstudio" class="peer ps-17 pe-13" />
		<span
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50"
		>
			https://
		</span>
		<span
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50"
		>
			.com
		</span>
	</div>
</div>
