<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		firstName: z.string().min(2, 'First name must be at least 2 characters'),
		lastName: z.string().min(2, 'Last name must be at least 2 characters'),
		email: z.email('Please enter a valid email address'),
		phoneNumber: z.e164('Please enter a valid phone number'),
		password: z.string().min(8, 'Password must be at least 8 characters')
	});
</script>

<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Account created successfully!', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Sign Up</Button>
		{/snippet}
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title class="text-center text-xl font-bold">Sign Up</Sheet.Title>
		</Sheet.Header>
		<form method="POST" class="w-full" use:enhance>
			<div class="space-y-4 p-4 pt-0">
				<Form.Field {form} name="firstName">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>First Name</Form.Label>
							<Input {...props} bind:value={$formData.firstName} placeholder="First name" />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="lastName">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Last Name</Form.Label>
							<Input {...props} bind:value={$formData.lastName} placeholder="Last name" />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Email Adress</Form.Label>
							<Input {...props} bind:value={$formData.email} placeholder="Email address" />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="phoneNumber">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Phone Number</Form.Label>
							<Input
								{...props}
								bind:value={$formData.phoneNumber}
								type="tel"
								placeholder="8585858585"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="password">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Password</Form.Label>
							<Input
								{...props}
								bind:value={$formData.password}
								type="password"
								placeholder="Password"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<Sheet.Footer>
				<Button type="submit">Create Account</Button>

				<Sheet.Close>
					{#snippet child({ props })}
						<Button {...props} variant="outline">Close</Button>
					{/snippet}
				</Sheet.Close>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
