<script lang="ts">
	import { type ColumnDef, getCoreRowModel } from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import {
		FlexRender,
		createSvelteTable,
		renderSnippet
	} from '$lib/components/ui/data-table/index.js';
	import { Button } from '$lib/components/ui/button';
	import { ChevronDownIcon, ChevronUpIcon, GripVerticalIcon } from '@lucide/svelte';

	type Employee = {
		employeeId: number;
		firstName: string;
		lastName: string;
		jobTitle: string;
		department: string;
		dob: string;
		hireDate: string;
		salary: number;
	};

	const data: Employee[] = [
		{
			employeeId: 1,
			firstName: 'John',
			lastName: 'Doe',
			jobTitle: 'Software Engineer',
			department: 'Engineering',
			dob: '1990-01-01',
			hireDate: '2020-01-15',
			salary: 80000
		},
		{
			employeeId: 2,
			firstName: 'Jane',
			lastName: 'Smith',
			jobTitle: 'Product Manager',
			department: 'Product',
			dob: '1985-05-20',
			hireDate: '2019-03-10',
			salary: 95000
		},
		{
			employeeId: 3,
			firstName: 'Alice',
			lastName: 'Johnson',
			jobTitle: 'UX Designer',
			department: 'Design',
			dob: '1992-07-30',
			hireDate: '2021-06-01',
			salary: 70000
		},
		{
			employeeId: 4,
			firstName: 'Bob',
			lastName: 'Brown',
			jobTitle: 'Data Analyst',
			department: 'Analytics',
			dob: '1988-11-15',
			hireDate: '2018-09-20',
			salary: 75000
		}
	];

	const columns: ColumnDef<Employee>[] = [
		{
			id: 'firstName',
			header: 'First Name',
			accessorKey: 'firstName',
			cell: ({ row }) => {
				const firstNameSnippet = createRawSnippet<[string]>((getFirstName) => {
					const firstName = getFirstName();
					return {
						render: () => `<div class="font-medium">${firstName}</div>`
					};
				});
				return renderSnippet(firstNameSnippet, row.getValue('firstName'));
			},
			sortUndefined: 'last',
			sortDescFirst: false
		},
		{
			id: 'lastName',
			header: 'Last Name',
			accessorKey: 'lastName',
			cell: ({ row }) => {
				const lastNameSnippet = createRawSnippet<[string]>((getLastName) => {
					const lastName = getLastName();
					return {
						render: () => `<div>${lastName}</div>`
					};
				});
				return renderSnippet(lastNameSnippet, row.getValue('lastName'));
			}
		},
		{
			id: 'jobTitle',
			header: 'Job Title',
			accessorKey: 'jobTitle',
			cell: ({ row }) => {
				const jobTitleSnippet = createRawSnippet<[string]>((getJobTitle) => {
					const jobTitle = getJobTitle();
					return {
						render: () => `<div>${jobTitle}</div>`
					};
				});
				return renderSnippet(jobTitleSnippet, row.getValue('jobTitle'));
			}
		},
		{
			id: 'department',
			header: 'Department',
			accessorKey: 'department',
			cell: ({ row }) => {
				const departmentSnippet = createRawSnippet<[string]>((getDepartment) => {
					const department = getDepartment();
					return {
						render: () => `<div>${department}</div>`
					};
				});
				return renderSnippet(departmentSnippet, row.getValue('department'));
			}
		},
		{
			id: 'dob',
			header: 'Date of Birth',
			accessorKey: 'dob',
			cell: ({ row }) => {
				const dobSnippet = createRawSnippet<[string]>((getDob) => {
					const dob = getDob();
					return {
						render: () => `<div>${dob}</div>`
					};
				});
				return renderSnippet(dobSnippet, row.getValue('dob'));
			}
		},
		{
			id: 'hireDate',
			header: 'Hire Date',
			accessorKey: 'hireDate',
			cell: ({ row }) => {
				const hireDateSnippet = createRawSnippet<[string]>((getHireDate) => {
					const hireDate = getHireDate();
					return {
						render: () => `<div>${hireDate}</div>`
					};
				});
				return renderSnippet(hireDateSnippet, row.getValue('hireDate'));
			}
		},
		{
			id: 'salary',
			header: 'Salary',
			accessorKey: 'salary',
			cell: ({ row }) => {
				const salary = parseFloat(row.getValue('salary'));
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(salary);

				const salarySnippet = createRawSnippet<[string]>((getFormatted) => {
					const formattedSalary = getFormatted();
					return {
						render: () => `<div>${formattedSalary}</div>`
					};
				});
				return renderSnippet(salarySnippet, formatted);
			}
		}
	];

	let columnOrder = $state<string[]>(columns.map((column) => column.id as string));

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get columnOrder() {
				return columnOrder;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		onColumnOrderChange: (updater) => {
			if (typeof updater === 'function') {
				columnOrder = updater(columnOrder);
			} else {
				columnOrder = updater;
			}
		}
	});

	// Simplified drag and drop functionality without dnd-kit
	let draggedColumnId = $state<string | null>(null);
	let dragOverColumnId = $state<string | null>(null);

	function handleDragStart(event: DragEvent, columnId: string) {
		draggedColumnId = columnId;
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
			event.dataTransfer.setData('text/html', columnId);
		}
	}

	function handleDragOver(event: DragEvent, columnId: string) {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
		dragOverColumnId = columnId;
	}

	function handleDragLeave() {
		dragOverColumnId = null;
	}

	function handleDrop(event: DragEvent, targetColumnId: string) {
		event.preventDefault();

		if (draggedColumnId && draggedColumnId !== targetColumnId) {
			const oldIndex = columnOrder.indexOf(draggedColumnId);
			const newIndex = columnOrder.indexOf(targetColumnId);

			if (oldIndex !== -1 && newIndex !== -1) {
				const newOrder = [...columnOrder];
				const [movedItem] = newOrder.splice(oldIndex, 1);
				newOrder.splice(newIndex, 0, movedItem);
				columnOrder = newOrder;
			}
		}

		draggedColumnId = null;
		dragOverColumnId = null;
	}

	function handleDragEnd() {
		draggedColumnId = null;
		dragOverColumnId = null;
	}
