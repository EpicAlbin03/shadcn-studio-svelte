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

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">With radio</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
		<DropdownMenuSeparator />
		<DropdownMenu.RadioGroup bind:value={position}>
			<DropdownMenu.RadioItem value="top">Top</DropdownMenuRadioItem>
			<DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenuRadioItem>
			<DropdownMenu.RadioItem value="right" disabled>Right</DropdownMenuRadioItem>
		</DropdownMenuRadioGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
