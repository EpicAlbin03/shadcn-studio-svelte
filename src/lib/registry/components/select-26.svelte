<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const timeZones = {
		northAmerica: [
			{ value: 'est', label: 'Eastern Standard Time (EST)' },
			{ value: 'cst', label: 'Central Standard Time (CST)' },
			{ value: 'mst', label: 'Mountain Standard Time (MST)' },
			{ value: 'pst', label: 'Pacific Standard Time (PST)' },
			{ value: 'akst', label: 'Alaska Standard Time (AKST)' },
			{ value: 'hst', label: 'Hawaii Standard Time (HST)' }
		],
		europeAfrica: [
			{ value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
			{ value: 'cet', label: 'Central European Time (CET)' },
			{ value: 'eet', label: 'Eastern European Time (EET)' },
			{ value: 'west', label: 'Western European Summer Time (WEST)' },
			{ value: 'cat', label: 'Central Africa Time (CAT)' },
			{ value: 'eat', label: 'East Africa Time (EAT)' }
		],
		asia: [
			{ value: 'msk', label: 'Moscow Time (MSK)' },
			{ value: 'ist', label: 'India Standard Time (IST)' },
			{ value: 'cst_china', label: 'China Standard Time (CST)' },
			{ value: 'jst', label: 'Japan Standard Time (JST)' },
			{ value: 'kst', label: 'Korea Standard Time (KST)' },
			{ value: 'ist_indonesia', label: 'Indonesia Central Standard Time (WITA)' }
		],
		australiaPacific: [
			{ value: 'awst', label: 'Australian Western Standard Time (AWST)' },
			{ value: 'acst', label: 'Australian Central Standard Time (ACST)' },
			{ value: 'aest', label: 'Australian Eastern Standard Time (AEST)' },
			{ value: 'nzst', label: 'New Zealand Standard Time (NZST)' },
			{ value: 'fjt', label: 'Fiji Time (FJT)' }
		],
		southAmerica: [
			{ value: 'art', label: 'Argentina Time (ART)' },
			{ value: 'bot', label: 'Bolivia Time (BOT)' },
			{ value: 'brt', label: 'Brasilia Time (BRT)' },
			{ value: 'clt', label: 'Chile Standard Time (CLT)' }
		]
	};

	const regions = [
		{
			label: 'North America',
			value: 'northAmerica'
		},
		{
			label: 'Europe & Africa',
			value: 'europeAfrica'
		},
		{
			label: 'Asia',
			value: 'asia'
		},
		{
			label: 'Australia & Pacific',
			value: 'australiaPacific'
		},
		{
			label: 'South America',
			value: 'southAmerica'
		}
	];

	const id = $props.id();

	let value = $state('');
	const triggerContent = $derived(
		Object.values(timeZones)
			.flat()
			.find((f) => f.value === value)?.label ?? 'Select a timezone'
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Timezone select</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger {id} class="w-full">
			{triggerContent}
		</Select.Trigger>
		<Select.Content class="max-h-100">
			{#each regions as region (region.value)}
				<Select.Group>
					<Select.Label>{region.label}</Select.Label>
					{#each timeZones[region.value as keyof typeof timeZones] as timeZone (timeZone.value)}
						<Select.Item value={timeZone.value} label={timeZone.label}>
							{timeZone.label}
						</Select.Item>
					{/each}
				</Select.Group>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
