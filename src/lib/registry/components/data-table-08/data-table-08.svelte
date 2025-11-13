<script lang="ts" module>
	export type Employee = {
		employeeId: number;
		firstName: string;
		lastName: string;
		jobTitle: string;
		department: string;
		dob: string;
		hireDate: string;
		salary: number;
	};
</script>

<script lang="ts">
	import {
		type ColumnDef,
		getCoreRowModel,
		getSortedRowModel,
		type SortingState
	} from '@tanstack/table-core';
	import { createRawSnippet } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { createSvelteTable, renderSnippet } from '$lib/components/ui/data-table/index.js';
	import {
		closestCenter,
		DndContext,
		KeyboardSensor,
		MouseSensor,
		TouchSensor,
		useSensor,
		useSensors,
		type DragEndEvent
	} from '@dnd-kit-svelte/core';
	import {
		arrayMove,
		horizontalListSortingStrategy,
		SortableContext
	} from '@dnd-kit-svelte/sortable';
	import DragAlongCell from './DragAlongCell.svelte';
	import DraggableTableHeader from './DraggableTableHeader.svelte';
	import { restrictToHorizontalAxis } from '@dnd-kit-svelte/modifiers';

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
				const firstName = row.getValue('firstName');
				const firstNameSnippet = createRawSnippet(() => {
					return {
						render: () => `<div class="font-medium">${firstName}</div>`
					};
				});
				return renderSnippet(firstNameSnippet);
			}
		},
		{
			id: 'lastName',
			header: 'Last Name',
			accessorKey: 'lastName',
			cell: ({ row }) => {
				const lastName = row.getValue('lastName');
				const lastNameSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${lastName}</div>`
					};
				});
				return renderSnippet(lastNameSnippet);
			}
		},
		{
			id: 'jobTitle',
			header: 'Job Title',
			accessorKey: 'jobTitle',
			cell: ({ row }) => {
				const jobTitle = row.getValue('jobTitle');
				const jobTitleSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${jobTitle}</div>`
					};
				});
				return renderSnippet(jobTitleSnippet);
			}
		},
		{
			id: 'department',
			header: 'Department',
			accessorKey: 'department',
			cell: ({ row }) => {
				const department = row.getValue('department');
				const departmentSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${department}</div>`
					};
				});
				return renderSnippet(departmentSnippet);
			}
		},
		{
			id: 'dob',
			header: 'Date of Birth',
			accessorKey: 'dob',
			cell: ({ row }) => {
				const dob = row.getValue('dob');
				const dobSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${dob}</div>`
					};
				});
				return renderSnippet(dobSnippet);
			}
		},
		{
			id: 'hireDate',
			header: 'Hire Date',
			accessorKey: 'hireDate',
			cell: ({ row }) => {
				const hireDate = row.getValue('hireDate');
				const hireDateSnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${hireDate}</div>`
					};
				});
				return renderSnippet(hireDateSnippet);
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

				const salarySnippet = createRawSnippet(() => {
					return {
						render: () => `<div>${formatted}</div>`
					};
				});
				return renderSnippet(salarySnippet);
			}
		}
	];

	let sorting = $state<SortingState>([]);
	let columnOrder = $state<string[]>(columns.map((column) => column.id as string));

	const table = createSvelteTable({
		get data() {
			return data;
		},
		columns,
		state: {
			get sorting() {
				return sorting;
			},
			get columnOrder() {
				return columnOrder;
			}
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: (updater) => {
			if (typeof updater === 'function') {
				sorting = updater(sorting);
			} else {
				sorting = updater;
			}
		},
		onColumnOrderChange: (updater) => {
			if (typeof updater === 'function') {
				columnOrder = updater(columnOrder);
			} else {
				columnOrder = updater;
			}
		}
	});

	const sortableId = $props.id();

	const sensors = useSensors(
		useSensor(MouseSensor, {}),
		useSensor(TouchSensor, {}),
		useSensor(KeyboardSensor, {})
	);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = columnOrder.indexOf(active.id as string);
			const newIndex = columnOrder.indexOf(over.id as string);
			columnOrder = arrayMove(columnOrder, oldIndex, newIndex);
		}
	}
</script>

<div class="w-full">
	<div class="rounded-md border">
		<DndContext
			id={sortableId}
			collisionDetection={closestCenter}
			modifiers={[restrictToHorizontalAxis]}
			onDragEnd={handleDragEnd}
			{sensors}
		>
			<Table.Root>
				<Table.Header>
					{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
						<Table.Row class="bg-muted/50 [&>th]:border-t-0">
							<SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
								{#each headerGroup.headers as header (header.id)}
									<DraggableTableHeader {header} />
								{/each}
							</SortableContext>
						</Table.Row>
					{/each}
				</Table.Header>
				<Table.Body>
					{#if table.getRowModel().rows?.length}
						{#each table.getRowModel().rows as row (row.id)}
							<Table.Row data-state={row.getIsSelected() && 'selected'}>
								<SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
									{#each row.getVisibleCells() as cell (cell.id)}
										<DragAlongCell {cell} />
									{/each}
								</SortableContext>
							</Table.Row>
						{/each}
					{:else}
						<Table.Row>
							<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
						</Table.Row>
					{/if}
				</Table.Body>
			</Table.Root>
		</DndContext>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">
		Data table with draggable columns using
		<a
			href="https://github.com/HanielU/dnd-kit-svelte"
			class="underline hover:text-primary"
			target="_blank"
		>
			dnd-kit-svelte
		</a>
	</p>
</div>
