<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { Separator } from '$lib/components/ui/separator';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import LanguageDropdown from './dropdown-language.svelte';
	import ProfileDropdown from './dropdown-profile.svelte';
</script>

<header class="sticky top-0 z-50 border-b bg-card">
	<div class="mx-auto flex items-center justify-between gap-6 px-4 py-2 sm:px-6">
		<div class="flex items-center gap-4">
			<Sidebar.Trigger class="[&_svg]:!size-5" />
			<Separator orientation="vertical" class="hidden !h-4 sm:block" />
			<Breadcrumb.Root class="hidden sm:block">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>Free</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</div>
		<div class="flex items-center gap-1.5">
			<LanguageDropdown />
			<ProfileDropdown />
		</div>
	</div>
</header>
