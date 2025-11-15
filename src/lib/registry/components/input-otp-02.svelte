<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'bits-ui';

	const id = $props.id();
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP Alphanumeric</Label>
	<InputOTP.Root {id} maxlength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
		{#snippet children({ cells })}
			<InputOTP.Group>
				{#each cells as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
		{/snippet}
	</InputOTP.Root>
</div>
