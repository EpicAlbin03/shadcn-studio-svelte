<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { CalendarDate } from '@internationalized/date';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import type { DateRange } from 'bits-ui';

	const localizedStrings = {
		en: {
			title: 'Book an appointment',
			description: 'Select the dates for your appointment'
		},
		hi: {
			title: 'अपॉइंटमेंट बुक करें',
			description: 'अपनी अपॉइंटमेंट के लिए तारीखें चुनें'
		}
	};

	const languageOptions = [
		{
			label: 'English',
			value: 'en'
		},
		{
			label: 'Hindi',
			value: 'hi'
		}
	];

	let locale = $state<keyof typeof localizedStrings>('en');
	let value = $state<DateRange>({
		start: new CalendarDate(2025, 9, 9),
		end: new CalendarDate(2025, 9, 17)
	});

	const selectedLanguage = $derived(
		languageOptions.find((option) => option.value === locale)?.label ?? 'Language'
	);
</script>

<div>
	<Card.Root class="w-2xs shadow-none">
		<Card.Header class="border-b">
			<Card.Title>{localizedStrings[locale].title}</Card.Title>
			<Card.Description>{localizedStrings[locale].description}</Card.Description>
			<Card.Action>
				<Select.Root type="single" bind:value={locale}>
					<Select.Trigger class="w-[100px]" aria-label="Select language">
						{selectedLanguage}
					</Select.Trigger>
					<Select.Content align="end">
						{#each languageOptions as language (language.value)}
							<Select.Item value={language.value} label={language.label}>
								{language.label}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<RangeCalendar
				bind:value
				{locale}
				class="w-full bg-transparent p-0"
				buttonVariant="outline"
			/>
		</Card.Content>
	</Card.Root>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">Localize calendar</p>
</div>
