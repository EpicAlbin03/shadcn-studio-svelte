<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<Dialog>
	<DialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Subscribe</Button>
		{/snippet}
	</DialogTrigger>
	<DialogContent class="sm:max-w-lg">
		<DialogHeader class="text-center">
			<DialogTitle class="text-xl">Subscribe blog for latest updates</DialogTitle>
			<DialogDescription class="text-base">
				Subscribe to our blog to stay updated with the latest posts and news. Simply enter your
				email address and click 'Subscribe' to receive notifications.
			</DialogDescription>
		</DialogHeader>
		<form class="flex gap-4">
			<div class="grid grow-1 gap-3">
				<Label for="email">Email</Label>
				<Input type="email" id="email" name="email" placeholder="example@gmail.com" required />
			</div>
			<Button type="submit" class="self-end">Subscribe</Button>
		</form>
	</DialogContent>
</Dialog>
