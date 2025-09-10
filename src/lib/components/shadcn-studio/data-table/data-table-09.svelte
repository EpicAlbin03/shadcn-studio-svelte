<script lang="ts">
	import { ChevronDown, ChevronUp } from '@lucide/svelte';
	import {
		type ColumnDef,
		type ExpandedState,
		type Row,
		getCoreRowModel,
		getExpandedRowModel
	} from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderComponent,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';

	type Member = {
		name: string;
		role: string;
		email: string;
		hireDate: string;
		dob: string;
	};

	type Team = {
		teamName: string;
		department: string;
		location: string;
		nextMilestone: string;
		budget: number;
		members: Member[];
	};

	const data: Team[] = [
		{
			teamName: 'Digital Marketing',
			department: 'Marketing',
			location: 'London',
			nextMilestone: 'Launch New Campaign',
			budget: 30000,
			members: [
				{
					name: 'Alice Johnson',
					role: 'Lead Strategist',
					email: 'alice.johnson@example.com',
					hireDate: '2020-01-15',
					dob: '1990-01-01'
				},
				{
					name: 'Bob Smith',
					role: 'Content Creator',
					email: 'bob.smith@example.com',
					hireDate: '2021-03-22',
					dob: '1992-05-15'
				},
				{
					name: 'Charlie Brown',
					role: 'SEO Specialist',
					email: 'charlie.brown@example.com',
					hireDate: '2022-07-30',
					dob: '1995-11-20'
				}
			]
		},
		{
			teamName: 'Product Development',
			department: 'Engineering',
			location: 'San Francisco',
			nextMilestone: 'Release Version 2.0',
			budget: 50000,
			members: [
				{
					name: 'David Wilson',
					role: 'Product Manager',
					email: 'david.wilson@example.com',
					hireDate: '2019-05-10',
					dob: '1988-02-25'
				},
				{
					name: 'Emma Johnson',
					role: 'UX Designer',
					email: 'emma.johnson@example.com',
					hireDate: '2020-08-15',
					dob: '1990-11-30'
				},
				{
					name: 'Frank Miller',
					role: 'QA Engineer',
					email: 'frank.miller@example.com',
					hireDate: '2021-01-20',
					dob: '1993-06-10'
				}
			]
		},
		{
			teamName: 'Sales Team',
			department: 'Sales',
			location: 'New York',
			nextMilestone: 'Close Q3 Deals',
			budget: 40000,
			members: [
				{
					name: 'Grace Lee',
					role: 'Sales Executive',
					email: 'grace.lee@example.com',
					hireDate: '2021-05-12',
					dob: '1995-03-22'
				},
				{
					name: 'Henry Davis',
					role: 'Account Manager',
					email: 'henry.davis@example.com',
					hireDate: '2020-11-01',
					dob: '1992-07-15'
				},
				{
					name: 'Ivy Garcia',
					role: 'Sales Analyst',
					email: 'ivy.garcia@example.com',
					hireDate: '2021-09-15',
					dob: '1994-02-10'
				}
			]
		}
	];

	const columns: ColumnDef<Team>[] = [
		{
			id: 'expander',
			header: () => null,
			cell: ({ row }) => {
				return row.getCanExpand() ? renderSnippet(ExpanderSnippet, row) : undefined;
			}
		},
		{
			id: 'select',
			header: ({ table }) =>
				renderComponent(Checkbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all'
				}),
			cell: ({ row }) =>
				renderComponent(Checkbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					'aria-label': 'Select row'
				})
		},
		{
			header: 'Team Name',
			accessorKey: 'teamName',
			cell: ({ row }) => {
				const teamNameSnippet = createRawSnippet<[string]>((getTeamName) => {
					const teamName = getTeamName();
					return {
						render: () => `<div class="font-medium">${teamName}</div>`
					};
				});
				return renderSnippet(teamNameSnippet, row.getValue('teamName'));
			}
		},
		{
			header: 'Department',
			accessorKey: 'department',
			cell: ({ row }) => row.getValue('department')
		},
		{
			header: 'Location',
			accessorKey: 'location',
			cell: ({ row }) => row.getValue('location')
		},
		{
			header: 'Next Milestone',
			accessorKey: 'nextMilestone',
			cell: ({ row }) => row.getValue('nextMilestone')
		},
		{
			header: 'Budget',
			accessorKey: 'budget',
			cell: ({ row }) => {
				const budgetSnippet = createRawSnippet<[number]>((getBudget) => {
					const amount = getBudget();
					const formatted = new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(amount);
					return {
						render: () => `<div>${formatted}</div>`
					};
				});
				return renderSnippet(budgetSnippet, row.getValue('budget'));
			}
		}
	];

	let rowSelection = $state({});
	let expanded = $state<ExpandedState>({});

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get rowSelection() {
				return rowSelection;
			},
			get expanded() {
				return expanded;
			}
		},
		getRowCanExpand: (row) => Boolean(row.original.members),
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		onRowSelectionChange: (updater) => {
			if (typeof updater === 'function') {
				rowSelection = updater(rowSelection);
			} else {
				rowSelection = updater;
			}
		},
		onExpandedChange: (updater) => {
			if (typeof updater === 'function') {
				expanded = updater(expanded);
			} else {
				expanded = updater;
			}
		}
	});
