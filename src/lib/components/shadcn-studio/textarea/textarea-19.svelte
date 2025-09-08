<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();

	const maxLength = 200;
	const initialValue = '';

	let value = $state(initialValue);
	let characterCount = $derived(initialValue.length);

	const handleChange = (e: any) => {
		if (e.target.value.length <= maxLength) {
			value = e.target.value;
		}
	};
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Textarea with characters left</Label>
	<Textarea
		placeholder="Type your feedback here"
		{value}
		maxlength={maxLength}
		onchange={handleChange}
	/>
	<p class="text-xs text-muted-foreground">
		<span class="tabular-nums">{maxLength - characterCount}</span> characters left
	</p>
</div>
