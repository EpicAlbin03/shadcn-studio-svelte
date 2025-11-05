<script lang="ts" module>
	import { z } from 'zod/v4';

	const preferences = [
		{ value: 'share', label: 'Share Data for Personalized Experience' },
		{ value: 'no-share', label: 'Do Not Share Any Data' },
		{ value: 'customize', label: 'Customize Data Sharing Preferences' }
	];

	const formSchema = z.object({
		type: z
			.enum(
				preferences.map((p) => p.value),
				'You must select an option.'
			)
			.default('')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="type" class="space-y-3">
		<Form.Legend>Manage data sharing preferences</Form.Legend>
		<RadioGroup.Root bind:value={$formData.type} class="flex flex-col space-y-1" name="type">
			{#each preferences as { value, label } (value)}
				<div class="flex items-center space-x-2">
					<Form.Control>
						{#snippet children({ props })}
							<RadioGroup.Item {value} {...props} />
							<Form.Label class="font-normal">{label}</Form.Label>
						{/snippet}
					</Form.Control>
				</div>
			{/each}
		</RadioGroup.Root>
		<Form.Description>Please select one of the options to proceed.</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Update Preferences</Form.Button>
</form>
