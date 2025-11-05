<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();

	const maxLength = 200;
	let value = $state('');
	const charsLeft = $derived(maxLength - value.length);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Textarea with characters left</Label>
	<Textarea
		placeholder="Type your feedback here"
		maxlength={maxLength}
		bind:value={
			() => value,
			(v) => {
				if (v.length <= maxLength) {
					value = v;
				}
			}
		}
	/>
	<p class="text-xs text-muted-foreground">
		<span class="tabular-nums">{charsLeft}</span> characters left
	</p>
</div>
