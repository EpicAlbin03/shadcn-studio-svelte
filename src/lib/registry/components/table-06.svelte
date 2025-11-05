<script lang="ts">
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
</script>

<Table.Root>
	<Table.Caption>Striped rows table</Table.Caption>
	<Table.Header>
		<Table.Row class="hover:bg-transparent">
			<Table.Head class="w-25">Invoice</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Method</Table.Head>
			<Table.Head class="text-right">Amount</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each invoices as invoice (invoice.invoice)}
			<Table.Row class="odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50">
				<Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
				<Table.Cell>{invoice.paymentStatus}</Table.Cell>
				<Table.Cell>{invoice.paymentMethod}</Table.Cell>
				<Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
	<Table.Footer class="bg-transparent">
		<Table.Row class="hover:bg-transparent">
			<Table.Cell colspan={3}>Total</Table.Cell>
			<Table.Cell class="text-right">$2,500.00</Table.Cell>
		</Table.Row>
	</Table.Footer>
</Table.Root>
