<script lang="ts">
	import { CopyIcon, SquarePenIcon, Trash2Icon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button variant="outline" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		<SquarePenIcon />
		Edit
	</Button>
	<Button variant="outline" class="rounded-none shadow-none focus-visible:z-10">
		<CopyIcon />
		Duplicate
	</Button>
	<Button variant="outline" class="rounded-none rounded-e-md shadow-none focus-visible:z-10">
		<Trash2Icon />
		Delete
	</Button>
</div>
