<script lang="ts">
	import { Loader2Icon } from '@lucide/svelte';
	import type { BundledLanguage } from 'shiki/bundle/web';
	import { highlightCode } from '$lib/utils/highlight-code';

	type Props = { code: string | null; lang: BundledLanguage };

	let { code, lang }: Props = $props();

	let highlightedCode = $state('');
	let isLoading = $state(true);

	$effect(() => {
		const highlightTab = async () => {
			if (code) {
				try {
					const highlighted = await highlightCode(code, lang, true);
					highlightedCode = highlighted;
				} catch (error) {
					console.error('Error highlighting code:', error);
				} finally {
					isLoading = false;
				}
			} else {
				isLoading = false;
			}
		};

		highlightTab();
	});
</script>

{#if isLoading}
	<div class="flex min-h-40 flex-1 items-center justify-center p-4">
		<Loader2Icon class="size-5 animate-spin text-muted-foreground" />
	</div>
{:else if highlightedCode}
	<div
		class="h-full *:outline-none! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:h-full [&_pre]:max-h-[500px] [&_pre]:overflow-auto [&_pre]:bg-sidebar! [&_pre]:p-4 [&_pre]:!pr-8 [&_pre]:leading-snug"
	>
		{@html highlightedCode}
	</div>
{:else}
	<div class="p-4">
		<code class="text-sm">{code}</code>
	</div>
{/if}
