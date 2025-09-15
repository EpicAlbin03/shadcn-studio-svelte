<script lang="ts">
	import { ChevronsRightIcon, FileIcon, FolderIcon, HomeIcon } from '@lucide/svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!">
				<HomeIcon class="size-4" />
				<span class="sr-only">Home</span>
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<ChevronsRightIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="#!" class="flex items-center gap-2">
				<FolderIcon class="size-4" />
				Documents
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator>
			<ChevronsRightIcon />
		</Breadcrumb.Separator>
		<Breadcrumb.Item>
			<Breadcrumb.Page class="flex items-center gap-2">
				<FileIcon class="inline size-4" />
				Add Document
			</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
