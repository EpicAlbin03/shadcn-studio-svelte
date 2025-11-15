<script lang="ts">
	import AppLogo from '$lib/assets/svg/Logo.svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();

	const isMobile = new IsMobile();
	const title = $derived(isMobile.current ? '' : 'shadcn/studio-svelte');
</script>

<div class={cn('flex items-center', className)} aria-label={title}>
	<AppLogo class="size-8.5" />
	<span class="ms-2.5 text-xl font-semibold">{title}</span>
</div>
