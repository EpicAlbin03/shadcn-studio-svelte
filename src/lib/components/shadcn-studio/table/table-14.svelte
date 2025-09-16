<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];

	let page = $state(1);
	const perPage = 3;

	const currentPageInvoices = $derived.by(() => {
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		return invoices.slice(startIndex, endIndex);
	});
</script>

<div class="w-full">
	<div class="overflow-hidden rounded-md border">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-25">Invoice</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Method</Table.Head>
					<Table.Head class="text-right">Amount</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each currentPageInvoices as invoice (invoice.invoice)}
					<Table.Row>
						<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
						<Table.Cell>{invoice.paymentStatus}</Table.Cell>
						<Table.Cell>{invoice.paymentMethod}</Table.Cell>
						<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.Cell colspan={3}>Total</Table.Cell>
					<Table.Cell class="text-right">$2,500.00</Table.Cell>
				</Table.Row>
			</Table.Footer>
		</Table.Root>
	</div>
	<Pagination.Root count={invoices.length} {perPage} bind:page class="mt-4">
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PaginationPrevButton />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with pagination</p>
</div>
