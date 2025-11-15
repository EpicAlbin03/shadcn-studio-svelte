<script lang="ts">
	import SidebarHeader from '$lib/registry/components/dashboard-header-01.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Sidebar from '$lib/components/ui/sidebar';
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<Sidebar.Root>
			<div
				class="m-6 h-full rounded-md border border-sidebar-foreground/10 bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sidebar-foreground)10%,transparent),color-mix(in_oklab,var(--sidebar-foreground)10%,transparent)_1px,var(--sidebar)_2px,var(--sidebar)_15px)]"
			></div>
		</Sidebar.Root>
		<div class="flex flex-1 flex-col">
			<SidebarHeader />
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
