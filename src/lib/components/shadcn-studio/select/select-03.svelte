<script lang="ts">
	import { FilmIcon } from '@lucide/svelte';
	import { Label } from '$lib/components/ui/label';
	import { SelectNative } from '$lib/components/ui/select-native';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Native select with icon</Label>
	<div class="group relative">
		<SelectNative {id} type="single" class="ps-9" value="">
			<option value="" disabled>Pick your favorite movie</option>
			<option value="1">Godfather</option>
			<option value="2">A Working Man</option>
			<option value="3">The Dark Knight</option>
			<option value="4">Inception</option>
		</SelectNative>
		<div
			class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50"
		>
			<FilmIcon size={16} aria-hidden="true" />
		</div>
	</div>
</div>
