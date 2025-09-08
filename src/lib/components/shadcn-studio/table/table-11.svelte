<script lang="ts">
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

	const invoices = [
		{
			id: 1,
			name: 'Alice Smith',
			occupation: 'Software Engineer',
			employer: 'Alpha Tech',
			email: 'alice@example.com',
			location: 'United States',
			lastaccess: '12/16/2021',
			salary: '$120,000'
		},
		{
			id: 2,
			name: 'Bob Johnson',
			occupation: 'Marketing Manager',
			employer: 'Beta Corp',
			email: 'bob@example.com',
			location: 'Canada',
			lastaccess: '11/05/2021',
			salary: '$100,000'
		},
		{
			id: 3,
			name: 'Charlie Brown',
			occupation: 'Graphic Designer',
			employer: 'Gamma Studios',
			email: 'charlie@example.com',
			location: 'United Kingdom',
			lastaccess: '09/20/2022',
			salary: '$75,000'
		},
		{
			id: 4,
			name: 'Dora Emily',
			occupation: 'HR Manager',
			employer: 'Delta Corp',
			email: 'dora@example.com',
			location: 'Australia',
			lastaccess: '08/10/2020',
			salary: '$40,000'
		},
		{
			id: 5,
			name: 'Ethan Hunt',
			occupation: 'Secret Agent',
			employer: 'Eagle Eye',
			email: 'ethan@example.com',
			location: 'India',
			lastaccess: '11/20/2021',
			salary: '$220,000'
		},
		{
			id: 6,
			name: 'Fiona Brown',
			occupation: 'Financial Analyst',
			employer: 'Fox Finance',
			email: 'fiona@example.com',
			location: 'France',
			lastaccess: '07/05/2021',
			salary: '$150,000'
		},
		{
			id: 7,
			name: 'George Wilson',
			occupation: 'Project Manager',
			employer: 'Gazelle Technologies',
			email: 'george@example.com',
			location: 'Brazil',
			lastaccess: '05/25/2021',
			salary: '$135,000'
		}
	];
</script>

<div class="w-full">
	<div class="mx-auto max-w-2xl [&>div]:rounded-sm [&>div]:border">
		<Table>
			<TableHeader>
				<TableRow class="hover:bg-transparent">
					<TableHead class="sticky left-0 bg-background">ID</TableHead>
					<TableHead class="sticky left-7.5 bg-background">Name</TableHead>
					<TableHead>Occupation</TableHead>
					<TableHead>Employer</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Location</TableHead>
					<TableHead>Last Access</TableHead>
					<TableHead>Salary</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each invoices as invoice (invoice.id)}
					<TableRow class="hover:bg-transparent">
						<TableCell class="sticky left-0 bg-background font-medium">{invoice.id}</TableCell>
						<TableCell class="sticky left-7.5 bg-background">{invoice.name}</TableCell>
						<TableCell>{invoice.occupation}</TableCell>
						<TableCell>{invoice.employer}</TableCell>
						<TableCell>{invoice.email}</TableCell>
						<TableCell>{invoice.location}</TableCell>
						<TableCell>{invoice.lastaccess}</TableCell>
						<TableCell>{invoice.salary}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Sticky column table</p>
</div>
