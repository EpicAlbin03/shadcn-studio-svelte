<script lang="ts">
	import { CircleXIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let value = $state('Click to clear');
	let inputRef = $state<HTMLInputElement>(null!);

	const id = $props.id();

	const handleClearInput = () => {
		value = '';
		if (inputRef) {
			inputRef.focus();
		}
	};
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with clear button</Label>
	<div class="relative">
		<Input
			bind:ref={inputRef}
			{id}
			type="text"
			placeholder="Type something..."
			bind:value
			class="pe-9"
		/>
		{#if value}
			<Button
				variant="ghost"
				size="icon"
				onclick={handleClearInput}
				class="absolute inset-y-0 end-0 rounded-s-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
			>
				<CircleXIcon />
				<span class="sr-only">Clear input</span>
			</Button>
		{/if}
	</div>
</div>
