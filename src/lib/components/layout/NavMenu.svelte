<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	let pathname = $derived(page.url.pathname);
</script>

<div class="flex items-center gap-5 max-lg:hidden">
	<a
		href="/theme-generator"
		class={cn('flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground', {
			'font-medium text-primary hover:text-primary/80': pathname.startsWith('/theme-generator')
		})}
	>
		Theme Generator
	</a>
	<a
		href="/docs/getting-started/introduction"
		class={cn('flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground', {
			'font-medium text-primary hover:text-primary/80': pathname.startsWith(
				'/docs/getting-started/introduction'
			)
		})}
	>
		Docs
	</a>
	<a
		href="/components"
		class={cn('flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground', {
			'font-medium text-primary hover:text-primary/80': pathname.startsWith('/components')
		})}
	>
		Components
	</a>
</div>
