<script lang="ts">
	import { onMount } from 'svelte';
	import MetaData from '$lib/components/MetaData.svelte';
	import {
		MODE_STORAGE_KEY,
		parseUserSettings,
		USER_SETTINGS_COOKIE_NAME
	} from '$lib/config/user-config.svelte';
	import { applyThemeStyles } from '$lib/theme/theme.js';
	import type { ThemeStyles } from '$lib/theme/theme.types.js';
	import { cn } from '$lib/utils';
	import type { PageProps } from './$types.js';

	let { data }: PageProps = $props();
	const BlockComponent = $derived(data.blockComponent);
	const blockData = $derived(data.blockData);

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

	onMount(() => {
		applyStoredTheme();
	});
</script>

<svelte:window onstorage={handleStorage} />

<MetaData title={blockData.name} description={blockData.description} ogType="article" />

<div class={cn('bg-background', blockData.class)}>
	<BlockComponent />
</div>
