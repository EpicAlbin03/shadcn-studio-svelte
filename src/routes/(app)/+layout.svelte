<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	import '../../app.css';
	import { UserConfig, UserConfigContext } from '$lib/config/user-config.svelte';
	import { TooltipProvider } from '$lib/components/ui/tooltip';
	import MetaData from '$lib/components/MetaData.svelte';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userSettings));

	const title = 'Craft Stunning Shadcn UI, Lightning Fast';
	const description =
		'A complete Shadcn UI collection of customizable components, blocks & templates with powerful theme generator for faster customization.';
</script>

<MetaData {title} {description} />

<ModeWatcher defaultMode="system" disableTransitions themeStorageKey={''} />
<Toaster duration={3000} />

<TooltipProvider>
	{@render children?.()}
</TooltipProvider>
