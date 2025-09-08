<!-- <script lang="ts">
	import { ChevronDownIcon, CreditCardIcon } from '@lucide/svelte';
	import { usePaymentInputs } from 'react-payment-inputs';
	import images, { type CardImages } from 'react-payment-inputs/images';
	import { Button } from '$lib/components/ui/button';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Separator } from '$lib/components/ui/separator';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
	const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } =
		usePaymentInputs();

	const items = [
		{
			value: '1',
			label: 'Standard 3-5 Days',
			description: 'Friday, 15 June - Tuesday, 19 June',
			price: 'Free'
		},
		{
			value: '2',
			label: 'Express',
			description: 'Friday, 15 June - Sunday, 17 June',
			price: '$5.00'
		},
		{ value: '3', label: 'Overnight', description: 'Tomorrow', price: '$10.00' }
	];
</script>

<div class="w-full space-y-3">
	<div class="w-full max-w-md space-y-3 rounded-md border py-4">
		<Collapsible class="flex flex-col gap-2">
			<div class="flex items-center justify-between gap-4 px-4">
				<div class="text-sm font-semibold">Delivery Address</div>
				<CollapsibleTrigger class="group">
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon" class="size-8">
							<ChevronDownIcon
								class="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
							/>
							<span class="sr-only">Toggle</span>
						</Button>
					{/snippet}
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent class="flex flex-col gap-3 px-4 pt-3">
				<div class="group relative w-full">
					<label
						for="full-name"
						class="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
					>
						<span class="inline-flex bg-background px-1">Full Name</span>
					</label>
					<Input id="full-name" type="text" placeholder=" " class="dark:bg-background" />
				</div>
				<div class="group relative w-full space-y-2">
					<label
						for="address"
						class="origin-start absolute top-0 block translate-y-2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-foreground dark:has-aria-invalid:ring-destructive/40"
					>
						<span class="inline-flex bg-background px-1">Address</span>
					</label>
					<Textarea id="address" placeholder=" " class="!bg-background" />
				</div>
				<div class="group relative w-full">
					<label
						for="pin-code"
						class="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
					>
						<span class="inline-flex bg-background px-1">Pin Code</span>
					</label>
					<Input id="pin-code" type="number" placeholder=" " class="dark:bg-background" />
				</div>
				<div class="group relative w-full">
					<label
						for="city-name"
						class="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
					>
						<span class="inline-flex bg-background px-1">City</span>
					</label>
					<Input id="city-name" type="text" placeholder=" " class="dark:bg-background" />
				</div>
				<div class="group relative w-full">
					<label
						for="landmark"
						class="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
					>
						<span class="inline-flex bg-background px-1">Landmark</span>
					</label>
					<Input id="landmark" type="text" placeholder=" " class="dark:bg-background" />
				</div>
			</CollapsibleContent>
		</Collapsible>
		<Separator />
		<Collapsible class="flex flex-col gap-2">
			<div class="flex items-center justify-between gap-4 px-4">
				<div class="text-sm font-semibold">Delivery Options</div>
				<CollapsibleTrigger class="group">
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon" class="size-8">
							<ChevronDownIcon
								class="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
							/>
							<span class="sr-only">Toggle</span>
						</Button>
					{/snippet}
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent class="flex flex-col gap-2 px-4">
				<RadioGroup class="w-full gap-0 -space-y-px rounded-md pt-3 shadow-xs" value="2">
					{#each items as item (`${id}-${item.value}`)}
						<div
							class="relative flex flex-col gap-4 border border-input p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent"
						>
							<div class="flex items-center justify-between gap-1.5">
								<div class="flex items-center gap-2">
									<RadioGroupItem
										id={`${id}-${item.value}`}
										value={item.value}
										class="after:absolute after:inset-0"
										aria-label={`plan-radio-${item.value}`}
										aria-describedby={`${`${id}-${item.value}`}-price`}
									/>
									<div class="space-y-1">
										<Label class="inline-flex items-center" for={`${id}-${item.value}`}>
											{item.label}
										</Label>
										<p class="text-sm text-muted-foreground">{item.description}</p>
									</div>
								</div>
								<div
									id={`${`${id}-${item.value}`}-price`}
									class="text-xs leading-[inherit] text-muted-foreground"
								>
									{item.price}
								</div>
							</div>
						</div>
					{/each}
				</RadioGroup>
			</CollapsibleContent>
		</Collapsible>
		<Separator />
		<Collapsible class="flex flex-col gap-2">
			<div class="flex items-center justify-between gap-4 px-4">
				<div class="text-sm font-semibold">Payment</div>
				<CollapsibleTrigger class="group">
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon" class="size-8">
							<ChevronDownIcon
								class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
							/>
							<span class="sr-only">Toggle</span>
						</Button>
					{/snippet}
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent class="flex flex-col gap-2">
				<div class="w-full space-y-2 px-4 pt-2">
					<Label>Card details</Label>
					<div>
						<div class="relative focus-within:z-1">
							<Input
								{...getCardNumberProps()}
								id={`number-${id}`}
								class="peer rounded-b-none pe-9 shadow-none"
							/>
							<div
								class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
							>
								{#if meta.cardType}
									<svg
										class="w-6 overflow-hidden"
										{...getCardImageProps({
											images: images as unknown as CardImages
										})}
									/>
								{:else}
									<CreditCardIcon class="size-4" />
								{/if}
								<span class="sr-only">Card Provider</span>
							</div>
						</div>
						<div class="-mt-px flex">
							<div class="min-w-0 flex-1 focus-within:z-1">
								<Input
									{...getExpiryDateProps()}
									id={`expiry-${id}`}
									class="rounded-e-none rounded-t-none shadow-none"
								/>
							</div>
							<div class="-ms-px min-w-0 flex-1 focus-within:z-1">
								<Input
									{...getCVCProps()}
									id={`cvc-${id}`}
									class="rounded-s-none rounded-t-none shadow-none"
								/>
							</div>
						</div>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	</div>
	<p class="text-xs text-muted-foreground">
		Built with{' '}
		<a
			class="underline hover:text-foreground"
			href="https://github.com/medipass/react-payment-inputs"
			target="_blank"
			rel="noopener noreferrer"
		>
			React Payment Inputs
		</a>
	</p>
</div> -->
