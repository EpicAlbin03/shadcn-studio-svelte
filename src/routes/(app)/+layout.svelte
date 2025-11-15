<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { UserConfig, UserConfigContext } from '$lib/config/user-config.svelte';
	import { tick } from 'svelte';

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
