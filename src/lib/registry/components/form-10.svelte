<script lang="ts" module>
	import { z } from 'zod/v4';

	const issues = [
		{ value: 'damaged', label: 'Product is Damaged' },
		{ value: 'got-different', label: 'Received wrong product' },
		{ value: 'not-like', label: 'Not as expectation' },
		{ value: 'other', label: 'Other' }
	];

	const options = [
		{ value: 'replace', label: 'Need a product replacement' },
		{ value: 'refund', label: 'Need a refund' },
		{ value: 'support', label: 'Need guidance or support' }
	];

	const formSchema = z.object({
		email: z.email('Please enter a valid email address.'),
		issue: z
			.enum(
				issues.map((m) => m.value),
				'Please select an email.'
			)
			.default(''),
		selectedOption: z
			.enum(
				options.map((o) => o.value),
				'You must select an option.'
			)
			.default(''),
		message: z.string().min(50, 'Describe your issue using at least 50 characters.')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Textarea } from '$lib/components/ui/textarea';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Issue submitted successfully! Our team will reach out to you shortly.', {
					richColors: true
				});
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card.Root class="w-full max-w-sm shadow-none">
	<Card.Header>
		<Card.Title>Report Issue</Card.Title>
		<Card.Description>Describe the issue you're facing; our team will help you.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
			<Form.Fieldset {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} placeholder="Email address" />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Fieldset>

			<Form.Fieldset {form} name="issue">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Issue</Form.Label>
						<Select.Root type="single" bind:value={$formData.issue} name={props.name}>
							<Select.Trigger {...props} class="w-full">
								{$formData.issue
									? issues.find((issue) => issue.value === $formData.issue)?.label
									: 'Issue you are facing'}
							</Select.Trigger>
							<Select.Content>
								{#each issues as { value, label } (value)}
									<Select.Item {value} {label} />
								{/each}
							</Select.Content>
						</Select.Root>
					{/snippet}
				</Form.Control>
				<Form.Description>Enter your email address to receive a reset link.</Form.Description>
				<Form.FieldErrors />
			</Form.Fieldset>

			<Form.Fieldset {form} name="selectedOption" class="space-y-3">
				<Form.Legend>How can we help you?</Form.Legend>
				<RadioGroup.Root
					bind:value={$formData.selectedOption}
					class="flex flex-col space-y-1"
					name="selectedOption"
				>
					{#each options as { value, label } (value)}
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
				<Form.FieldErrors />
			</Form.Fieldset>

			<Form.Fieldset {form} name="message">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Please describe your issue</Form.Label>
						<Textarea
							{...props}
							bind:value={$formData.message}
							placeholder="Provide detailed information about your issue"
							class="field-sizing-fixed"
						/>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Fieldset>

			<Form.Button>Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
