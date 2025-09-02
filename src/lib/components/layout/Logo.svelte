<script lang="ts">
	import AppLogo from '$lib/assets/svg/Logo.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<div class={cn('flex items-center', className)} aria-label="shadcn/studio-svelte">
	<AppLogo class="size-8.5" />
	<span class="ms-2.5 text-xl font-semibold">shadcn/studio-svelte</span>
</div>
