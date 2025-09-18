<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		acceptTerms: z.boolean().refine((val) => val === true, {
			error: 'You must accept the terms and conditions.'
		})
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Welcome to the community!', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="acceptTerms">
		<div class="flex items-center space-x-2">
			<Form.Control>
				{#snippet children({ props })}
					<Checkbox {...props} bind:checked={$formData.acceptTerms} />
					<Form.Label class="font-normal">Agree to Join the Community</Form.Label>
				{/snippet}
			</Form.Control>
		</div>
		<Form.Description>
			By clicking 'Join Now', you accept our Community Guidelines and Privacy Policy. We're excited
			to have you on board!
		</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Join Now</Form.Button>
</form>
