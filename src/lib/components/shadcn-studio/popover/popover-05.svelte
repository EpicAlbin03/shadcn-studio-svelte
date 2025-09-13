<script lang="ts">
	import { InfoIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
</script>

<Popover>
	<PopoverTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<InfoIcon />
				<span class="sr-only">About Shadcn Studio</span>
			</Button>
		{/snippet}
	</PopoverTrigger>
	<PopoverContent class="w-80">
		<div class="grid gap-4">
			<div class="space-y-1.5 text-center">
				<div class="text-lg font-semibold">About Shadcn Studio</div>
				<p class="text-sm text-muted-foreground">
					Welcome to Shadcn Studio — your toolkit for building sleek, customizable UI components
					with ease!
				</p>
			</div>
			<Button
				size="sm"
				href="https://shadcnstudio.com/docs/getting-started/introduction"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn More
			</Button>
		</div>
	</PopoverContent>
</Popover>
