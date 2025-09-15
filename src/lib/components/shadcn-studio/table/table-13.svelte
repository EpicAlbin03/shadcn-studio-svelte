<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

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
		<Table>
			<TableHeader>
				<TableRow class="hover:bg-transparent">
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Location</TableHead>
					<TableHead>Status</TableHead>
					<TableHead class="text-right">Balance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each items as item (item.id)}
					<TableRow>
						<TableCell>
							<div class="flex items-center gap-3">
								<Avatar.Root>
									<Avatar.Image src={item.src} alt={item.fallback} />
									<Avatar.Fallback class="text-xs">{item.fallback}</Avatar.Fallback>
								</Avatar.Root>
								<div class="font-medium">{item.name}</div>
							</div>
						</TableCell>
						<TableCell>{item.email}</TableCell>
						<TableCell>{item.location}</TableCell>
						<TableCell>{item.status}</TableCell>
						<TableCell class="text-right">{item.balance}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
	<p class="mt-4 text-center text-sm text-muted-foreground">Table with avatar</p>
</div>
