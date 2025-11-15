<script lang="ts">
	import { CreditCardIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Cleave from 'cleave.js';

	const id = $props.id();

	let cardNumberRef = $state<HTMLInputElement>(null!);
	let expiryDateRef = $state<HTMLInputElement>(null!);
	let cvcRef = $state<HTMLInputElement>(null!);

	$effect(() => {
		if (!cardNumberRef || !expiryDateRef || !cvcRef) return;

		const cardNumberCleave = new Cleave(cardNumberRef, {
			creditCard: true
		});
		const expiryDateCleave = new Cleave(expiryDateRef, {
			date: true,
			datePattern: ['m', 'y']
		});
		const cvcCleave = new Cleave(cvcRef, {
			blocks: [4],
			numericOnly: true
		});

		return () => {
			cardNumberCleave.destroy();
			expiryDateCleave.destroy();
			cvcCleave.destroy();
		};
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label>Card details</Label>
	<div>
		<div class="relative focus-within:z-1">
			<Input
				id="number-{id}"
				bind:ref={cardNumberRef}
				type="text"
				placeholder="Card number"
				autocomplete="cc-number"
				class="peer rounded-b-none pe-9 shadow-none"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
			>
				<CreditCardIcon class="size-4" />
				<span class="sr-only">Card Provider</span>
			</div>
		</div>
		<div class="-mt-px flex">
			<div class="min-w-0 flex-1 focus-within:z-1">
				<Input
					id="expiry-{id}"
					bind:ref={expiryDateRef}
					type="text"
					placeholder="MM/YY"
					autocomplete="cc-exp"
					class="rounded-e-none rounded-t-none shadow-none"
				/>
			</div>
			<div class="-ms-px min-w-0 flex-1 focus-within:z-1">
				<Input
					id="cvc-{id}"
					bind:ref={cvcRef}
					type="text"
					placeholder="CVC"
					autocomplete="cc-csc"
					class="rounded-s-none rounded-t-none shadow-none"
				/>
			</div>
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
