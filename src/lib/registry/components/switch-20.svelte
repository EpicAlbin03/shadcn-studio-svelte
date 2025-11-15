<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/motion-switch';
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center space-x-2">
		<Switch
			aria-label="Animated gradient small switch"
			size="sm"
			id="small-gradient-switch"
			class="border-none bg-gradient-to-r from-amber-500 to-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 dark:focus-visible:ring-destructive/40 [&_span]:size-5 [&_span]:!translate-x-0.25"
		/>
		<Label for="small-gradient-switch">Small switch</Label>
	</div>
	<div class="flex items-center space-x-2">
		<Switch
			aria-label="Animated gradient medium switch"
			id="medium-gradient-switch"
			class="border-none bg-gradient-to-r from-amber-500 to-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 dark:focus-visible:ring-destructive/40 [&_span]:size-5 [&_span]:!translate-x-0.25"
		/>
		<Label for="medium-gradient-switch">Medium switch</Label>
	</div>
	<div class="flex items-center space-x-2">
		<Switch
			aria-label="Animated gradient large switch"
			size="lg"
			id="large-gradient-switch"
			class="border-none bg-gradient-to-r from-amber-500 to-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 dark:focus-visible:ring-destructive/40 [&_span]:size-5 [&_span]:!translate-x-0.25"
		/>
		<Label for="large-gradient-switch">Large switch</Label>
	</div>
</div> -->
