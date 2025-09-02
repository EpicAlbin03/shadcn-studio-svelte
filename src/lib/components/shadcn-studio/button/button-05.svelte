<script lang="ts">
	import { Redo2Icon, Undo2Icon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-wrap items-center gap-4">
	<Button variant="outline">
		<Undo2Icon />
		Undo
	</Button>
	<Button variant="outline">
		Redo
		<Redo2Icon />
	</Button>
</div>
