<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Subscribe</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-lg">
		<Dialog.Header class="text-center">
			<Dialog.Title class="text-xl">Subscribe blog for latest updates</Dialog.Title>
			<Dialog.Description class="text-base">
				Subscribe to our blog to stay updated with the latest posts and news. Simply enter your
				email address and click 'Subscribe' to receive notifications.
			</Dialog.Description>
		</Dialog.Header>
		<form class="flex gap-4">
			<div class="grid grow-1 gap-3">
				<Label for="email">Email</Label>
				<Input type="email" id="email" name="email" placeholder="example@gmail.com" required />
			</div>
			<Button type="submit" class="self-end">Subscribe</Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
