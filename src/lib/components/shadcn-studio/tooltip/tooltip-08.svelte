<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
</script>

<Tooltip>
	<TooltipTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">Avatar</Button>
		{/snippet}
	</TooltipTrigger>
	<TooltipContent>
		<div class="flex items-center gap-1.5">
			<Avatar class="size-5">
				<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
				<AvatarFallback class="text-xs">HR</AvatarFallback>
			</Avatar>
			<p class="font-medium">Hallie Richards</p>
		</div>
	</TooltipContent>
</Tooltip>
