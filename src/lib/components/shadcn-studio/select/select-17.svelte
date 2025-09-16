<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	const languages = [
		{ value: 'hi', label: 'Hindi' },
		{ value: 'en', label: 'English' },
		{ value: 'es', label: 'Spanish' },
		{ value: 'zh', label: 'Mandarin' },
		{ value: 'fr', label: 'French' }
	];

	const id = $props.id();

	let value = $state('hi');
	const triggerContent = $derived(
		languages.find((f) => f.value === value)?.label ?? 'Select a language'
	);
</script>

<div class="w-full max-w-xs space-y-2">
	<Label for={id}>Select with background color</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			{id}
			class="w-full border-sky-600 bg-sky-600/10 text-sky-600 shadow-none focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:focus-visible:ring-sky-400/40 [&_svg]:!text-sky-600 dark:[&_svg]:!text-sky-400"
		>
			{triggerContent}
		</Select.Trigger>
		<Select.Content>
			<Select.Group
				class="[&_div:focus]:bg-sky-600/20 [&_div:focus]:text-sky-600 dark:[&_div:focus]:bg-sky-400/20 dark:[&_div:focus]:text-sky-400"
			>
				<Select.Label>Languages</Select.Label>
				{#each languages as language (language.value)}
					<Select.Item
						value={language.value}
						label={language.label}
						class="focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400"
					>
						{language.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
