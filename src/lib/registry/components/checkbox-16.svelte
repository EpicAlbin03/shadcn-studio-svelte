<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();

	let checked = $state(true);
</script>

<div class="flex items-start gap-2">
	<Checkbox {id} bind:checked />
	<div class="grid gap-2">
		<Label for={id} class="gap-1 leading-4">Accept terms and conditions</Label>
		<p class="text-xs text-muted-foreground">
			By clicking this checkbox, you agree to the terms and conditions.
		</p>
		<div class="flex flex-wrap gap-2">
			<Button variant="outline" size="sm">Reset</Button>
			<Button size="sm">Submit</Button>
		</div>
	</div>
</div>
