<script lang="ts" module>
	import { z } from 'zod/v4';

	const paymentMethods = [
		{ value: 'credit-card', label: 'Credit Card' },
		{ value: 'paypal', label: 'PayPal' },
		{ value: 'apple-pay', label: 'Apple Pay' },
		{ value: 'google-pay', label: 'Google Pay' },
		{ value: 'bank_transfer', label: 'Bank Transfer' },
		{ value: 'bitcoin', label: 'Bitcoin' },
		{ value: 'cash-on-delivery', label: 'Cash on Delivery' }
	];

	const formSchema = z.object({
		method: z
			.enum(
				paymentMethods.map((m) => m.value),
				'You must accept the terms and conditions.'
			)
			.default('')
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button';
	import { CheckIcon, ChevronsUpDownIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You selected ${f.data.method} for payment`, { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="method">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Select your payment method</Form.Label>
				<Popover.Root bind:open>
					<Form.Control>
						<Popover.Trigger bind:ref={triggerRef} {...props}>
							{#snippet child({ props })}
								<Button
									{...props}
									variant="outline"
									role="combobox"
									aria-expanded={open}
									class="w-full max-w-xs justify-between"
									aria-label="Payment method combobox"
								>
									{#if $formData.method}
										{paymentMethods.find((method) => method.value === $formData.method)?.label}
									{:else}
										<span class="text-muted-foreground">Select a payment method...</span>
									{/if}
									<ChevronsUpDownIcon class="opacity-50" />
								</Button>
							{/snippet}
						</Popover.Trigger>
					</Form.Control>
					<Popover.Content class="w-(--radix-popper-anchor-width) p-0">
						<Command.Root>
							<Command.Input placeholder="Search payment method..." />
							<Command.List>
								<Command.Empty>No payment method found.</Command.Empty>
								<Command.Group>
									{#each paymentMethods as method (method.value)}
										<Command.Item
											value={method.value}
											onSelect={() => {
												$formData.method = method.value;
												closeAndFocusTrigger();
											}}
										>
											{method.label}
											<CheckIcon
												class={cn(
													'ml-auto',
													$formData.method === method.value ? 'opacity-100' : 'opacity-0'
												)}
											/>
										</Command.Item>
									{/each}
								</Command.Group>
							</Command.List>
						</Command.Root>
					</Popover.Content>
				</Popover.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>Select your preferred payment method.</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Continue</Form.Button>
</form>
