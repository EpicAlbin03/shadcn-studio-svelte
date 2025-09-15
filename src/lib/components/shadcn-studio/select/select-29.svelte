<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import { CircleIcon } from '@lucide/svelte';

	const statuses = [
		{
			value: 'in-progress',
			label: 'In Progress',
			className: 'fill-violet-500 text-violet-500 stroke-violet-500'
		},
		{
			value: 'pending',
			label: 'Pending',
			className: 'fill-amber-500 text-amber-500 stroke-amber-500'
		},
		{
			value: 'completed',
			label: 'Completed',
			className: 'fill-emerald-500 text-emerald-500 stroke-emerald-500'
		},
		{
			value: 'cancelled',
			label: 'Cancelled',
			className: 'fill-gray-500 text-gray-500 stroke-gray-500'
		},
		{ value: 'rejected', label: 'Rejected', className: 'fill-red-500 text-red-500 stroke-red-500' }
	];

	const id = $props.id();

	let value = $state('in-progress');
	const selectedStatus = $derived(statuses.find((f) => f.value === value) ?? statuses[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Status select</Label>
	<Select.Root type="single" bind:value>
		<SelectTrigger
			{id}
			class="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
		>
			<span class="flex items-center gap-2">
				<CircleIcon class={cn('size-2', selectedStatus.className)} />
				<span class="truncate">{selectedStatus.label ?? 'Select status'}</span>
			</span>
		</SelectTrigger>
		<SelectContent
			class="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80"
		>
			<SelectGroup>
				<SelectLabel>Fruits</SelectLabel>
				{#each statuses as status (status.value)}
					<Select.Item value={status.value} label={status.label}>
						<span class="flex items-center gap-2">
							<CircleIcon class={cn('size-2', status.className)} />
							<span class="truncate">{status.label}</span>
						</span>
					</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
</div>
