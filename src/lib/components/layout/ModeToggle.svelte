<script lang="ts">
	import MoonStarIcon from '@lucide/svelte/icons/moon-star';
	import SunIcon from '@lucide/svelte/icons/sun';
	import { Button } from '$lib/components/ui/button';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import { toggleMode } from '$lib/utils/mode';

	const userConfig = UserConfigContext.get();
</script>

<Button variant="outline" size="icon" class="cursor-pointer" onclick={() => toggleMode(userConfig)}>
	<SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
	/>
	<MoonStarIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle Theme</span>
</Button>
