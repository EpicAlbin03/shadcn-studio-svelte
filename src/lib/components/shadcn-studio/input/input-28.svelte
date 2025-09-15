<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const id = $props.id();

	const protocols = ['https://', 'http://', 'ftp://', 'sftp://', 'ws://', 'wss://'];

	let value = $state('https://');
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Input with start select</Label>
	<div class="flex rounded-md shadow-xs">
		<Select.Root type="single" bind:value>
			<Select.Trigger {id} class="rounded-e-none shadow-none focus-visible:z-1">
				{value}
			</SelectTrigger>
			<SelectContent>
				{#each protocols as protocol (protocol)}
					<Select.Item value={protocol} class="pr-2 [&_svg]:hidden">
						{protocol}
					</SelectItem>
				{/each}
			</SelectContent>
		</Select>
		<Input
			{id}
			type="text"
			placeholder="shadcnstudio.com"
			class="-ms-px rounded-s-none shadow-none"
		/>
	</div>
</div>
