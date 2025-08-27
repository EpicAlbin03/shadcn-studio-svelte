<script lang="ts">
	import { Menu } from '@lucide/svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon" class="cursor-pointer lg:hidden">
				<Menu class="size-5" />
				<span class="sr-only">Menu</span>
			</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent align="start">
		<DropdownMenuGroup>
			<DropdownMenuItem>
				{#snippet child({ props })}
					<a {...props} href="/theme-generator" class="cursor-pointer"> Theme Generator </a>
				{/snippet}
			</DropdownMenuItem>
			<DropdownMenuItem>
				{#snippet child({ props })}
					<a {...props} href="/docs/getting-started/introduction" class="cursor-pointer"> Docs </a>
				{/snippet}
			</DropdownMenuItem>
			<DropdownMenuItem>
				{#snippet child({ props })}
					<a {...props} href="/components" class="cursor-pointer"> Components </a>
				{/snippet}
			</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
