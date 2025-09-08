<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();
</script>

<div class="group relative w-full max-w-xs space-y-2">
	<label
		for={id}
		class="origin-start absolute top-0 block translate-y-2 cursor-text px-2 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-foreground dark:has-aria-invalid:ring-destructive/40"
	>
		<span class="inline-flex bg-background px-1">Textarea with floating label</span>
	</label>
	<Textarea {id} placeholder=" " class="!bg-background" />
</div>
