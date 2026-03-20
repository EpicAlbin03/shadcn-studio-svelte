<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import { Button } from '$lib/components/ui/button';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
</script>

<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="icon" class="lg:hidden">
						<MenuIcon class="size-5" />
						<span class="sr-only">MenuIcon</span>
					</Button>
				{/snippet}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-50 gap-4 p-2">
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
