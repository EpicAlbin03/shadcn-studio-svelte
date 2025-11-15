<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with start add-on</Label>
	<div class="flex rounded-md shadow-xs">
		<span
			class="-z-1 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-sm text-muted-foreground"
		>
			https://
		</span>
		<Input
			{id}
			type="text"
			placeholder="shadcnstudio.com"
			class="-ms-px rounded-s-none shadow-none"
		/>
	</div>
</div>
