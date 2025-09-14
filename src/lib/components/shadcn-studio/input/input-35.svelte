<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const maxLength = 12;

	let value = $state('');
	let characterCount = $derived(value.length);

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with character limit</Label>
	<div class="relative">
		<Input {id} type="text" placeholder="Username" bind:value maxlength={maxLength} />
		<p class="text-xs text-muted-foreground">
			<span class="tabular-nums">{maxLength - characterCount}</span> characters left
		</p>
	</div>
</div>
