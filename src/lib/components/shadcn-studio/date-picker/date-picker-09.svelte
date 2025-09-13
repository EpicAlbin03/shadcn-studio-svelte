<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Clock8Icon } from '@lucide/svelte';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for="{id}-time" class="px-1">Time input</Label>
	<div class="relative">
		<div
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<Clock8Icon class="size-4" />
			<span class="sr-only">User</span>
		</div>
		<Input
			type="time"
			id="{id}-time"
			step="1"
			defaultValue="08:30:00"
			class="peer appearance-none bg-background ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
		/>
	</div>
</div>
