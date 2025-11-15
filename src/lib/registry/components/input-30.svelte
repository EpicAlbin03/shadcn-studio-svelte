<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with button</Label>
	<div class="flex gap-2">
		<Input {id} type="email" placeholder="Email address" />
		<Button type="submit">Subscribe</Button>
	</div>
</div>
