<script lang="ts">
	import { UserConfig, UserConfigContext } from '$lib/config/user-config.svelte';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userSettings));
</script>

{@render children?.()}
