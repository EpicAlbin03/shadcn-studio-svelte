<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { LanguagesIcon } from '@lucide/svelte';

	type Props = {
		open?: boolean;
		align?: 'start' | 'center' | 'end';
	};

	let { open, align }: Props = $props();

	let language = $state('english');
</script>

<DropdownMenu.Root {open}>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="icon">
				<LanguagesIcon />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-50" align={align || 'end'}>
		<DropdownMenu.RadioGroup bind:value={language}>
			<DropdownMenu.RadioItem
				value="english"
				class="pl-2 text-base data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden"
			>
				English
			</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem
				value="german"
				class="pl-2 text-base data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden"
			>
				Deutsch
			</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem
				value="spanish"
				class="pl-2 text-base data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden"
			>
				Española
			</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem
				value="portuguese"
				class="pl-2 text-base data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden"
			>
				Português
			</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem
				value="korean"
				class="pl-2 text-base data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground [&>span]:hidden"
			>
				한국인
			</DropdownMenu.RadioItem>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>
