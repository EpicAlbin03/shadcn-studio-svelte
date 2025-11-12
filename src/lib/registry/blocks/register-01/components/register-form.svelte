<script lang="ts">
	import { EyeIcon, EyeOffIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import * as Field from '$lib/components/ui/field/index.js';

	let isPasswordVisible = $state(false);
	let isConfirmPasswordVisible = $state(false);
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
	<Field.Field>
		<Field.Label for="username" class="leading-5">Username*</Field.Label>
		<Input type="text" id="username" placeholder="Enter your username" />
	</Field.Field>

	<Field.Field>
		<Field.Label for="userEmail" class="leading-5">Email address*</Field.Label>
		<Input type="email" id="userEmail" placeholder="Enter your email address" />
	</Field.Field>

	<Field.Field class="w-full">
		<Field.Label for="password" class="leading-5">Password*</Field.Label>
		<div class="relative">
			<Input
				id="password"
				type={isPasswordVisible ? 'text' : 'password'}
				placeholder="••••••••••••••••"
				class="pr-9"
			/>
			<Button
				variant="ghost"
				size="icon"
				onclick={() => (isPasswordVisible = !isPasswordVisible)}
				class="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
			>
				{#if isPasswordVisible}
					<EyeOffIcon />
				{:else}
					<EyeIcon />
				{/if}
				<span class="sr-only">{isPasswordVisible ? 'Hide password' : 'Show password'}</span>
			</Button>
		</div>
	</Field.Field>

	<Field.Field class="w-full">
		<Field.Label for="confirmPassword" class="leading-5">Confirm Password*</Field.Label>
		<div class="relative">
			<Input
				id="confirmPassword"
				type={isConfirmPasswordVisible ? 'text' : 'password'}
				placeholder="••••••••••••••••"
				class="pr-9"
			/>
			<Button
				variant="ghost"
				size="icon"
				onclick={() => (isConfirmPasswordVisible = !isConfirmPasswordVisible)}
				class="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
			>
				{#if isConfirmPasswordVisible}
					<EyeOffIcon />
				{:else}
					<EyeIcon />
				{/if}
				<span class="sr-only">{isConfirmPasswordVisible ? 'Hide password' : 'Show password'}</span>
			</Button>
		</div>
	</Field.Field>

	<div class="flex items-center gap-3">
		<Checkbox id="rememberMe" class="size-6" />
		<Field.Label for="rememberMe" class="font-normal">
			<span class="text-muted-foreground">I agree to</span>
			<a href="#"> privacy policy & terms</a>
		</Field.Label>
	</div>

	<Button class="w-full" type="submit">Sign Up to Shadcn Studio</Button>
</form>
