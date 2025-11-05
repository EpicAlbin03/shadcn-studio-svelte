<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end button</Label>
	<div class="flex rounded-md shadow-xs">
		<Input
			{id}
			type="email"
			placeholder="Email address"
			class="-me-px rounded-e-none shadow-none focus-visible:z-1"
		/>
		<Button class="rounded-s-none">Subscribe</Button>
	</div>
</div>
