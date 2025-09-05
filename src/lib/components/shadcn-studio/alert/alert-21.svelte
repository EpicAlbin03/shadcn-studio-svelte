<script lang="ts">
	import { CircleAlertIcon } from '@lucide/svelte';
	import { Alert, AlertTitle, AlertDescription } from '$lib/components/ui/alert';
</script>

<Alert class="border-none bg-primary/10">
	<CircleAlertIcon />
	<AlertTitle>File Should be PDF,DOCX,JPG, or PNG.</AlertTitle>
	<AlertDescription
		>If the file type is not one of this than we can't get your files</AlertDescription
	>
</Alert>
