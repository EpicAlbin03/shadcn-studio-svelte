<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Logo from '$lib/registry/components/logo.svelte';
	import AuthBackgroundShape from '$lib/registry/lib/assets/svg/auth-background-shape.svelte';
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
				<Card.Title class="mb-1.5 text-2xl">Verify your email</Card.Title>
				<Card.Description class="text-base">
					An activation link has been sent to your email address: hello@example.com. Please check
					your inbox and click on the link to complete the activation process.
				</Card.Description>
			</div>
		</Card.Header>

		<Card.Content>
			<div class="space-y-4">
				<Button class="w-full" href="#">Skip for now</Button>

				<p class="text-center text-muted-foreground">
					Didn't get the mail?{' '}
					<a href="#" class="text-card-foreground hover:underline"> Resend </a>
				</p>
			</div>
		</Card.Content>
	</Card.Root>
</div>
