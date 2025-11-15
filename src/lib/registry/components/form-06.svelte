<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		message: z
			.string()
			.min(50, 'Message must be at least 50 characters long.')
			.max(500, 'Message cannot exceed 500 characters.')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Textarea } from '$lib/components/ui/textarea';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Your application is submitted. We will contact you soon.', {
					richColors: true
				});
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="message">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Tell Us About Yourself</Form.Label>
				<Textarea
					{...props}
					bind:value={$formData.message}
					placeholder="Why do you think you're the perfect fit for this position?"
					class="field-sizing-fixed"
				/>
			{/snippet}
		</Form.Control>
		<Form.Description>
			Please include your qualifications, skills, and experiences that make you stand out.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Submit</Form.Button>
</form>
