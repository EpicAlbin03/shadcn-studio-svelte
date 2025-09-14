<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="group relative w-full max-w-xs">
	<Label
		for={id}
		class="absolute start-2 top-0 z-1 block -translate-y-1/2 bg-background px-1 text-xs text-foreground"
	>
		Input with overlapping label
	</Label>
	<Input {id} type="email" placeholder="Email address" class="h-10 dark:bg-background" />
</div>
