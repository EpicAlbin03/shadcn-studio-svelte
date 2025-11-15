<script lang="ts" module>
	import { z } from 'zod/v4';

	const registeredEmails = [
		{ value: 'm@example.com', label: 'user1@gmail.com' },
		{ value: 'm@google.com', label: 'user007@gmail.com' },
		{ value: 'm@support.com', label: 'user69@outlook.com' }
	];

	const formSchema = z.object({
		registeredEmail: z
			.enum(
				registeredEmails.map((m) => m.value),
				'Please select an email.'
			)
			.default('')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Select from '$lib/components/ui/select/index.js';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Your account has been recovered', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="registeredEmail">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Email</Form.Label>
				<Select.Root type="single" bind:value={$formData.registeredEmail} name={props.name}>
					<Select.Trigger {...props} class="w-full">
						{$formData.registeredEmail
							? registeredEmails.find((email) => email.value === $formData.registeredEmail)?.label
							: 'Enter your registered email'}
					</Select.Trigger>
					<Select.Content>
						{#each registeredEmails as { value, label } (value)}
							<Select.Item {value} {label} />
						{/each}
					</Select.Content>
				</Select.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>Recover Your Account</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Recover</Form.Button>
</form>
