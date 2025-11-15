<script lang="ts">
	import DashboardSidebar from '$lib/registry/components/dashboard-sidebar-01.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<DashboardSidebar />
		<div class="flex flex-1 flex-col">
			<header
				class="sticky top-0 z-50 flex h-13.75 items-center justify-between gap-6 border-b bg-card px-4 py-2 sm:px-6"
			>
				<Sidebar.Trigger class="[&_svg]:!size-5" />
			</header>
			<main class="size-full flex-1 px-4 py-6 sm:px-6">
				<Card.Root class="h-250">
					<Card.Content class="h-full">
						<div
							class="h-full rounded-md border border-card-foreground/10 bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]"
						></div>
					</Card.Content>
				</Card.Root>
			</main>
			<footer class="h-10 border-t bg-card px-4 sm:px-6">
				<div
					class="h-full border-card-foreground/10 bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]"
				></div>
			</footer>
		</div>
	</Sidebar.Provider>
</div>
