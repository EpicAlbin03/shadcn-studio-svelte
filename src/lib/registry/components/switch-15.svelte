<script lang="ts">
	import DatabaseIcon from '@lucide/svelte/icons/database';
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';

	const id = $props.id();
</script>

<div
	class="relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-checked:border-primary/50"
>
	<Switch
		{id}
		class="order-1 after:absolute after:inset-0 data-[size=default]:h-4 data-[size=default]:w-6 data-[size=default]:[&_span]:size-3 data-[size=default]:[&_span]:data-checked:translate-x-2.5 rtl:data-[size=default]:[&_span]:data-checked:-translate-x-2.5"
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
