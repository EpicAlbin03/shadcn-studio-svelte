<script lang="ts">
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import { CalendarDate } from '@internationalized/date';
	import {
		Card,
		CardAction,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
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
	} as const;

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
	<Card class="w-2xs shadow-none">
		<CardHeader class="border-b">
			<CardTitle>{localizedStrings[locale].title}</CardTitle>
			<CardDescription>{localizedStrings[locale].description}</CardDescription>
			<CardAction>
				<Select type="single" bind:value={locale}>
					<SelectTrigger class="w-[100px]" aria-label="Select language">
						{selectedLanguage}
					</SelectTrigger>
					<SelectContent align="end">
						{#each languageOptions as language (language.value)}
							<SelectItem value={language.value} label={language.label}>
								{language.label}
							</SelectItem>
						{/each}
					</SelectContent>
				</Select>
			</CardAction>
		</CardHeader>
		<CardContent>
			<RangeCalendar
				bind:value
				{locale}
				class="w-full bg-transparent p-0"
				buttonVariant="outline"
			/>
		</CardContent>
	</Card>
	<p class="mt-3 text-center text-xs text-muted-foreground" role="region">Localize calendar</p>
</div>
