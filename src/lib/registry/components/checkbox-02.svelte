<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	const id = $props.id();
</script>

<div class="flex items-center gap-2">
	<Checkbox {id} indeterminate />
	<Label for={id}>Indeterminate checkbox</Label>
</div>
