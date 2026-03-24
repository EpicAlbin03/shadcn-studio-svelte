<script lang="ts">
	import { CreditCardIcon } from '@lucide/svelte';
	import {
		DefaultCreditCardDelimiter,
		DefaultDateDelimiter,
		formatCreditCard,
		formatDate,
		formatGeneral,
		registerCursorTracker
	} from 'cleave-zen';
	import type { Attachment } from 'svelte/attachments';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	const cardNumberAttachment: Attachment<HTMLInputElement> = (input) => {
		const unregisterCursorTracker = registerCursorTracker({
			delimiter: DefaultCreditCardDelimiter,
			input
		});

		const handleInput = (event: Event) => {
			const target = event.target as HTMLInputElement;
			target.value = formatCreditCard(target.value);
		};

		input.addEventListener('input', handleInput);

		return () => {
			input.removeEventListener('input', handleInput);
			unregisterCursorTracker();
		};
	};

	const expiryAttachment: Attachment<HTMLInputElement> = (input) => {
		const unregisterCursorTracker = registerCursorTracker({
			delimiter: DefaultDateDelimiter,
			input
		});

		const handleInput = (event: Event) => {
			const target = event.target as HTMLInputElement;
			target.value = formatDate(target.value, {
				datePattern: ['m', 'y']
			});
		};

		input.addEventListener('input', handleInput);

		return () => {
			input.removeEventListener('input', handleInput);
			unregisterCursorTracker();
		};
	};

	const cvcAttachment: Attachment<HTMLInputElement> = (input) => {
		const handleInput = (event: Event) => {
			const target = event.target as HTMLInputElement;
			target.value = formatGeneral(target.value, {
				blocks: [4],
				numericOnly: true
			});
		};

		input.addEventListener('input', handleInput);

		return () => input.removeEventListener('input', handleInput);
	};
</script>

<div class="w-full max-w-xs space-y-2">
	<Label>Card details</Label>
	<div>
		<div class="relative focus-within:z-1">
			<Input
				id="number-{id}"
				type="text"
				placeholder="Card number"
				autocomplete="cc-number"
				class="peer rounded-b-none pe-9 shadow-none"
				{@attach cardNumberAttachment}
			/>
			<div
				class="pointer-events-none absolute inset-y-0 inset-e-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
			>
				<CreditCardIcon class="size-4" />
				<span class="sr-only">Card Provider</span>
			</div>
		</div>
		<div class="-mt-px flex">
			<div class="min-w-0 flex-1 focus-within:z-1">
				<Input
					id="expiry-{id}"
					type="text"
					placeholder="MM/YY"
					autocomplete="cc-exp"
					class="rounded-e-none rounded-t-none shadow-none"
					{@attach expiryAttachment}
				/>
			</div>
			<div class="-ms-px min-w-0 flex-1 focus-within:z-1">
				<Input
					id="cvc-{id}"
					type="text"
					placeholder="CVC"
					autocomplete="cc-csc"
					class="rounded-s-none rounded-t-none shadow-none"
					{@attach cvcAttachment}
				/>
			</div>
		</div>
	</div>
	<p class="text-xs text-muted-foreground">
		Built with
		<a
			class="underline hover:text-foreground"
			href="https://github.com/nosir/cleave-zen"
			target="_blank"
			rel="noopener noreferrer"
		>
			cleave-zen
		</a>
	</p>
</div>
