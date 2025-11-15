<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import DashboardSidebar from '$lib/registry/components/dashboard-sidebar-01.svelte';
	import DashboardHeader from '$lib/registry/components/dashboard-header-01.svelte';
	import DashboardFooter from '$lib/registry/components/dashboard-footer-01.svelte';
</script>

<DashboardSidebar />
<div class="flex flex-1 flex-col">
	<DashboardHeader />
	<main class="size-full flex-1 px-4 py-6 sm:px-6">
		<Card.Root class="h-250">
			<Card.Content class="h-full">
				<div
					class="h-full rounded-md border border-card-foreground/10 bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]"
				></div>
			</Card.Content>
		</Card.Root>
	</main>
	<DashboardFooter />
</div>
