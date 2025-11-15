<script lang="ts">
	import { CreditCardIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Cleave from 'cleave.js';

	const id = $props.id();

	let inputRef = $state<HTMLInputElement>(null!);

	$effect(() => {
		if (!inputRef) return;

		const cleave = new Cleave(inputRef, {
			creditCard: true
		});

		return () => cleave.destroy();
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Card number</Label>
	<div class="relative">
		<Input
			{id}
			bind:ref={inputRef}
			type="text"
			placeholder="Card number"
			autocomplete="cc-number"
			class="peer pe-11"
		/>
		<div
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<CreditCardIcon class="size-4" />
			<span class="sr-only">Card Provider</span>
		</div>
	</div>
	<p class="text-xs text-muted-foreground">
		Built with
		<a
			class="underline hover:text-foreground"
			href="https://github.com/nosir/cleave.js"
			target="_blank"
			rel="noopener noreferrer"
		>
			cleave.js
		</a>
	</p>
</div>
