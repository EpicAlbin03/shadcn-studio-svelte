<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';

	let isActive = $state(true);
</script>

{#if isActive}
	<Badge>
		Closable
		<button
			class="-my-px -ms-px -me-1.5 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 text-primary-foreground/60 transition-[color,box-shadow] outline-none hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
			aria-label="Close"
			onclick={() => (isActive = false)}
		>
			<XIcon class="size-3" aria-hidden="true" />
		</button>
	</Badge>
{/if}
