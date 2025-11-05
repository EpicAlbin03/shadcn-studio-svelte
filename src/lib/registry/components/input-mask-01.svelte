<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Inputmask from 'inputmask';

	const id = $props.id();

	let inputRef = $state<HTMLInputElement>(null!);

	$effect(() => {
		if (!inputRef) return;
		const im = new Inputmask('AA99 AAA', {
			placeholder: '',
			showMaskOnHover: false
		}).mask(inputRef);

		return () => im.remove();
	});
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with mask</Label>
	<Input {id} bind:ref={inputRef} type="text" placeholder="AB12 CDE" />
	<p class="text-xs text-muted-foreground">
		Built with
		<a
			class="underline hover:text-foreground"
			href="https://github.com/RobinHerbots/inputmask"
			target="_blank"
			rel="noopener noreferrer"
		>
			inputmask
		</a>
	</p>
</div>
