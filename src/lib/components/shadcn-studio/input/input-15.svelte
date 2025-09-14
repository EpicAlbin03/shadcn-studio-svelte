<script lang="ts">
	import { MailIcon } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end icon</Label>
	<div class="relative">
		<Input {id} type="email" placeholder="Email address" class="peer pe-9" />
		<div
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50"
		>
			<MailIcon class="size-4" />
			<span class="sr-only">Email</span>
		</div>
	</div>
</div>
