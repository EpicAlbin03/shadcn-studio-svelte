<script lang="ts">
	import {
		Pagination,
		PaginationContent,
		PaginationEllipsis,
		PaginationItem,
		PaginationLink,
		PaginationNextButton,
		PaginationPrevButton
	} from '$lib/components/ui/pagination';
	import {
		Table,
		TableBody,
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
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead class="w-25">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead class="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each currentPageInvoices as invoice (invoice.invoice)}
					<TableRow>
						<TableCell class="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell class="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colspan={3}>Total</TableCell>
					<TableCell class="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	</div>
	<Pagination count={invoices.length} {perPage} bind:page class="mt-4">
		{#snippet children({ pages, currentPage })}
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevButton />
				</PaginationItem>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					{:else}
						<PaginationItem>
							<PaginationLink {page} isActive={currentPage === page.value}>
								{page.value}
							</PaginationLink>
						</PaginationItem>
					{/if}
				{/each}
				<PaginationItem>
					<PaginationNextButton />
				</PaginationItem>
			</PaginationContent>
		{/snippet}
	</Pagination>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with pagination</p>
</div>
