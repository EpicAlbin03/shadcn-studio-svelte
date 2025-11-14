<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { cn } from '$lib/utils';
	import { applyThemeStyles } from '$lib/utils/theme';
	import type { ThemeStyles } from '$lib/types/theme';
	// import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import {
		MODE_STORAGE_KEY,
		parseUserSettings,
		USER_SETTINGS_COOKIE_NAME
	} from '$lib/config/user-config.svelte';
	import type { PageProps } from './$types.js';
	// import { useResizeObserver } from 'runed';
	// import { RESIZE_MESSAGE, REQUEST_RESIZE_MESSAGE } from '$lib/utils/blocks';

	let { data }: PageProps = $props();
	let viewContainer = $state<HTMLDivElement | null>(null);

	const getStoredThemeStyles = (): ThemeStyles | null => {
		const cookieEntry = document.cookie
			.split(';')
			.map((cookie) => cookie.trim())
			.find((cookie) => cookie.startsWith(`${USER_SETTINGS_COOKIE_NAME}=`));

		if (!cookieEntry) return null;

		try {
			const userSettings = parseUserSettings(document.cookie);
			return userSettings.activeTheme.cssVars ?? null;
		} catch (error) {
			console.error('Failed to parse user settings cookie', error);
			return null;
		}
	};

	const applyStoredTheme = () => {
		const themeStyles = getStoredThemeStyles();
		if (themeStyles) {
			applyThemeStyles(themeStyles);
		}
	};

	const handleStorage = (event: StorageEvent) => {
		if (event.key === MODE_STORAGE_KEY) {
			applyStoredTheme();
		}
	};

	// const handleMessage = (event: MessageEvent<{ type: string; name: string }>) => {
	// 	if (event.origin !== window.location.origin) return;
	// 	if (event.data?.type !== REQUEST_RESIZE_MESSAGE) return;
	// 	if (event.data.name !== data.meta.name) return;
	// 	if (!viewContainer) return;
	// 	postHeight(viewContainer.getBoundingClientRect().height);
	// };

	// const postHeight = (height: number) => {
	// 	if (!height || height < 0) return;

	// 	const nextHeight = Math.ceil(height);
	// 	window.parent?.postMessage(
	// 		{
	// 			type: RESIZE_MESSAGE,
	// 			name: data.meta.name,
	// 			height: nextHeight
	// 		},
	// 		window.location.origin
	// 	);
	// };

	// if (browser) {
	// 	useResizeObserver(
	// 		() => viewContainer,
	// 		([entry]) => {
	// 			if (entry) {
	// 				postHeight(entry.contentRect.height);
	// 			}
	// 		}
	// 	);
	// }

	onMount(() => {
		applyStoredTheme();
		// if (viewContainer) {
		// 	postHeight(viewContainer.getBoundingClientRect().height);
		// }
	});
</script>

<!-- <svelte:window onstorage={handleStorage} onmessage={handleMessage} /> -->
<svelte:window onstorage={handleStorage} />

<MetaData title={data.meta.name} description={data.meta.description} ogType="article" />

<div class={cn('bg-background', data.meta?.className)} bind:this={viewContainer}>
	<data.component />
</div>
