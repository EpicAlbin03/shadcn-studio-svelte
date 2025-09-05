<script lang="ts">
	import { XIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	let isActive = $state(true);
</script>

{#if isActive}
	<Card class="relative max-w-lg shadow-none">
		<Button
			variant="ghost"
			size="icon"
			onclick={() => (isActive = false)}
			class="absolute end-2 top-2 rounded-full"
		>
			<XIcon />
			<span class="sr-only">Close</span>
		</Button>
		<CardHeader>
			<CardTitle class="text-center">Have a project in mind</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-4 text-center">
			<p>
				Let's discuss! Our Assistant team is excited to hear about your projects, ideas and
				questions.
			</p>
			<Button>Contact Our Team</Button>
		</CardContent>
	</Card>
{/if}
