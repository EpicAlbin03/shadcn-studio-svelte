<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		email: z.email('Please enter a valid email address.')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Reset password link sent to your email', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Reset Your Password:</Form.Label>
				<Input {...props} bind:value={$formData.email} placeholder="Email address" />
			{/snippet}
		</Form.Control>
		<Form.Description>Enter your email address to receive a reset link.</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Send Link</Form.Button>
</form>
