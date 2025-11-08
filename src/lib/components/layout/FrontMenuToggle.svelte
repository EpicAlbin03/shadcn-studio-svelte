<script lang="ts">
	import { Menu } from '@lucide/svelte';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { Button } from '$lib/components/ui/button';
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="icon" class="lg:hidden">
						<Menu class="size-5" />
						<span class="sr-only">Menu</span>
					</Button>
				{/snippet}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="/theme-generator">Theme Generator</NavigationMenu.Link>
						<NavigationMenu.Link href="/docs/getting-started/introduction">Docs</NavigationMenu.Link
						>
						<NavigationMenu.Link href="/components">Components</NavigationMenu.Link>
						<NavigationMenu.Link href="/blocks">Blocks</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
