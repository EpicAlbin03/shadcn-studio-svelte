<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-time" class="px-1">Time input</Label>
	<Input
		type="time"
		id="{id}-time"
		step="1"
		defaultValue="08:30:00"
		class="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
	/>
</div>
