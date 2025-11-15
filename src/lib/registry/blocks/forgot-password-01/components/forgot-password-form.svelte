<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Field from '$lib/components/ui/field/index.js';
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
	<Field.Field>
		<Field.Label for="userEmail" class="leading-5">Email address*</Field.Label>
		<Input type="email" id="userEmail" placeholder="Enter your email address" />
	</Field.Field>

	<Button class="w-full" type="submit">Send Reset Link</Button>
</form>
