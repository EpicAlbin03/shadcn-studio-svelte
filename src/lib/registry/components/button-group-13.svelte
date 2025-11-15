<script lang="ts">
	import { ArchiveIcon, InboxIcon, SendHorizontal } from '@lucide/svelte';
	import { RippleButton } from '$lib/registry/ui/ripple-button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<RippleButton variant="outline" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
		<InboxIcon />
		Inbox
	</RippleButton>
	<RippleButton variant="outline" class="rounded-none shadow-none focus-visible:z-10">
		<ArchiveIcon />
		Archived
	</RippleButton>
	<RippleButton variant="outline" class="rounded-none rounded-e-md shadow-none focus-visible:z-10">
		<SendHorizontal />
		Sent
	</RippleButton>
</div>
