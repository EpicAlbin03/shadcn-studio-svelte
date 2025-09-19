<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';

	const id = $props.id();

	let timeLeft = $state(30);

	$effect(() => {
		if (timeLeft > 0) {
			const timer = setTimeout(() => {
				timeLeft--;
			}, 1000);

			return () => clearTimeout(timer);
		}
	});

	function formatTime(seconds: number) {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;

		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	}

	function handleResend() {
		timeLeft = 60;
	}
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP with resend timer</Label>
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
		{#if timeLeft > 0}
			Resend available in {formatTime(timeLeft)}
		{:else}
			<a
				href="#"
				onclick={(e) => {
					e.preventDefault();
					handleResend();
				}}
				class="underline hover:text-primary"
			>
				Resend code
			</a>
		{/if}
	</p>
</div>
