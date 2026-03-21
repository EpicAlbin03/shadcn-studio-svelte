<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import CustomToast from './custom-toast.svelte';
</script>

<Button variant="outline" onclick={() => toast(CustomToast)}>Toast with avatar</Button>
