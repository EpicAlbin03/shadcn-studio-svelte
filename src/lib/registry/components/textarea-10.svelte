<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="w-full max-w-xs space-y-2">
	<Textarea class="min-h-10 py-1.5" placeholder="Small Textarea" />
	<Textarea placeholder="Default(Medium) Textarea" />
	<Textarea class="min-h-20 py-2.5" placeholder="Large Textarea" />
</div>
