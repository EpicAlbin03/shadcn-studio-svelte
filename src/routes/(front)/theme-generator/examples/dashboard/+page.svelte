<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/examples/dashboard/components/AppSidebar.svelte';
	import { data } from '$lib/components/examples/dashboard/data.js';
	import SiteHeader from '$lib/components/examples/dashboard/components/SiteHeader.svelte';
	import SectionCards from '$lib/components/examples/dashboard/components/SectionCards.svelte';
	import ChartAreaInteractive from '$lib/components/examples/dashboard/components/ChartAreaInteractive.svelte';
	import DataTable from '$lib/components/examples/dashboard/components/DataTable.svelte';
</script>

<div class="md:hidden">
	<img
		src="/examples/dashboard-light.png"
		width={1280}
		height={843}
		alt="Dashboard"
		class="block dark:hidden"
	/>
	<img
		src="/examples/dashboard-dark.png"
		width={1280}
		height={843}
		alt="Dashboard"
		class="hidden dark:block"
	/>
</div>
<Sidebar.Provider
	class="hidden md:flex"
	style="--sidebar-width: calc(var(--spacing) * 64); --header-height: calc(var(--spacing) * 12 + 1px);"
>
	<AppSidebar variant="sidebar" />
	<Sidebar.Inset>
		<SiteHeader />
		<div class="flex flex-1 flex-col">
			<div class="@container/main flex flex-1 flex-col gap-2">
				<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<SectionCards />
					<div class="px-4 lg:px-6">
						<ChartAreaInteractive />
					</div>
					<DataTable {data} />
				</div>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
