<script lang="ts">
	import { ChevronsRightIcon, FileIcon, FolderIcon, HomeIcon } from '@lucide/svelte';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb';
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
		<BreadcrumbItem>
			<BreadcrumbLink href="#" class="flex items-center gap-2">
				<FolderIcon class="size-4" />
				Documents
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>
			<ChevronsRightIcon />
		</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbPage class="flex items-center gap-2">
				<FileIcon class="inline size-4" />
				Add Document
			</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