</script>

{#snippet ExpanderSnippet(row: Row<Team>)}
	<Button
		class="size-7 text-muted-foreground shadow-none"
		onclick={row.getToggleExpandedHandler()}
		aria-expanded={row.getIsExpanded()}
		aria-label={row.getIsExpanded()
			? `Collapse details for ${row.original.teamName}`
			: `Expand details for ${row.original.teamName}`}
		size="icon"
		variant="ghost"
	>
		{#if row.getIsExpanded()}
			<ChevronUp class="opacity-60" size={16} aria-hidden="true" />
		{:else}
			<ChevronDown class="opacity-60" size={16} aria-hidden="true" />
		{/if}
	</Button>
{/snippet}

<div class="w-full">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row class="hover:bg-transparent">
						{#each headerGroup.headers as header (header.id)}
							<Table.Head class="[&:has([role=checkbox])]:pl-3">
								{#if !header.isPlaceholder}
									<FlexRender
										content={header.column.columnDef.header}
										context={header.getContext()}
									/>
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && 'selected'}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell
								class="[&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0 [&:has([role=checkbox])]:pl-3"
							>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
					{#if row.getIsExpanded()}
						<Table.Row class="hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-transparent">
							<Table.Cell colspan={row.getVisibleCells().length} class="p-0">
								<Table.Root>
									<Table.Header class="border-b">
										<Table.Row
											class="hover:bg-muted/30 hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-transparent"
										>
											<Table.Head class="w-23.5"></Table.Head>
											<Table.Head>Member Name</Table.Head>
											<Table.Head>Role</Table.Head>
											<Table.Head>Email</Table.Head>
											<Table.Head>Hire Date</Table.Head>
											<Table.Head>Date of Birth</Table.Head>
										</Table.Row>
									</Table.Header>
									<Table.Body>
										{#each row.original.members as member (member.email)}
											<Table.Row class="hover:bg-muted/30">
												<Table.Cell></Table.Cell>
												<Table.Cell>{member.name}</Table.Cell>
												<Table.Cell>{member.role}</Table.Cell>
												<Table.Cell>{member.email}</Table.Cell>
												<Table.Cell>{member.hireDate}</Table.Cell>
												<Table.Cell>{member.dob}</Table.Cell>
											</Table.Row>
										{/each}
									</Table.Body>
								</Table.Root>
							</Table.Cell>
						</Table.Row>
					{/if}
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">
		Data table with expanding sub-rows made
	</p>
</div>
