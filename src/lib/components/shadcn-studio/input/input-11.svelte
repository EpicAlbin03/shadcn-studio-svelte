<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<div class="flex items-center justify-between gap-1">
		<Label for={id}>Input with hint text</Label>
		<span class="text-xs text-muted-foreground">Optional field</span>
	</div>
	<Input {id} type="email" placeholder="Email address" />
</div>
