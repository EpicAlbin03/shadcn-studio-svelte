<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		pin: z.string().min(6, 'Your one-time password must be 6 characters.')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Your verification is complete. You can now proceed.', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="pin">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>One-Time Password</Form.Label>
				<InputOTP.Root maxlength={6} {...props} bind:value={$formData.pin}>
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
			{/snippet}
		</Form.Control>
		<Form.Description>Please enter the 6-digit OTP sent to your phone.</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Submit</Form.Button>
</form>
