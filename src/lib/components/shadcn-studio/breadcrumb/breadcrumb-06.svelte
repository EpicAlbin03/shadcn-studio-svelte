<script lang="ts">
	import { ChevronDown, HomeIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
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
</script>

<Breadcrumb>
	<BreadcrumbList>
		<BreadcrumbItem>
			<BreadcrumbLink href="#">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					<HomeIcon class="size-3" />
					Home
				</Badge>
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>/</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbLink href="#">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Documents
				</Badge>
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator>/</BreadcrumbSeparator>
		<BreadcrumbItem>
			<BreadcrumbPage>
				<DropdownMenu>
					<DropdownMenuTrigger class="flex items-center gap-1">
						Add Document
						<ChevronDown class="size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						<DropdownMenuItem>Documentation</DropdownMenuItem>
						<DropdownMenuItem>Themes</DropdownMenuItem>
						<DropdownMenuItem>GitHub</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
