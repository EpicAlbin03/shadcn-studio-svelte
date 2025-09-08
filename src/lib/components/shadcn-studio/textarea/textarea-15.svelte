<script lang="ts">
	const id = $props.id();
</script>

<div
	class="relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[input:is(:disabled)]:*:pointer-events-none dark:has-aria-invalid:ring-destructive/40"
>
	<label for={id} class="block px-3 pt-1 text-xs font-medium text-foreground">
		Textarea with inset label
	</label>
	<textarea
		{id}
		class="flex min-h-14 w-full px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
	></textarea>
</div>
