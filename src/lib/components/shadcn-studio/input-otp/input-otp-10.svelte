<script lang="ts">
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import { DotIcon } from '@lucide/svelte';

	const id = $props.id();
</script>

<div class="space-y-3">
	<Label for={id}>Input OTP Custom Separator</Label>
	<InputOTP.Root {id} maxlength={6}>
		{#snippet children({ cells })}
			<InputOTP.Group>
				{#each cells.slice(0, 3) as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
			<div role="separator" class="text-muted-foreground">
				<DotIcon />
			</div>
			<InputOTP.Group>
				{#each cells.slice(3, 6) as cell (cell)}
					<InputOTP.Slot {cell} />
				{/each}
			</InputOTP.Group>
		{/snippet}
	</InputOTP.Root>
</div>
