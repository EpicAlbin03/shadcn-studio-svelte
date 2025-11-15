<script lang="ts">
	import { Input } from '$lib/components/ui/input';

	const id = $props.id();
</script>

<div class="group relative w-full max-w-xs">
	<label
		for={id}
		class="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm text-muted-foreground transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
	>
		<span class="inline-flex bg-background px-1">Input with floating label</span>
	</label>
	<Input {id} type="email" placeholder=" " class="dark:bg-background" />
</div>
