<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Table from '$lib/components/ui/table/index.js';

	const items = [
		{
			id: '1',
			name: 'Philip George',
			email: 'philipgeorge20@gmail.com',
			location: 'Mumbai, India',
			status: 'Active',
			balance: '$10,696.00'
		},
		{
			id: '2',
			name: 'Sarah Chen',
			email: 'sarah.c@company.com',
			location: 'Singapore',
			status: 'Active',
			balance: '$600.00'
		},
		{
			id: '3',
			name: 'James Wilson',
			email: 'j.wilson@company.com',
			location: 'London, UK',
			status: 'Inactive',
			balance: '$650.00'
		},
		{
			id: '4',
			name: 'Maria Garcia',
			email: 'm.garcia@company.com',
			location: 'Madrid, Spain',
			status: 'Active',
			balance: '$0.00'
		},
		{
			id: '5',
			name: 'David Kim',
			email: 'd.kim@company.com',
			location: 'Seoul, KR',
			status: 'Active',
			balance: '-$1,000.00'
		}
	];

	const id = $props.id();
</script>

<div class="w-full">
	<div class="overflow-hidden rounded-md border">
		<Table.Root>
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head>
						<Checkbox {id} aria-label="select-all" />
					</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Location</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head class="text-right">Balance</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each items as item (item.id)}
					<Table.Row class="has-data-[state=checked]:bg-muted/50">
						<Table.Cell>
							<Checkbox id="table-checkbox-{item.id}" aria-label="user-checkbox-{item.id}" />
						</Table.Cell>
						<Table.Cell class="font-medium">{item.name}</Table.Cell>
						<Table.Cell>{item.email}</Table.Cell>
						<Table.Cell>{item.location}</Table.Cell>
						<Table.Cell>{item.status}</Table.Cell>
						<Table.Cell class="text-right">{item.balance}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
			<Table.Footer class="bg-transparent">
				<Table.Row class="hover:bg-transparent">
					<Table.Cell colspan={5}>Total</Table.Cell>
					<Table.Cell class="text-right">$2,500.00</Table.Cell>
				</Table.Row>
			</Table.Footer>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with row selection</p>
</div>
