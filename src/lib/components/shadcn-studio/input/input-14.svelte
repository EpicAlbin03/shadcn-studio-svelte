<script lang="ts">
	import { UserIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with start icon</Label>
	<div class="relative">
		<div
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<UserIcon class="size-4" />
			<span class="sr-only">User</span>
		</div>
		<Input {id} type="text" placeholder="Username" class="peer ps-9" />
	</div>
</div>
