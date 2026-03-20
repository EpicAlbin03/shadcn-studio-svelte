<script lang="ts">
	import BookmarkIcon from '@lucide/svelte/icons/bookmark';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" size="icon">
	<BookmarkIcon />
	<span class="sr-only">Bookmark</span>
</Button>
