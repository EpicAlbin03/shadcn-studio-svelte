<script lang="ts">
	import Redo2Icon from '@lucide/svelte/icons/redo2';
	import Undo2Icon from '@lucide/svelte/icons/undo2';
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
