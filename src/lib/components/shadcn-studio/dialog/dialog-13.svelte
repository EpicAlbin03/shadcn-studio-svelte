<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<Dialog.Root>
	<form>
		<Dialog.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Sign Up</Button>
			{/snippet}
		</Dialog.Trigger>
		<Dialog.Content
			class="bg-gradient-to-b from-green-100 to-card to-40% [background-size:100%_101%] sm:max-w-sm dark:from-green-900"
		>
			<Dialog.Header class="items-center">
				<Dialog.Title>Sign Up</Dialog.Title>
				<Dialog.Description>Start your 60-day free trial now.</Dialog.Description>
			</Dialog.Header>
			<form class="flex flex-col gap-4">
				<div class="grid grid-cols-2 gap-4">
					<div class="grid gap-3">
						<Label for="first-name">First Name</Label>
						<Input id="first-name" name="firstname" placeholder="John" />
					</div>
					<div class="grid gap-3">
						<Label for="last-name">Last Name</Label>
						<Input id="last-name" name="lastname" placeholder="Doe" />
					</div>
				</div>
				<div class="grid gap-3">
					<Label for="email">Email</Label>
					<Input type="email" id="email" name="useremail" placeholder="example@gmail.com" />
				</div>
				<div class="grid gap-3">
					<Label for="password">Password</Label>
					<Input type="password" id="password" name="userpassword" placeholder="Password" />
				</div>
				<div class="flex items-center gap-2">
					<Checkbox
						{id}
						class="focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 dark:text-white dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 dark:data-[state=checked]:bg-green-400"
						checked
					/>
					<Label for={id} class="gap-1">
						I agree with
						<a href="#" class="underline hover:no-underline"> condition </a>
						and
						<a href="#" class="underline hover:no-underline"> privacy policy </a>
					</Label>
				</div>
			</form>
			<Dialog.Footer class="pt-4 sm:flex-col">
				<Button
					class="bg-green-600 text-white hover:bg-green-600 focus-visible:ring-green-600 dark:bg-green-400 dark:hover:bg-green-400 dark:focus-visible:ring-green-400"
				>
					Start your trial
				</Button>
				<div
					class="flex items-center gap-4 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border"
				>
					<span class="text-xs text-muted-foreground">Or</span>
				</div>
				<Button variant="outline">
					<svg xmlns="http://www.w3.org/2000/svg" width="256" height="262" viewBox="0 0 256 262">
						<path
							fill="#4285f4"
							d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
						/>
						<path
							fill="#34a853"
							d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
						/>
						<path
							fill="#fbbc05"
							d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
						/>
						<path
							fill="#eb4335"
							d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
						/>
					</svg>
					<span class="flex justify-center">Continue with Google</span>
				</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</form>
</Dialog.Root>
