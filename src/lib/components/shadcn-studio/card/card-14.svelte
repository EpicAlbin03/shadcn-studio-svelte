<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';

	let isActive = $state(true);
</script>

{#if isActive}
	<Card.Root class="relative max-w-lg shadow-none">
		<Button
			variant="ghost"
			size="icon"
			onclick={() => (isActive = false)}
			class="absolute end-2 top-2 rounded-full"
		>
			<XIcon />
			<span class="sr-only">Close</span>
		</Button>
		<Card.Header>
			<Card.Title class="text-center">Have a project in mind</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-4 text-center">
			<p>
				Let's discuss! Our Assistant team is excited to hear about your projects, ideas and
				questions.
			</p>
			<Button>Contact Our Team</Button>
		</Card.Content>
	</Card.Root>
{/if}
