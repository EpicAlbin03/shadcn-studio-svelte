<script lang="ts">
	import { CheckIcon, MailIcon } from '@lucide/svelte';
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { cn } from '$lib/utils';
	import { untrack } from 'svelte';

	const CORRECT_CODE = '11208';

	let value = $state('');
	let hasGuessed = $state<undefined | boolean>(undefined);
	let inputRootRef = $state<HTMLDivElement>(null!);
	let inputRef = $state<HTMLInputElement>(null!);
	let closeButtonRef = $state<HTMLButtonElement>(null!);

	$effect(() => {
		if (inputRootRef && untrack(() => !inputRef)) {
			inputRef = inputRootRef.querySelector('#confirmation-code') as HTMLInputElement;
		}
	});

	$effect(() => {
		if (hasGuessed) {
			closeButtonRef.focus();
		}
	});

	async function onSubmit() {
		inputRef.select();
		await new Promise((r) => setTimeout(r, 1_00));

		hasGuessed = value === CORRECT_CODE;

		value = '';
		setTimeout(() => {
			inputRef.blur();
		}, 20);
	}
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">OTP code</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-md">
		<div class="flex flex-col items-center gap-2">
			<div
				class={cn(
					'flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-600/10 dark:bg-sky-400/100',
					{ 'bg-green-600/10 dark:bg-green-400/10': hasGuessed }
				)}
				aria-hidden="true"
			>
				{#if hasGuessed}
					<CheckIcon class="text-green-600 dark:text-green-400" strokeWidth={1} />
				{:else}
					<MailIcon class="text-sky-600 dark:text-sky-400" strokeWidth={1} />
				{/if}
			</div>
			<Dialog.Header>
				<Dialog.Title class="sm:text-center">
					{hasGuessed ? 'Account verified!' : 'Check Your Email'}
				</Dialog.Title>
				<Dialog.Description class="sm:text-center">
					{#if hasGuessed}
						<span>
							Congratulations! your email account <strong>exa**le@gmail.com</strong> has been verified
						</span>
					{:else}
						<span>
							We have sent a verification code to <strong>exa**le@gmail.com</strong>. Please check
							your inbox and input the code below to activate your account. Try {CORRECT_CODE}
						</span>
					{/if}
				</Dialog.Description>
			</Dialog.Header>
		</div>

		{#if hasGuessed}
			<div class="text-center">
				<Dialog.Close>
					{#snippet child({ props })}
						<Button {...props} type="button" bind:ref={closeButtonRef}>Continue</Button>
					{/snippet}
				</Dialog.Close>
			</div>
		{:else}
			<div class="space-y-4">
				<div class="flex justify-center">
					<InputOTP.Root
						inputId="confirmation-code"
						bind:ref={inputRootRef}
						bind:value
						maxlength={5}
						onfocus={() => (hasGuessed = undefined)}
						onComplete={onSubmit}
					>
						{#snippet children({ cells })}
							<InputOTP.Group class="flex items-center gap-3 has-disabled:opacity-50">
								{#each cells as cell}
									<InputOTP.Slot
										{cell}
										class={cn(
											'flex size-9 items-center justify-center rounded-md border border-input bg-background font-medium text-foreground shadow-xs transition-[color,box-shadow]',
											{ 'z-10 border-ring ring-[3px] ring-ring/50': cell.isActive }
										)}
									/>
								{/each}
							</InputOTP.Group>
						{/snippet}
					</InputOTP.Root>
				</div>
				{#if hasGuessed === false}
					<p class="text-center text-xs text-muted-foreground" role="alert" aria-live="polite">
						Invalid code. Please try again.
					</p>
				{/if}

				<p class="text-center text-sm">
					Didn't get a code?
					<button
						class="cursor-pointer border-none bg-transparent p-0 text-sky-600 hover:underline dark:text-sky-400"
					>
						Resend
					</button>
				</p>
			</div>
		{/if}
	</Dialog.Content>
</Dialog.Root>
