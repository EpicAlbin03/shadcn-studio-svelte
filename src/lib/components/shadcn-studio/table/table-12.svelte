<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<div class="mx-auto w-full max-w-lg">
	<div class="overflow-hidden rounded-md border">
		<Table.Root>
			<Table.Body>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Product Name</Table.Cell>
					<Table.Cell class="py-2">Iphone 16 PRO</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Serial Number</Table.Cell>
					<Table.Cell class="py-2">DF121543309KU</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Category</Table.Cell>
					<Table.Cell class="py-2">Smartphone</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Purchase Date</Table.Cell>
					<Table.Cell class="py-2">15/06/205</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Warranty Expiry</Table.Cell>
					<Table.Cell class="py-2">15/06/2026</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Origin</Table.Cell>
					<Table.Cell class="py-2">China</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Assign User</Table.Cell>
					<Table.Cell class="py-2">Alice Johnson</Table.Cell>
				</Table.Row>
				<Table.Row class="*:border-border [&>:not(:last-child)]:border-r">
					<Table.Cell class="bg-muted/50 py-2 font-medium">Value</Table.Cell>
					<Table.Cell class="py-2">$1,120.0</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Vertical table</p>
</div>
