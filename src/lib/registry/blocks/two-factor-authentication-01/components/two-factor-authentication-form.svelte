<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as InputOTP from '$lib/components/ui/input-otp';
	import * as Field from '$lib/components/ui/field/index.js';
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
	<Field.Field>
		<div class="flex items-center justify-between gap-1">
			<Field.Label for="recoveryCode" class="text-base">Code*</Field.Label>
			<span class="text-base font-medium">Use a recovery code</span>
		</div>

		<InputOTP.Root id="recoveryCode" maxlength={6}>
			{#snippet children({ cells })}
				<InputOTP.Group
					class="w-full justify-center gap-4 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border"
				>
					{#each cells as cell (cell)}
						<InputOTP.Slot {cell} />
					{/each}
				</InputOTP.Group>
			{/snippet}
		</InputOTP.Root>
	</Field.Field>

	<Button class="w-full" type="submit">Sign in to Shadcn Studio</Button>
</form>
