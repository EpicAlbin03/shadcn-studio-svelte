<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with error</Label>
	<Input
		{id}
		type="email"
		placeholder="Email address"
		class="peer"
		defaultValue="invalid@email.com"
		aria-invalid
	/>
	<p class="text-xs text-muted-foreground peer-aria-invalid:text-destructive">
		This email is invalid.
	</p>
</div>
