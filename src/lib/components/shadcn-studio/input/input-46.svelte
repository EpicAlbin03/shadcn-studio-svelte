<script lang="ts">
	import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';

	const requirements = [
		{ regex: /.{12,}/, text: 'At least 12 characters' },
		{ regex: /[a-z]/, text: 'At least 1 lowercase letter' },
		{ regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
		{ regex: /[0-9]/, text: 'At least 1 number' },
		{
			regex: /[!$lib#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/,
			text: 'At least 1 special character'
		}
	];

	let password = $state('');
	let isVisible = $state(false);

	const id = $props.id();

	const toggleVisibility = () => (isVisible = !isVisible);

	const strength = $derived(
		requirements.map((req) => ({
			met: req.regex.test(password),
			text: req.text
		}))
	);
	const strengthScore = $derived(strength.filter((req) => req.met).length);

	const getColor = (score: number) => {
		if (score === 0) return 'bg-border';
		if (score <= 1) return 'bg-destructive';
		if (score <= 2) return 'bg-orange-500 ';
		if (score <= 3) return 'bg-amber-500';
		if (score === 4) return 'bg-yellow-400';

		return 'bg-green-500';
	};

	const getText = (score: number) => {
		if (score === 0) return 'Enter a password';
		if (score <= 2) return 'Weak password';
		if (score <= 3) return 'Medium password';
		if (score === 4) return 'Strong password';

		return 'Very strong password';
	};
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with password strength</Label>
	<div class="relative mb-3">
		<Input
			{id}
			type={isVisible ? 'text' : 'password'}
			placeholder="Password"
			bind:value={password}
			class="pe-9"
		/>
		<Button
			variant="ghost"
			size="icon"
			onclick={toggleVisibility}
			class="absolute inset-y-0 end-0 rounded-s-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
		>
			{#if isVisible}
				<EyeOffIcon />
			{:else}
				<EyeIcon />
			{/if}
			<span class="sr-only">{isVisible ? 'Hide password' : 'Show password'}</span>
		</Button>
	</div>

	<div class="mb-4 flex h-1 w-full gap-1">
		{#each Array.from({ length: 5 }) as item, index}
			<span
				class={cn(
					'h-full flex-1 rounded-full transition-all duration-500 ease-out',
					index < strengthScore ? getColor(strengthScore) : 'bg-border'
				)}
			></span>
		{/each}
	</div>

	<p class="text-sm font-medium text-foreground">{getText(strengthScore)}. Must contain:</p>

	<ul class="mb-4 space-y-1.5">
		{#each strength as req}
			<li class="flex items-center gap-2">
				{#if req.met}
					<CheckIcon class="size-4 text-green-600 dark:text-green-400" />
				{:else}
					<XIcon class="size-4 text-muted-foreground" />
				{/if}
				<span
					class={cn(
						'text-xs',
						req.met ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'
					)}
				>
					{req.text}
					<span class="sr-only">{req.met ? ' - Requirement met' : ' - Requirement not met'}</span>
				</span>
			</li>
		{/each}
	</ul>

	<p class="text-xs text-muted-foreground">
		Inspired by{' '}
		<a
			class="underline hover:text-foreground"
			href="https://flyonui.com/docs/advanced-forms/strong-password/#indicator-and-hints"
			target="_blank"
			rel="noopener noreferrer"
		>
			FlyonUI
		</a>
	</p>
</div>
