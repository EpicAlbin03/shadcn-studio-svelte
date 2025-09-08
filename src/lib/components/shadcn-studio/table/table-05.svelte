<script lang="ts">
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableFooter,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

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

<Table>
	<TableCaption>Table without border.</TableCaption>
	<TableHeader>
		<TableRow class="border-none bg-muted/50">
			<TableHead class="w-25">Invoice</TableHead>
			<TableHead>Status</TableHead>
			<TableHead>Method</TableHead>
			<TableHead class="text-right">Amount</TableHead>
		</TableRow>
	</TableHeader>
	<TableBody>
		{#each invoices as invoice (invoice.invoice)}
			<TableRow class="border-none">
				<TableCell class="font-medium">{invoice.invoice}</TableCell>
				<TableCell>{invoice.paymentStatus}</TableCell>
				<TableCell>{invoice.paymentMethod}</TableCell>
				<TableCell class="text-right">{invoice.totalAmount}</TableCell>
			</TableRow>
		{/each}
	</TableBody>
	<TableFooter class="border-none">
		<TableRow>
			<TableCell colspan={3}>Total</TableCell>
			<TableCell class="text-right">$2,500.00</TableCell>
		</TableRow>
	</TableFooter>
</Table>
