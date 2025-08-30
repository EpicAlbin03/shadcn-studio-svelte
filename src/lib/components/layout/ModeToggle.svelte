<script lang="ts">
	import { MoonStar, Sun } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from '$lib/utils/mode';
	import { UserConfigContext } from '$lib/config/user-config.svelte';

	const userConfig = UserConfigContext.get();
</script>

<Button variant="outline" size="icon" class="cursor-pointer" onclick={() => toggleMode(userConfig)}>
	<Sun
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	/>
	<MoonStar
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle Theme</span>
</Button>
