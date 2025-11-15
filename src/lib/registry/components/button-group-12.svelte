<script lang="ts">
	import { BoxIcon, ChartBarBigIcon, SettingsIcon } from '@lucide/svelte';
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
