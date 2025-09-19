<script lang="ts">
	import { Construction } from '@lucide/svelte';

	type Props = {
		message?: string;
	};

	let { message = 'This block is under construction. Check back soon!' }: Props = $props();
</script>

<div class="flex h-full flex-col items-center justify-center gap-4 text-center">
	<Construction class="size-10" />
	<span>{message}</span>
</div>
