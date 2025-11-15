<script lang="ts">
	import { SendHorizontalIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end inline button</Label>
	<div class="relative">
		<Input {id} type="email" placeholder="Email address" class="pe-9" />
		<Button
			variant="ghost"
			size="icon"
			class="absolute inset-y-0 end-0 rounded-s-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50"
		>
			<SendHorizontalIcon />
			<span class="sr-only">Subscribe</span>
		</Button>
	</div>
</div>
