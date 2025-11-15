<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';

	const id = $props.id();
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP outlined</Label>
	<InputOTP.Root {id} maxlength={4}>
		{#snippet children({ cells })}
			<InputOTP.Group
				class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
			>
				{#each cells as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
		{/snippet}
	</InputOTP.Root>
</div>
