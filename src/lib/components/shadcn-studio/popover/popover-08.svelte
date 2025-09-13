<script lang="ts">
	import { MessageCircleIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<Popover>
	<PopoverTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<MessageCircleIcon />
				<span class="sr-only">Feedback</span>
			</Button>
		{/snippet}
	</PopoverTrigger>
	<PopoverContent class="w-80">
		<div class="grid gap-2">
			<div class="font-medium">Feedback</div>
			<Textarea placeholder="Type your message here." class="max-h-56" />
			<div class="grid w-full grid-cols-2 gap-2">
				<Button size="sm">Send</Button>
				<Button variant="secondary" size="sm">Cancel</Button>
			</div>
		</div>
	</PopoverContent>
</Popover>
