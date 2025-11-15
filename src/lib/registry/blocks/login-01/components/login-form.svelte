<script lang="ts">
	import { EyeIcon, EyeOffIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import * as Field from '$lib/components/ui/field/index.js';

	let isVisible = $state(false);
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
	<Field.Field>
		<Field.Label for="userEmail" class="leading-5">Email address*</Field.Label>
		<Input type="email" id="userEmail" placeholder="Enter your email address" />
	</Field.Field>

	<Field.Field class="w-full">
		<Field.Label for="password" class="leading-5">Password*</Field.Label>
		<div class="relative">
			<Input
				id="password"
				type={isVisible ? 'text' : 'password'}
				placeholder="••••••••••••••••"
				class="pr-9"
			/>
			<Button
				variant="ghost"
				size="icon"
				onclick={() => (isVisible = !isVisible)}
				class="absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
			>
				{#if isVisible}
					<EyeOffIcon />
				{:else}
					<EyeIcon />
				{/if}
				<span class="sr-only">{isVisible ? 'Hide password' : 'Show password'}</span>
			</Button>
		</div>
	</Field.Field>

	<div class="flex items-center justify-between gap-y-2">
		<Field.Field orientation="horizontal" class="w-fit">
			<Checkbox id="rememberMe" class="size-6" />
			<Field.Label for="rememberMe" class="font-normal text-muted-foreground">
				Remember Me
			</Field.Label>
		</Field.Field>

		<a href="#" class="hover:underline"> Forgot Password? </a>
	</div>

	<Button class="w-full" type="submit">Sign in to Shadcn Studio</Button>
</form>
