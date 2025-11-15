<script lang="ts">
	import { DatabaseIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	const id = $props.id();
</script>

<div
	class="relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
>
	<Switch
		{id}
		class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2.5 data-[state=checked]:[&_span]:rtl:-translate-x-2.5"
		aria-describedby="{id}-description"
	/>
	<div class="flex grow items-center gap-3">
		<DatabaseIcon />
		<div class="grid grow gap-2">
			<Label for={id}>Backup</Label>
			<p id="{id}-description" class="text-xs text-muted-foreground">
				Backup every file from your project.
			</p>
		</div>
	</div>
</div>
