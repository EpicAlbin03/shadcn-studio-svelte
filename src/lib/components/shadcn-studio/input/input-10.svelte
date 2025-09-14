<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end helper text</Label>
	<Input {id} type="email" placeholder="Email address" />
	<p class="text-end text-xs text-muted-foreground">
		We'll never share your email with anyone else.
	</p>
</div>
