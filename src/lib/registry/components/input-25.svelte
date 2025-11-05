<script lang="ts">
	const id = $props.id();
</script>

<div
	class="relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[input:is(:disabled)]:*:pointer-events-none dark:has-aria-invalid:ring-destructive/40"
>
	<label for={id} class="block px-3 pt-1 text-xs font-medium text-foreground dark:bg-input/30">
		Input with inset label
	</label>
	<input
		{id}
		type="email"
		placeholder="Email address"
		class="flex h-9 w-full bg-transparent px-3 pb-1 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none dark:bg-input/30"
	/>
</div>
