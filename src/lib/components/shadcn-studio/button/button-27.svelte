<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
</script>

<Button class="rounded-full ps-2">
	<Avatar class="size-6">
		<AvatarImage src="/avatars/05.png" alt="Hallie Richards" />
		<AvatarFallback class="text-xs text-foreground">HR</AvatarFallback>
	</Avatar>
	$libhallierichards
</Button>