</script>

<div class="w-full">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row class="bg-muted/50 [&>th]:border-t-0">
						{#each headerGroup.headers as header (header.id)}
							<Table.Head
								class="relative h-10 border-t before:absolute before:inset-y-0 before:start-0 before:w-px before:bg-border first:before:bg-transparent {dragOverColumnId ===
								header.column.id
									? 'bg-muted'
									: ''}"
								draggable="true"
								ondragstart={(e) => handleDragStart(e, header.column.id)}
								ondragover={(e) => handleDragOver(e, header.column.id)}
								ondragleave={handleDragLeave}
								ondrop={(e) => handleDrop(e, header.column.id)}
								ondragend={handleDragEnd}
								style="width: {header.column.getSize()}px; {draggedColumnId === header.column.id
									? 'opacity: 0.5;'
									: ''}"
								aria-sort={header.column.getIsSorted() === 'asc'
									? 'ascending'
									: header.column.getIsSorted() === 'desc'
										? 'descending'
										: 'none'}
							>
								<div class="flex items-center justify-start gap-0.5">
									<Button
										size="icon"
										variant="ghost"
										class="-ml-2 size-7 cursor-grab shadow-none"
										aria-label="Drag to reorder"
									>
										<GripVerticalIcon class="opacity-60" size={16} aria-hidden="true" />
									</Button>
									<span class="grow truncate">
										{#if !header.isPlaceholder}
											<FlexRender
												content={header.column.columnDef.header}
												context={header.getContext()}
											/>
										{/if}
									</span>
									<Button
										size="icon"
										variant="ghost"
										class="group -mr-1 size-7 shadow-none"
										onclick={header.column.getToggleSortingHandler()}
										onkeydown={(e) => {
											if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
												e.preventDefault();
												header.column.getToggleSortingHandler()?.(e);
											}
										}}
										aria-label="Toggle sorting"
									>
										{#if header.column.getIsSorted() === 'asc'}
											<ChevronUpIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
										{:else if header.column.getIsSorted() === 'desc'}
											<ChevronDownIcon class="shrink-0 opacity-60" size={16} aria-hidden="true" />
										{:else}
											<ChevronUpIcon
												class="shrink-0 opacity-0 group-hover:opacity-60"
												size={16}
												aria-hidden="true"
											/>
										{/if}
									</Button>
								</div>
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
								class="truncate {dragOverColumnId === cell.column.id ? 'bg-muted/50' : ''}"
								style="width: {cell.column.getSize()}px; {draggedColumnId === cell.column.id
									? 'opacity: 0.5;'
									: ''}"
							>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Data table with draggable columns</p>
</div>
