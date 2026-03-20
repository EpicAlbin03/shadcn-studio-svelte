<script lang="ts">
	import { tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { UserConfig, UserConfigContext } from '$lib/config/user-config.svelte';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userSettings));

	afterNavigate(async ({ to }) => {
		if (to?.url.hash) {
			await tick();
			setTimeout(() => {
				const element = document.getElementById(to.url.hash.slice(1));
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 100);
		}
	});
</script>

{@render children?.()}
