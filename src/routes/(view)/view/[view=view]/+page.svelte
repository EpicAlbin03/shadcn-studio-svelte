<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte';
	import { cn } from '$lib/utils';
	import { applyThemeStyles } from '$lib/utils/theme';
	import type { ThemeStyles } from '$lib/types/theme';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import {
		MODE_STORAGE_KEY,
		parseUserSettings,
		USER_SETTINGS_COOKIE_NAME
	} from '$lib/config/user-config.svelte';
	import type { PageProps } from './$types.js';

	let { data }: PageProps = $props();

	const getStoredThemeStyles = (): ThemeStyles | null => {
		if (!browser) return null;
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
		if (!browser) return;
		const themeStyles = getStoredThemeStyles();
		if (!themeStyles) return;
		applyThemeStyles(themeStyles);
	};

	onMount(() => {
		applyStoredTheme();
	});

	const handleStorage = (event: StorageEvent) => {
		if (event.key === MODE_STORAGE_KEY) {
			applyStoredTheme();
		}
	};
</script>

<svelte:window onstorage={handleStorage} />

<MetaData title={data.meta.name} description={data.meta.description} ogType="article" />

<div class={cn('bg-background', data.meta?.className)}>
	<data.component />
</div>
