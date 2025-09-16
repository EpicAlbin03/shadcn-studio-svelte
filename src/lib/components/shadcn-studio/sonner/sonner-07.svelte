<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';

	function promise() {
		return new Promise((resolve, reject) =>
			setTimeout(() => {
				if (Math.random() < 0.5) {
					resolve('foo');
				} else {
					reject('fox');
				}
			}, 2000)
		);
	}
</script>

<Button
	variant="outline"
	onclick={() =>
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Toast has been added successfully!',
			error: 'Oops, there was an error adding the toast.'
		})}
>
	Toast with promise
</Button>
