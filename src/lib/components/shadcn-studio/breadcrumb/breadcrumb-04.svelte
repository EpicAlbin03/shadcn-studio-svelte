<script lang="ts">
	import { DotIcon } from '@lucide/svelte';
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
			<BreadcrumbLink href="#">Home</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>
			<DotIcon class="size-4" />
		</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbLink href="#">Documents</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>
			<DotIcon class="size-4" />
		</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbPage>Add Document</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
