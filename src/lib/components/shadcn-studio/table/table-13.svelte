<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	const items = [
		{
			id: '1',
			name: 'Philip George',
			src: '/avatars/01.webp',
			fallback: 'PG',
			email: 'philipgeorge20@gmail.com',
			location: 'Mumbai, India',
			status: 'Active',
			balance: '$10,696.00'
		},
		{
			id: '2',
			name: 'Tiana Curtis',
			src: '/avatars/02.webp',
			fallback: 'TC',
			email: 'tiana12@yahoo.com',
			location: 'New York, US',
			status: 'applied',
			balance: '$0.00'
		},
		{
			id: '3',
			name: 'Jaylon Donin',
			src: '/avatars/03.webp',
			fallback: 'JD',
			email: 'jaylon23d.@outlook.com',
			location: 'Washington, US',
			status: 'Active',
			balance: '$569.00'
		},
		{
			id: '4',
			name: 'Kim Yim',
			src: '/avatars/04.webp',
			fallback: 'KY',
			email: 'kim96@gmail.com',
			location: 'Busan, South Korea',
			status: 'Inactive',
			balance: '-$506.90'
		}
	];
</script>

<div class="w-full">
	<div class="[&>div]:rounded-sm [&>div]:border">
		<Table.Root>
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head>Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Location</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head class="text-right">Balance</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each items as item (item.id)}
					<Table.Row>
						<Table.Cell>
							<div class="flex items-center gap-3">
								<Avatar.Root>
									<Avatar.Image src={item.src} alt={item.fallback} />
									<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
								</Avatar.Root>
								<div class="font-medium">{item.name}</div>
							</div>
						</Table.Cell>
						<Table.Cell>{item.email}</Table.Cell>
						<Table.Cell>{item.location}</Table.Cell>
						<Table.Cell>{item.status}</Table.Cell>
						<Table.Cell class="text-right">{item.balance}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with avatar</p>
</div>
