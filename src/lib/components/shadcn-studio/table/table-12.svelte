<script lang="ts">
	import { Table, TableBody, TableCell, TableRow } from '$lib/components/ui/table';
</script>

<div class="mx-auto w-full max-w-lg">
	<div class="overflow-hidden rounded-md border">
		<Table>
			<TableBody>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Product Name</TableCell>
					<TableCell class="py-2">Iphone 16 PRO</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Serial Number</TableCell>
					<TableCell class="py-2">DF121543309KU</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Category</TableCell>
					<TableCell class="py-2">Smartphone</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Purchase Date</TableCell>
					<TableCell class="py-2">15/06/205</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Warranty Expiry</TableCell>
					<TableCell class="py-2">15/06/2026</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Origin</TableCell>
					<TableCell class="py-2">China</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Assign User</TableCell>
					<TableCell class="py-2">Alice Johnson</TableCell>
				</TableRow>
				<TableRow class="*:border-border [&>:not(:last-child)]:border-r">
					<TableCell class="bg-muted/50 py-2 font-medium">Value</TableCell>
					<TableCell class="py-2">$1,120.0</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Vertical table</p>
</div>
