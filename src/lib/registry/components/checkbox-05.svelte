<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
</script>

<div class="flex items-center gap-2">
	<Checkbox checked aria-label="Size default" />
	<Checkbox class="size-5" checked aria-label="Size small" />
	<Checkbox class="size-6" checked aria-label="Size large" />
</div>
