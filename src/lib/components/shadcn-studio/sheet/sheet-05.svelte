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
	import { FormControl, FormField, FormFieldErrors, FormLabel } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {
		Sheet,
		SheetClose,
		SheetContent,
		SheetFooter,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '$lib/components/ui/sheet';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Account created successfully!');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Sheet>
	<SheetTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Sign Up</Button>
		{/snippet}
	</SheetTrigger>
	<SheetContent>
		<SheetHeader>
			<SheetTitle class="text-center text-xl font-bold">Sign Up</SheetTitle>
		</SheetHeader>
		<form method="POST" class="w-full" use:enhance>
			<div class="space-y-4 p-4 pt-0">
				<FormField {form} name="firstName">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel>First Name</FormLabel>
							<Input {...props} bind:value={$formData.firstName} placeholder="First name" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>
				<FormField {form} name="lastName">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel>Last Name</FormLabel>
							<Input {...props} bind:value={$formData.lastName} placeholder="Last name" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>
				<FormField {form} name="email">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel>Email Adress</FormLabel>
							<Input {...props} bind:value={$formData.email} placeholder="Email address" />
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>
				<FormField {form} name="phoneNumber">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel>Phone Number</FormLabel>
							<Input
								{...props}
								bind:value={$formData.phoneNumber}
								type="tel"
								placeholder="8585858585"
							/>
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>
				<FormField {form} name="password">
					<FormControl>
						{#snippet children({ props })}
							<FormLabel>Password</FormLabel>
							<Input
								{...props}
								bind:value={$formData.password}
								type="password"
								placeholder="Password"
							/>
						{/snippet}
					</FormControl>
					<FormFieldErrors />
				</FormField>
			</div>
			<SheetFooter>
				<Button type="submit">Create Account</Button>

				<SheetClose>
					{#snippet child({ props })}
						<Button {...props} variant="outline">Close</Button>
					{/snippet}
				</SheetClose>
			</SheetFooter>
		</form>
	</SheetContent>
</Sheet>
