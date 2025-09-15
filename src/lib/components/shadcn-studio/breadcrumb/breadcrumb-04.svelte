<script lang="ts">
	import { DotIcon } from '@lucide/svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!">Home</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<DotIcon class="size-4" />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!">Documents</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<DotIcon class="size-4" />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Page>Add Document</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
