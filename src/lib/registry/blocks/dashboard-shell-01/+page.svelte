<script lang="ts">
	import DashboardShell from './components/dashboard-shell-01.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { CalendarX2Icon, TriangleAlertIcon, TruckIcon } from '@lucide/svelte';
	import type { StatisticsCardData } from '$lib/registry/components/statistics-01.svelte';
	import type { EarningData } from '$lib/registry/components/widget-01.svelte';
	import type { TransactionItem } from './components/data-table-transaction.svelte';

	const statisticsCardData: StatisticsCardData[] = [
		{
			icon: TruckIcon,
			value: '42',
			title: 'Shipped Orders',
			changePercentage: '+18.2%'
		},
		{
			icon: TriangleAlertIcon,
			value: '8',
			title: 'Damaged Returns',
			changePercentage: '-8.7%'
		},
		{
			icon: CalendarX2Icon,
			value: '27',
			title: 'Missed Delivery Slots',
			changePercentage: '+4.3%'
		}
	];

	const earningData: EarningData[] = [
		{
			img: '/blocks/zipcar.webp',
			platform: 'Zipcar',
			technologies: 'Vuejs & HTML',
			earnings: '-$23,569.26',
			progressPercentage: 75
		},
		{
			img: '/blocks/bitbank.webp',
			platform: 'Bitbank',
			technologies: 'Figma & React',
			earnings: '-$12,650.31',
			progressPercentage: 25
		}
	];

	const transactionData: TransactionItem[] = [
		{
			id: '1',
			avatar: '/avatars/01.webp',
			avatarFallback: 'JA',
			name: 'Jack Alfredo',
			amount: 316.0,
			status: 'paid',
			email: 'jack@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '2',
			avatar: '/avatars/02.webp',
			avatarFallback: 'MG',
			name: 'Maria Gonzalez',
			amount: 253.4,
			status: 'pending',
			email: 'maria.g@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '3',
			avatar: '/avatars/03.webp',
			avatarFallback: 'JD',
			name: 'John Doe',
			amount: 852.0,
			status: 'paid',
			email: 'john.doe@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '4',
			avatar: '/avatars/04.webp',
			avatarFallback: 'EC',
			name: 'Emily Carter',
			amount: 889.0,
			status: 'pending',
			email: 'emily.carter@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '5',
			avatar: '/avatars/05.webp',
			avatarFallback: 'DL',
			name: 'David Lee',
			amount: 723.16,
			status: 'paid',
			email: 'david.lee@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '6',
			avatar: '/avatars/06.webp',
			avatarFallback: 'SP',
			name: 'Sophia Patel',
			amount: 612.0,
			status: 'failed',
			email: 'sophia.patel@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '7',
			avatar: '/avatars/07.webp',
			avatarFallback: 'RW',
			name: 'Robert Wilson',
			amount: 445.25,
			status: 'paid',
			email: 'robert.wilson@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '8',
			avatar: '/avatars/08.webp',
			avatarFallback: 'LM',
			name: 'Lisa Martinez',
			amount: 297.8,
			status: 'processing',
			email: 'lisa.martinez@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '9',
			avatar: '/avatars/09.png',
			avatarFallback: 'MT',
			name: 'Michael Thompson',
			amount: 756.9,
			status: 'paid',
			email: 'michael.thompson@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '10',
			avatar: '/avatars/10.webp',
			avatarFallback: 'AJ',
			name: 'Amanda Johnson',
			amount: 189.5,
			status: 'pending',
			email: 'amanda.johnson@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '11',
			avatar: '/avatars/11.png',
			avatarFallback: 'KB',
			name: 'Kevin Brown',
			amount: 1024.75,
			status: 'paid',
			email: 'kevin.brown@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '12',
			avatar: '/avatars/12.png',
			avatarFallback: 'SD',
			name: 'Sarah Davis',
			amount: 367.2,
			status: 'failed',
			email: 'sarah.davis@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '13',
			avatar: '/avatars/13.png',
			avatarFallback: 'CG',
			name: 'Christopher Garcia',
			amount: 598.45,
			status: 'processing',
			email: 'christopher.garcia@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '14',
			avatar: '/avatars/14.png',
			avatarFallback: 'JR',
			name: 'Jennifer Rodriguez',
			amount: 821.3,
			status: 'paid',
			email: 'jennifer.rodriguez@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '15',
			avatar: '/avatars/15.webp',
			avatarFallback: 'DM',
			name: 'Daniel Miller',
			amount: 156.75,
			status: 'pending',
			email: 'daniel.miller@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '16',
			avatar: '/avatars/16.webp',
			avatarFallback: 'NW',
			name: 'Nicole White',
			amount: 934.1,
			status: 'paid',
			email: 'nicole.white@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '17',
			avatar: '/avatars/17.webp',
			avatarFallback: 'AL',
			name: 'Anthony Lopez',
			amount: 412.85,
			status: 'failed',
			email: 'anthony.lopez@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '18',
			avatar: '/avatars/18.webp',
			avatarFallback: 'MH',
			name: 'Michelle Harris',
			amount: 675.5,
			status: 'processing',
			email: 'michelle.harris@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '19',
			avatar: '/avatars/19.webp',
			avatarFallback: 'JC',
			name: 'James Clark',
			amount: 289.95,
			status: 'paid',
			email: 'james.clark@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '20',
			avatar: '/avatars/20.webp',
			avatarFallback: 'RL',
			name: 'Rachel Lewis',
			amount: 1156.25,
			status: 'pending',
			email: 'rachel.lewis@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '21',
			avatar: '/avatars/21.webp',
			avatarFallback: 'TY',
			name: 'Thomas Young',
			amount: 543.6,
			status: 'paid',
			email: 'thomas.young@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '22',
			avatar: '/avatars/22.webp',
			avatarFallback: 'SB',
			name: 'Stephanie Brown',
			amount: 789.3,
			status: 'processing',
			email: 'stephanie.brown@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '23',
			avatar: '/avatars/23.webp',
			avatarFallback: 'BM',
			name: 'Brandon Moore',
			amount: 425.75,
			status: 'failed',
			email: 'brandon.moore@shadcnstudio.com',
			paidBy: 'visa'
		},
		{
			id: '24',
			avatar: '/avatars/24.webp',
			avatarFallback: 'KT',
			name: 'Kelly Taylor',
			amount: 1203.5,
			status: 'paid',
			email: 'kelly.taylor@shadcnstudio.com',
			paidBy: 'mastercard'
		},
		{
			id: '25',
			avatar: '/avatars/25.webp',
			avatarFallback: 'MA',
			name: 'Mark Anderson',
			amount: 356.2,
			status: 'pending',
			email: 'mark.anderson@shadcnstudio.com',
			paidBy: 'visa'
		}
	];
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<DashboardShell {statisticsCardData} {earningData} {transactionData} />
	</Sidebar.Provider>
</div>
