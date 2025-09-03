<script lang="ts">
	import { HomeIcon } from '@lucide/svelte';
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
			<BreadcrumbLink href="#" class="flex items-center gap-2">
				<HomeIcon class="size-4" />
				Home
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>/</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbLink href="#">Documents</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>/</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbPage>Add Document</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
