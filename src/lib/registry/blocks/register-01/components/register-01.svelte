<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Logo from '$lib/registry/components/logo.svelte';
	import AuthBackgroundShape from '$lib/registry/lib/assets/svg/auth-background-shape.svelte';
	import RegisterForm from './register-form.svelte';
</script>

<div
	class="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8"
>
	<div class="absolute">
		<AuthBackgroundShape />
	</div>

	<Card.Root class="z-1 w-full border-none shadow-md sm:max-w-lg">
		<Card.Header class="gap-6">
			<Logo class="gap-3" />

			<div>
				<Card.Title class="mb-1.5 text-2xl">Sign Up to Shadcn studio</Card.Title>
				<Card.Description class="text-base">Ship Faster and Focus on Growth.</Card.Description>
			</div>
		</Card.Header>

		<Card.Content>
			<div class="space-y-4">
				<RegisterForm />

				<p class="text-center text-muted-foreground">
					Already have an account?{' '}
					<a href="#" class="text-card-foreground hover:underline"> Sign in instead </a>
				</p>

				<div class="flex items-center gap-4">
					<Separator class="flex-1" />
					<p>or</p>
					<Separator class="flex-1" />
				</div>

				<Button variant="ghost" class="w-full" href="#">Sign in with google</Button>
			</div>
		</Card.Content>
	</Card.Root>
</div>
