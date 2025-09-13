<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuLabel,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	let position = $state('bottom');
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">With radio</Button>
		{/snippet}
	</DropdownMenuTrigger>
	<DropdownMenuContent class="w-56">
		<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
		<DropdownMenuSeparator />
		<DropdownMenuRadioGroup bind:value={position}>
			<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
			<DropdownMenuRadioItem value="right" disabled>Right</DropdownMenuRadioItem>
		</DropdownMenuRadioGroup>
	</DropdownMenuContent>
</DropdownMenu>
