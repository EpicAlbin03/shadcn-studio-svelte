<script lang="ts">
	import { CreditCardIcon } from '@lucide/svelte';
	import { DefaultCreditCardDelimiter, formatCreditCard, registerCursorTracker } from 'cleave-zen';
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
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Card number</Label>
	<div class="relative">
		<Input
			{id}
			type="text"
			placeholder="Card number"
			autocomplete="cc-number"
			class="peer pe-11"
			{@attach cardNumberAttachment}
		/>
		<div
			class="pointer-events-none absolute inset-y-0 inset-e-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<CreditCardIcon class="size-4" />
			<span class="sr-only">Card Provider</span>
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
