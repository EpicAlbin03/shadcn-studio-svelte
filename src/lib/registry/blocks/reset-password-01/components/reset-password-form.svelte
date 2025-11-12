<script lang="ts">
	import { EyeIcon, EyeOffIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Field from '$lib/components/ui/field/index.js';

	let isPasswordVisible = $state(false);
	let isConfirmPasswordVisible = $state(false);
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
	<Field.Field>
		<Field.Label for="userEmail" class="leading-5">Email address*</Field.Label>
		<Input type="email" id="userEmail" placeholder="Enter your email address" />
	</Field.Field>

	<Field.Field class="w-full">
		<Field.Label for="password" class="leading-5">New Password*</Field.Label>
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

	<Button class="w-full" type="submit">Set New Password</Button>
</form>
