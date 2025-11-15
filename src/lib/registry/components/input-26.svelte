<script lang="ts">
	import { EyeIcon, EyeOffIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let isVisible = $state(false);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Password input</Label>
	<div class="relative">
		<Input {id} type={isVisible ? 'text' : 'password'} placeholder="Password" class="pe-9" />
		<Button
			variant="ghost"
			size="icon"
			onclick={() => (isVisible = !isVisible)}
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
</div>
