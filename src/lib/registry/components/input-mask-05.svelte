<script lang="ts">
	import { formatGeneral } from 'cleave-zen';
	import type { Attachment } from 'svelte/attachments';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

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
	<Label for={id}>Code</Label>
	<Input
		{id}
		type="text"
		placeholder="CVC"
		autocomplete="cc-csc"
		class="peer pe-11"
		{@attach cvcAttachment}
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
