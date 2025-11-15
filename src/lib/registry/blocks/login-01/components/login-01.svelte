<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Logo from '$lib/registry/components/logo.svelte';
	import AuthBackgroundShape from '$lib/registry/lib/assets/svg/auth-background-shape.svelte';
	import LoginForm from './login-form.svelte';
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
				<Card.Title class="mb-1.5 text-2xl">Sign in to Shadcn Studio</Card.Title>
				<Card.Description class="text-base">Ship Faster and Focus on Growth.</Card.Description>
			</div>
		</Card.Header>

		<Card.Content>
			<p class="mb-6 text-muted-foreground">
				Login with{' '}
				<a href="#" class="text-card-foreground hover:underline"> Magic Link </a>
			</p>

			<div class="mb-6 flex flex-wrap gap-4 sm:gap-6">
				<Button variant="outline" class="grow">Login as User</Button>
				<Button variant="outline" class="grow">Login as Admin</Button>
			</div>

			<div class="space-y-4">
				<LoginForm />

				<p class="text-center text-muted-foreground">
					New on our platform?{' '}
					<a href="#" class="text-card-foreground hover:underline"> Create an account </a>
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
