<script lang="ts">
	import ArchiveIcon from '@lucide/svelte/icons/archive';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import SendHorizontalIcon from '@lucide/svelte/icons/send-horizontal';
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
		<SendHorizontalIcon />
		Sent
	</RippleButton>
</div>
