<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';

	const id = $props.id();
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP Outline Grouped</Label>
	<InputOTP.Root {id} maxlength={6}>
		{#snippet children({ cells })}
			<InputOTP.Group
				class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
			>
				{#each cells.slice(0, 3) as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
			<InputOTP.Separator />
			<InputOTP.Group
				class="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
			>
				{#each cells.slice(3, 6) as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
		{/snippet}
	</InputOTP.Root>
</div>
