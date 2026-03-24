<script lang="ts">
	import { DefaultDateDelimiter, formatDate, registerCursorTracker } from 'cleave-zen';
	import type { Attachment } from 'svelte/attachments';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

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
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Expiry date</Label>
	<Input
		{id}
		type="text"
		placeholder="MM/YY"
		autocomplete="cc-exp"
		class="peer pe-11"
		{@attach expiryAttachment}
	/>
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
