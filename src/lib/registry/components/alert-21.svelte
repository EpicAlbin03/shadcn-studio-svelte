<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<Alert.Root class="border-none bg-primary/10">
	<CircleAlertIcon />
	<Alert.Title>File Should be PDF,DOCX,JPG, or PNG.</Alert.Title>
	<Alert.Description>
		If the file type is not one of this than we can't get your files
	</Alert.Description>
</Alert.Root>
