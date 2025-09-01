<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	// import favicon from '/favicon.svg';
	import { UserConfig, UserConfigContext } from '$lib/config/user-config.svelte';
	import { watch } from 'runed';
	import { applyThemeStyles } from '$lib/utils/theme';
	import { TooltipProvider } from '$lib/components/ui/tooltip';

	let { children } = $props();

	const userConfig = UserConfigContext.set(new UserConfig());

	watch.pre(
		() => userConfig.activeTheme,
		() => {
			applyThemeStyles(userConfig.activeTheme.cssVars);
		}
	);
</script>

<svelte:head>
	<title>Shadcn Studio Svelte - Craft Stunning Shadcn UI, Lightning Fast</title>
	<meta
		name="description"
		content="Shadcn Studio Svelte, a complete Shadcn UI collection of customizable components, blocks & templates with powerful theme generator for faster customization."
	/>
	<meta
		name="keywords"
		content="shadcn ui, shadcn studio, shadcn studio svelte, shadcn components, shadcn blocks, shadcn templates, shadcn figma, shadcn themes, shadcn/ui"
	/>

	<!-- Favicons -->
	<!-- <link rel="icon" href={favicon} /> -->
	<!-- <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.shadcnstudio.com/ss-assets/favicon/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.shadcnstudio.com/ss-assets/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/x-icon" sizes="48x48" href="https://cdn.shadcnstudio.com/ss-assets/favicon/favicon.ico" />
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://cdn.shadcnstudio.com/ss-assets/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.shadcnstudio.com/ss-assets/favicon/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="https://cdn.shadcnstudio.com/ss-assets/favicon/android-chrome-512x512.png" /> -->

	<!-- Open Graph -->
	<!-- <meta property="og:title" content="Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast" />
  <meta property="og:description" content="Shadcn Studio, a complete Shadcn UI collection of customizable components, blocks & templates with powerful theme generator for faster customization." />
  <meta property="og:url" content="https://shadcnstudio.com" />
  <meta property="og:image" content="https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast" /> -->

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Shadcn Studio Svelte - Craft Stunning Shadcn UI, Lightning Fast"
	/>
	<meta
		name="twitter:description"
		content="Shadcn Studio Svelte, a complete Shadcn UI collection of customizable components, blocks & templates with powerful theme generator for faster customization."
	/>

	<!-- Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Noto+Serif+Georgian:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Gamja+Flower&family=Delius+Swash+Caps&family=Gabriela&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher defaultMode="system" disableTransitions themeStorageKey={''} />
<Toaster duration={3000} position="top-right" closeButton />

<TooltipProvider>
	{@render children?.()}
</TooltipProvider>
