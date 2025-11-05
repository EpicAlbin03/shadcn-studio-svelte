<script lang="ts">
	import { Loader2Icon } from '@lucide/svelte';
	import type { BundledLanguage } from 'shiki/bundle/web';
	import { useShiki } from '$lib/hooks/use-shiki.svelte';

	type Props = { code: string | null; lang: BundledLanguage };

	let { code, lang }: Props = $props();

	let highlightedCode = $state('');
	let isLoading = $state(true);

	const shikiHook = useShiki();
	const highlightCode = $derived(shikiHook.highlightCode);
	const isHighlighterReady = $derived(shikiHook.isHighlighterReady);

	$effect(() => {
		if (!isHighlighterReady) return;

		const highlightTab = async () => {
			if (code) {
				try {
					const highlighted = await highlightCode(code, lang);
					highlightedCode = highlighted;
				} catch (error) {
					console.error('Error highlighting code:', error);
				}
			}
		};

		// Highlight active tab first
		highlightTab().then(() => {
			isLoading = false;
		});
	});
</script>

{#if isLoading}
	<div class="flex min-h-40 flex-1 items-center justify-center p-4">
		<Loader2Icon class="size-5 animate-spin text-muted-foreground" />
	</div>
{:else if isHighlighterReady && highlightedCode}
	<div
		class="h-full *:outline-none! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:h-full [&_pre]:max-h-[500px] [&_pre]:overflow-auto [&_pre]:bg-sidebar! [&_pre]:p-4 [&_pre]:leading-snug"
	>
		{@html highlightedCode}
	</div>
{:else}
	<div class="p-4">
		<code class="text-sm">{code}</code>
	</div>
{/if}
