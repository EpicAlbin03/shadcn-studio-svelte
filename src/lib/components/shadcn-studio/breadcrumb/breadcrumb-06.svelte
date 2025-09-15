<script lang="ts">
	import { ChevronDown, HomeIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					<HomeIcon class="size-3" />
					Home
				</Badge>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>/</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Documents
				</Badge>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>/</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Page>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="flex items-center gap-1">
						Add Document
						<ChevronDown class="size-4" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="start">
						<DropdownMenu.Item>Documentation</DropdownMenu.Item>
						<DropdownMenu.Item>Themes</DropdownMenu.Item>
						<DropdownMenu.Item>GitHub</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
