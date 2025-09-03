<script lang="ts">
	import { ChevronsRightIcon, FolderIcon, FolderOpenIcon, HomeIcon } from '@lucide/svelte';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	let open = $state(false);
</script>

<Breadcrumb>
	<BreadcrumbList>
		<BreadcrumbItem>
			<BreadcrumbLink href="#">
				<HomeIcon class="size-4" />
				<span class="sr-only">Home</span>
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>
			<ChevronsRightIcon />
		</BreadcrumbSeparator>
		<BreadcrumbItem class="flex items-center gap-2">
			<DropdownMenu bind:open>
				<DropdownMenuTrigger class="flex cursor-pointer items-center gap-1">
					{#if open}
						<FolderOpenIcon class="size-4" />
					{:else}
						<FolderIcon class="size-4" />
					{/if}
					<span class="sr-only">{open ? 'Open' : 'Close'}</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem>Documentation</DropdownMenuItem>
					<DropdownMenuItem>Themes</DropdownMenuItem>
					<DropdownMenuItem>GitHub</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</BreadcrumbItem>
		<BreadcrumbSeparator>
			<ChevronsRightIcon />
		</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbPage>Add Document</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
