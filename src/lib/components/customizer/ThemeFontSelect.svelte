<script lang="ts">
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

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

<Select type="single" bind:value={() => value, (v) => onFontChange(v)}>
	<SelectTrigger class="h-12 w-full cursor-pointer">
		{value}
	</SelectTrigger>
	<SelectContent>
		{#each fontNames as fontName}
			<SelectItem value={fontName}>
				<span style={`font-family: ${fonts[fontName] ?? defaultValue}`}>
					{fontName}
				</span>
			</SelectItem>
		{/each}
	</SelectContent>
</Select>
