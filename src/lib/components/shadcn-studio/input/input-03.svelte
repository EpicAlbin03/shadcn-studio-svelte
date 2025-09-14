<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id} class="gap-1">
		Required input <span class="text-destructive">*</span>
	</Label>
	<Input {id} type="email" placeholder="Email address" required />
</div>
