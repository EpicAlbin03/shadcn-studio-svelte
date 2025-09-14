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

	const countries = {
		northAmerica: [
			{ value: 'united-states', label: 'United States' },
			{ value: 'canada', label: 'Canada' },
			{ value: 'mexico', label: 'Mexico' }
		],
		europe: [
			{ value: 'united-kingdom', label: 'United Kingdom' },
			{ value: 'germany', label: 'Germany' },
			{ value: 'france', label: 'France' }
		],
		asia: [
			{ value: 'india', label: 'India' },
			{ value: 'japan', label: 'Japan' },
			{ value: 'china', label: 'China' }
		]
	};

	const continents = [
		{
			label: 'North America',
			value: 'northAmerica'
		},
		{
			label: 'Europe',
			value: 'europe'
		},
		{
			label: 'Asia',
			value: 'asia'
		}
	];

	const id = $props.id();

	let value = $state('united-states');
	const triggerContent = $derived(
		Object.values(countries)
			.flat()
			.find((f) => f.value === value)?.label ?? 'Select a fruit'
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with options groups</Label>
	<Select type="single" bind:value>
		<SelectTrigger {id} class="w-full">
			{triggerContent}
		</SelectTrigger>
		<SelectContent>
			{#each continents as continent (continent.value)}
				<SelectGroup>
					<SelectLabel>{continent.label}</SelectLabel>
					{#each countries[continent.value as keyof typeof countries] as country (country.value)}
						<SelectItem value={country.value} label={country.label}>
							{country.label}
						</SelectItem>
					{/each}
				</SelectGroup>
			{/each}
		</SelectContent>
	</Select>
</div>
