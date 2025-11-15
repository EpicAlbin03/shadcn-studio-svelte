<script lang="ts">
	import { SelectNative } from '$lib/components/ui/select-native';

	const id = $props.id();
</script>

<div
	class="relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none dark:has-aria-invalid:ring-destructive/40"
>
	<label for={id} class="block px-3 pt-1 text-xs font-medium text-foreground">
		Native select with inset label
	</label>
	<SelectNative
		{id}
		type="single"
		value=""
		class="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
	>
		<option value="" disabled>Pick your favorite movie</option>
		<option value="1">Interstellar</option>
		<option value="2">Dune</option>
		<option value="3">The Matrix</option>
		<option value="4">Catch Me If You Can</option>
	</SelectNative>
</div>
