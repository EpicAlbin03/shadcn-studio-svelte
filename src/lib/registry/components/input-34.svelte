<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const maxLength = 50;

	let value = $state('');
	let characterCount = $derived(value.length);

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with character limit</Label>
	<div class="relative">
		<Input
			{id}
			type="text"
			placeholder="Username"
			bind:value
			maxlength={maxLength}
			class="peer pe-14"
		/>
		<span
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs text-muted-foreground tabular-nums peer-disabled:opacity-50"
		>
			{characterCount}/{maxLength}
		</span>
	</div>
</div>
