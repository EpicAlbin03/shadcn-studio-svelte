<script lang="ts">
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Table,
		TableBody,
		TableCell,
		TableFooter,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

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
		<Table>
			<TableHeader>
				<TableRow class="hover:bg-transparent">
					<TableHead>
						<Checkbox {id} aria-label="select-all" />
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Location</TableHead>
					<TableHead>Status</TableHead>
					<TableHead class="text-right">Balance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each items as item (item.id)}
					<TableRow class="has-data-[state=checked]:bg-muted/50">
						<TableCell>
							<Checkbox id={`table-checkbox-${item.id}`} aria-label={`user-checkbox-${item.id}`} />
						</TableCell>
						<TableCell class="font-medium">{item.name}</TableCell>
						<TableCell>{item.email}</TableCell>
						<TableCell>{item.location}</TableCell>
						<TableCell>{item.status}</TableCell>
						<TableCell class="text-right">{item.balance}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
			<TableFooter class="bg-transparent">
				<TableRow class="hover:bg-transparent">
					<TableCell colspan={5}>Total</TableCell>
					<TableCell class="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with row selection</p>
</div>
