<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	type Props = {
		fonts: Record<string, string>;
		defaultValue: string;
		currentFont: string | null;
		onFontChange: (font: string) => void;
	};

	let { fonts, defaultValue, currentFont, onFontChange }: Props = $props();

	let value = $derived(currentFont || 'Select font theme');
	const fontNames = $derived(Object.keys(fonts));
</script>

<Select.Root type="single" bind:value={() => value, (v) => onFontChange(v)}>
	<Select.Trigger class="h-12 w-full cursor-pointer">
		{value}
	</Select.Trigger>
	<Select.Content>
		{#each fontNames as fontName}
			<Select.Item value={fontName}>
				<span style={`font-family: ${fonts[fontName] ?? defaultValue}`}>
					{fontName}
				</span>
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
