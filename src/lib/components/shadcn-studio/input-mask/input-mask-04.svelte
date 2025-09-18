<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Cleave from 'cleave.js';

	const id = $props.id();

	let inputRef = $state<HTMLInputElement>(null!);

	$effect(() => {
		if (!inputRef) return;

		const cleave = new Cleave(inputRef, {
			date: true,
			datePattern: ['m', 'y']
		});

		return () => cleave.destroy();
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Expiry date</Label>
	<Input
		{id}
		bind:ref={inputRef}
		type="text"
		placeholder="MM/YY"
		autocomplete="cc-exp"
		class="peer pe-11"
	/>
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
