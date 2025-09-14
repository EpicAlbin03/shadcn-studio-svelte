<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

	const id = $props.id();

	const domains = ['.com', '.org', '.net'];

	let value = $state('.com');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with end select</Label>
	<div class="flex rounded-md shadow-xs">
		<Input
			{id}
			type="text"
			placeholder="shadcnstudio"
			class="-me-px rounded-e-none shadow-none focus-visible:z-1"
		/>
		<Select type="single" bind:value>
			<SelectTrigger {id} class="rounded-s-none shadow-none">
				{value}
			</SelectTrigger>
			<SelectContent>
				{#each domains as domain (domain)}
					<SelectItem value={domain} class="pr-2 [&_svg]:hidden">
						{domain}
					</SelectItem>
				{/each}
			</SelectContent>
		</Select>
	</div>
</div>
