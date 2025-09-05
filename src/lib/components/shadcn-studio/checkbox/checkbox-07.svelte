<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-start gap-2">
	<Checkbox {id} bind:checked />
	<div class="grid gap-2">
		<Label for={id} class="leading-4">Accept terms and conditions</Label>
		<p class="text-xs text-muted-foreground">
			By clicking this checkbox, you agree to the terms and conditions.
		</p>
	</div>
</div>
