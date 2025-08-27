<script lang="ts">
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

	type Props = {
		fonts: Record<string, string>;
		defaultValue: string;
		currentFont: string | null;
		onFontChange: (font: string) => void;
	};

	let { fonts, defaultValue, currentFont, onFontChange }: Props = $props();

	let value = $state(fonts[currentFont ?? defaultValue]);
	const fontNames = $derived.by(() => ['System', ...Object.keys(fonts)]);

	const onValueChange = (v: string) => {
		onFontChange(v);
	};
</script>

<Select type="single" bind:value {onValueChange}>
	<SelectTrigger class="h-12 w-full cursor-pointer">
		{value || 'Select theme font'}
	</SelectTrigger>
	<SelectContent>
		{#each fontNames as fontName}
			<SelectItem value={fonts[fontName] ?? defaultValue}>
				<span style={`fontFamily: ${fonts[fontName] ?? defaultValue}`}>
					{fontName}
				</span>
			</SelectItem>
		{/each}
	</SelectContent>
</Select>
