<script lang="ts">
	import CardsStats from './Stats.svelte';
	import CardsCalendar from './Calendar.svelte';
	import CardsActivityGoal from './ActivityGoal.svelte';
	import CardsTeamMembers from './TeamMembers.svelte';
	import CardsCookieSettings from './CookieSettings.svelte';
	import CardsExerciseMinutes from './ExerciseMinutes.svelte';
	import CardsChat from './Chat.svelte';
	import CardsCreateAccount from './CreateAccount.svelte';
	import CardsReportIssue from './ReportIssue.svelte';
	import CardsShare from './Share.svelte';
	import CardsForms from './Forms.svelte';
	import CardsPayments from './Payments.svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	const mobile = new IsMobile();
</script>

<div
	class="grid w-full **:data-[slot=card]:shadow-none md:grid-cols-2 md:gap-4 lg:grid-cols-10 xl:grid-cols-11"
>
	<div class="grid gap-4 lg:col-span-4 xl:col-span-6">
		<CardsStats />
		{#if mobile.current}
			<div class="grid gap-1 sm:grid-cols-[auto_1fr] md:hidden">
				<CardsCalendar />
				<div class="min-w-0 pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
					<CardsActivityGoal />
				</div>
				<div class="min-w-0 pt-3 sm:col-span-2 xl:pt-4">
					<CardsExerciseMinutes />
				</div>
			</div>
		{/if}
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
			<div class="flex flex-col gap-4">
				<CardsForms />
				<CardsTeamMembers />
				<CardsCookieSettings />
			</div>
			<div class="flex flex-col gap-4">
				<CardsCreateAccount />
				<CardsChat />
				<div class="hidden xl:block">
					<CardsReportIssue />
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
		{#if !mobile.current}
			<div class="hidden gap-1 sm:grid-cols-[auto_1fr] md:grid">
				<CardsCalendar />
				<div class="min-w-0 pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
					<CardsActivityGoal />
				</div>
				<div class="min-w-0 pt-3 sm:col-span-2 xl:pt-3">
					<CardsExerciseMinutes />
				</div>
			</div>
		{/if}
		<div class="hidden md:block">
			<CardsPayments />
		</div>
		<CardsShare />
		<div class="xl:hidden">
			<CardsReportIssue />
		</div>
	</div>
</div>
