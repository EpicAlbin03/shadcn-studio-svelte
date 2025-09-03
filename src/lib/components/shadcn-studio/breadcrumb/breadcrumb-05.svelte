<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
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
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Home
				</Badge>
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator />
		<BreadcrumbItem>
			<BreadcrumbLink href="#">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Documents
				</Badge>
			</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbSeparator />
		<BreadcrumbItem>
			<BreadcrumbPage>
				<Badge variant="outline" class="rounded-full border-primary text-primary">
					Add Document
				</Badge>
			</BreadcrumbPage>
		</BreadcrumbItem>
	</BreadcrumbList>
</Breadcrumb>
