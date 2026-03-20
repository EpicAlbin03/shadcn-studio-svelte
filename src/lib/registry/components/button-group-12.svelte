<script lang="ts">
	import BoxIcon from '@lucide/svelte/icons/box';
	import ChartBarBigIcon from '@lucide/svelte/icons/chart-bar-big';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit rounded-md rtl:space-x-reverse">
	<Button variant="ghost" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		<SettingsIcon />
		Settings
	</Button>
	<Button variant="ghost" class="rounded-none shadow-none focus-visible:z-10">
		<BoxIcon />
		Dashboard
	</Button>
	<Button variant="ghost" class="rounded-none rounded-e-md shadow-none focus-visible:z-10">
		<ChartBarBigIcon />
		Analytics
	</Button>
</div>
