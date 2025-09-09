<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { SearchIcon } from '@lucide/svelte';
	import type { Column } from '@tanstack/table-core';

	type Props = { column: Column<any, unknown> };

	let { column }: Props = $props();

	const id = $props.id();

	const columnFilterValue = column.getFilterValue();
	const { filterVariant } = column.columnDef.meta ?? {};
	const columnHeader = typeof column.columnDef.header === 'string' ? column.columnDef.header : '';

	let selectValue = $state();

	const sortedUniqueValues = $derived.by(() => {
		if (filterVariant === 'range') return [];

		const values = Array.from(column.getFacetedUniqueValues().keys());

		const flattenedValues = values.reduce((acc: string[], curr) => {
			if (Array.isArray(curr)) {
				return [...acc, ...curr];
			}

			return [...acc, curr];
		}, []);

		return Array.from(new Set(flattenedValues)).sort();
	});
</script>

{#if filterVariant === 'range'}
	<div class="*:not-first:mt-2">
		<Label>{columnHeader}</Label>
		<div class="flex">
			<Input
				id={`${id}-range-1`}
				class="flex-1 rounded-e-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
				value={(columnFilterValue as [number, number])?.[0] ?? ''}
				oninput={(e) =>
					column.setFilterValue((old: [number, number]) => [
						e.currentTarget.value ? Number(e.currentTarget.value) : undefined,
						old?.[1]
					])}
				placeholder="Min"
				type="number"
				aria-label={`${columnHeader} min`}
			/>
			<Input
				id={`${id}-range-2`}
				class="-ms-px flex-1 rounded-s-none [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
				value={(columnFilterValue as [number, number])?.[1] ?? ''}
				oninput={(e) =>
					column.setFilterValue((old: [number, number]) => [
						old?.[0],
						e.currentTarget.value ? Number(e.currentTarget.value) : undefined
					])}
				placeholder="Max"
				type="number"
				aria-label={`${columnHeader} max`}
			/>
		</div>
	</div>
{:else if filterVariant === 'select'}
	<div class="*:not-first:mt-2">
		<Label for={`${id}-select`}>{columnHeader}</Label>
		<Select
			type="single"
			value={columnFilterValue?.toString() ?? 'all'}
			onValueChange={(value) => {
				column.setFilterValue(value === 'all' ? undefined : value);
			}}
		>
			<SelectTrigger id={`${id}-select`} class="w-full">
				{columnFilterValue?.toString() ?? 'All'}
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All</SelectItem>
				{#each sortedUniqueValues as value (String(value))}
					<SelectItem value={String(value)}>
						{String(value)}
					</SelectItem>
				{/each}
			</SelectContent>
		</Select>
	</div>
{:else}
	<div class="*:not-first:mt-2">
		<Label for={`${id}-input`}>{columnHeader}</Label>
		<div class="relative">
			<Input
				id={`${id}-input`}
				class="peer ps-9"
				value={(columnFilterValue ?? '') as string}
				oninput={(e) => column.setFilterValue(e.currentTarget.value)}
				placeholder={`Search ${columnHeader.toLowerCase()}`}
				type="text"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
			>
				<SearchIcon size={16} />
			</div>
		</div>
	</div>
{/if}
