<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { SelectNative } from '$lib/components/ui/select-native';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native multiple select</Label>
	<div class="overflow-hidden rounded-md border border-input">
		<SelectNative {id} type="multiple" multiple class="rounded-none border-none">
			<option value="1">Vegetarian</option>
			<option value="2">Vegan</option>
			<option value="3">Gluten-Free</option>
			<option value="4">Halal</option>
			<option value="5">Kosher</option>
			<option value="6">Dairy-Free</option>
		</SelectNative>
	</div>
</div>
