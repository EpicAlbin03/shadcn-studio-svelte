<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Cookie Settings</Card.Title>
		<Card.Description>Manage your cookie settings here.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="flex items-center justify-between gap-4">
			<Label for="necessary" class="flex flex-1 flex-col items-start">
				<span>Strictly Necessary</span>
				<span class="leading-snug font-normal text-muted-foreground">
					These cookies are essential in order to use the website and use its features.
				</span>
			</Label>
			<Switch id="necessary" checked aria-label="Necessary" />
		</div>
		<div class="flex items-center justify-between gap-4">
			<Label for="functional" class="flex flex-1 flex-col items-start">
				<span>Functional Cookies</span>
				<span class="leading-snug font-normal text-muted-foreground">
					These cookies allow the website to provide personalized functionality.
				</span>
			</Label>
			<Switch id="functional" aria-label="Functional" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button variant="outline" class="w-full">Save preferences</Button>
	</Card.Footer>
</Card.Root>
