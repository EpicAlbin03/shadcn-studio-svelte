<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import CustomToast from './sonner-04/CustomToast.svelte';
</script>

<Button variant="outline" onclick={() => toast(CustomToast)}>Toast with avatar</Button>
