<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Logo from '$lib/registry/components/logo.svelte';
	import AuthBackgroundShape from '$lib/registry/lib/assets/svg/auth-background-shape.svelte';
	import TwoFactorAuthenticationForm from './two-factor-authentication-form.svelte';
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
				<Card.Title class="mb-1.5 text-2xl">Two Factor Authentication</Card.Title>
				<Card.Description class="text-base">
					Please confirm access to your account by entering the code provided by your authenticator
					application
				</Card.Description>
			</div>
		</Card.Header>

		<Card.Content>
			<TwoFactorAuthenticationForm />
		</Card.Content>
	</Card.Root>
</div>
