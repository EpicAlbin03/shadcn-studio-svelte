<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		stepTracker: z.boolean().refine((val) => val === true, {
			error: 'You must enable step tracker to proceed.'
		})
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Switch } from '$lib/components/ui/switch';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Step tracker is enabled "Go! Run."', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="stepTracker">
		<div class="flex items-center space-x-2">
			<Form.Control>
				{#snippet children({ props })}
					<Switch {...props} bind:checked={$formData.stepTracker} />
					<Form.Label class="font-normal">Agree to Join the Community</Form.Label>
				{/snippet}
			</Form.Control>
		</div>
		<Form.Description>
			Track your daily steps to help you reach your fitness goals.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Activate</Form.Button>
</form>
