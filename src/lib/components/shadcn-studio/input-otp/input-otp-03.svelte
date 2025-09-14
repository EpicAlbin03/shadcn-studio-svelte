<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';

	const id = $props.id();
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP with resend</Label>
	<InputOTP.Root {id} maxlength={4}>
		{#snippet children({ cells })}
			<InputOTP.Group>
				{#each cells as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
		{/snippet}
	</InputOTP.Root>
	<p class="text-xs text-muted-foreground">
		Didn't get the code?{' '}
		<a href="#" class="text-primary hover:underline">Resend code</a>
	</p>
</div>
