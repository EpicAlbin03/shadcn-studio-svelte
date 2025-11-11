<script lang="ts">
	import LogoSvg from '$lib/registry/lib/assets/svg/logo.svelte';
	import { cn } from '$lib/utils';

	type Props = { class?: string };

	let { class: className }: Props = $props();
</script>

<div class={cn('flex items-center gap-2.5', className)}>
	<LogoSvg class="size-8.5" />
	<span class="text-xl font-semibold">shadcn/studio</span>
</div>
