<script lang="ts">
	import { ChevronsRightIcon, FolderIcon, FolderOpenIcon, HomeIcon } from '@lucide/svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	let open = $state(false);
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#">
				<HomeIcon class="size-4" />
				<span class="sr-only">Home</span>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<ChevronsRightIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item class="flex items-center gap-2">
			<DropdownMenu.Root bind:open>
				<DropdownMenu.Trigger class="flex cursor-pointer items-center gap-1">
					{#if open}
						<FolderOpenIcon class="size-4" />
					{:else}
						<FolderIcon class="size-4" />
					{/if}
					<span class="sr-only">{open ? 'Open' : 'Close'}</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="start">
					<DropdownMenu.Item>Documentation</DropdownMenu.Item>
					<DropdownMenu.Item>Themes</DropdownMenu.Item>
					<DropdownMenu.Item>GitHub</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<ChevronsRightIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Page>Add Document</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
