<script lang="ts">
	import { HomeIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
</script>

<Avatar>
	<AvatarFallback class="bg-indigo-500/10 text-indigo-500">
		<HomeIcon class="size-4" />
	</AvatarFallback>
</Avatar>
