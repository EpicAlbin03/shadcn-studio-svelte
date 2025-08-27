<script lang="ts">
	import { MoonStar, Sun } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" size="icon" class="cursor-pointer" onclick={toggleMode}>
	<Sun class="scale-100 dark:scale-0" />
	<MoonStar class="scale-0 dark:scale-100" />
	<span class="sr-only">Toggle Theme</span>
</Button>
