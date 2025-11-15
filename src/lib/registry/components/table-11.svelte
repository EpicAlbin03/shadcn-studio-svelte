<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

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
		<Table.Root>
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head class="sticky left-0 bg-background">ID</Table.Head>
					<Table.Head class="sticky left-7.5 bg-background">Name</Table.Head>
					<Table.Head>Occupation</Table.Head>
					<Table.Head>Employer</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Location</Table.Head>
					<Table.Head>Last Access</Table.Head>
					<Table.Head>Salary</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each invoices as invoice (invoice.id)}
					<Table.Row class="hover:bg-transparent">
						<Table.Cell class="sticky left-0 bg-background font-medium">{invoice.id}</Table.Cell>
						<Table.Cell class="sticky left-7.5 bg-background">{invoice.name}</Table.Cell>
						<Table.Cell>{invoice.occupation}</Table.Cell>
						<Table.Cell>{invoice.employer}</Table.Cell>
						<Table.Cell>{invoice.email}</Table.Cell>
						<Table.Cell>{invoice.location}</Table.Cell>
						<Table.Cell>{invoice.lastaccess}</Table.Cell>
						<Table.Cell>{invoice.salary}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Sticky column table</p>
</div>
