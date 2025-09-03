<script lang="ts">
	import { CheckCircleIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Checkbox } from '$lib/components/ui/checkbox';

	let selected = $state(false);
	const id = crypto.randomUUID();
</script>

<Badge
	variant={selected ? 'secondary' : 'outline'}
	class="relative cursor-pointer outline-none has-focus-visible:border-ring/50 has-focus-visible:ring-2 has-focus-visible:ring-ring/50"
>
	<Checkbox {id} class="peer sr-only after:absolute after:inset-0" bind:checked={selected} />
	<CheckCircleIcon
		class="hidden size-3 text-green-600 peer-data-[state=checked]:block dark:text-green-400"
		aria-hidden="true"
	/>
	<label for={id} class="cursor-pointer select-none after:absolute after:inset-0">
		{selected ? 'Selected' : 'Selectable'}
	</label>
</Badge>
