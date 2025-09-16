<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const countries = [
		{ value: '1', label: 'India', flag: '/flags/india.webp' },
		{ value: '2', label: 'China', flag: '/flags/china.webp' },
		{ value: '3', label: 'Monaco', flag: '/flags/monaco.webp' },
		{ value: '4', label: 'Serbia', flag: '/flags/serbia.webp' },
		{ value: '5', label: 'Romania', flag: '/flags/romania.webp' },
		{ value: '6', label: 'Mayotte', flag: '/flags/mayotte.webp' },
		{ value: '7', label: 'Iraq', flag: '/flags/iraq.webp' },
		{ value: '8', label: 'Syria', flag: '/flags/syria.webp' },
		{ value: '9', label: 'Korea', flag: '/flags/korea.webp' },
		{ value: '10', label: 'Zimbabwe', flag: '/flags/zimbabwe.webp' }
	];

	const id = $props.id();

	let value = $state('1');
	const selectedCountry = $derived(countries.find((f) => f.value === value) ?? countries[0]);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Options with flag</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			{id}
			class="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
		>
			<span class="flex items-center gap-2">
				<img src={selectedCountry.flag} alt="{selectedCountry.label} flag" class="h-4 w-5" />
				{selectedCountry.label ?? 'Select country'}
			</span>
		</Select.Trigger>
		<Select.Content
			class="max-h-100 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80"
		>
			<Select.Group>
				{#each countries as country (country.value)}
					<Select.Item value={country.value} label={country.label}>
						<img src={country.flag} alt="{country.label} flag" class="h-4 w-5" />
						<span class="truncate">{country.label}</span>
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
