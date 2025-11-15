<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Home
				</Badge>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#">
				<Badge variant="outline" class="rounded-full text-muted-foreground hover:text-foreground">
					Documents
				</Badge>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>
				<Badge variant="outline" class="rounded-full border-primary text-primary">
					Add Document
				</Badge>
			</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
