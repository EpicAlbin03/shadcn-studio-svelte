<script lang="ts">
	import { ChevronLeftIcon } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card';
	import Logo from '$lib/registry/components/logo.svelte';
	import AuthBackgroundShape from '$lib/registry/lib/assets/svg/auth-background-shape.svelte';
	import ResetPasswordForm from './reset-password-form.svelte';
</script>

<div
	class="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8"
>
	<div class="absolute">
		<AuthBackgroundShape />
	</div>

	<Card.Root class="z-1 w-full border-none shadow-md sm:max-w-md">
		<Card.Header class="gap-6">
			<Logo class="gap-3" />

			<div>
				<Card.Title class="mb-1.5 text-2xl">Reset Password</Card.Title>
				<Card.Description class="text-base">
					Please enter your current password and choose a new password to update your account
					security.
				</Card.Description>
			</div>
		</Card.Header>

		<Card.Content class="space-y-4">
			<ResetPasswordForm />

			<a href="#" class="group mx-auto flex w-fit items-center gap-2">
				<ChevronLeftIcon
					class="size-5 transition-transform duration-200 group-hover:-translate-x-0.5"
				/>
				<span>Back to login</span>
			</a>
		</Card.Content>
	</Card.Root>
</div>
