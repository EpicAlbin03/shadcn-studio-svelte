<script lang="ts">
	import SliderWithInput from './SliderWithInput.svelte';
	import ColorSwatch from './color-panel/ColorSwatch.svelte';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';

	type Props = {
		shadowColor: string;
		shadowOpacity: number;
		shadowBlur: number;
		shadowSpread: number;
		shadowOffsetX: number;
		shadowOffsetY: number;
		onChange: (key: string, value: any) => void;
	};

	let {
		shadowColor,
		shadowOpacity,
		shadowBlur,
		shadowSpread,
		shadowOffsetX,
		shadowOffsetY,
		onChange
	}: Props = $props();
</script>

<Accordion type="single" value="shadow">
	<AccordionItem value="shadow" class="rounded-lg !border px-4">
		<AccordionTrigger class="cursor-pointer py-3 text-base font-medium">Shadow</AccordionTrigger>
		<AccordionContent class="space-y-3 pt-2 pb-4">
			<div class="space-y-4">
				<div>
					<ColorSwatch
						value={shadowColor}
						onChange={(color: string) => onChange('shadow-color', color)}
						label="Shadow Color"
					/>
				</div>

				<div>
					<SliderWithInput
						value={shadowOpacity}
						onChange={(value) => onChange('shadow-opacity', value)}
						min={0}
						max={1}
						step={0.01}
						unit=""
						label="Shadow Opacity"
					/>
				</div>

				<div>
					<SliderWithInput
						value={shadowBlur}
						onChange={(value) => onChange('shadow-blur', value)}
						min={0}
						max={50}
						step={0.5}
						unit="px"
						label="Blur Radius"
					/>
				</div>

				<div>
					<SliderWithInput
						value={shadowSpread}
						onChange={(value) => onChange('shadow-spread', value)}
						min={-50}
						max={50}
						step={0.5}
						unit="px"
						label="Spread"
					/>
				</div>

				<div>
					<SliderWithInput
						value={shadowOffsetX}
						onChange={(value) => onChange('shadow-offset-x', value)}
						min={-50}
						max={50}
						step={0.5}
						unit="px"
						label="Offset X"
					/>
				</div>

				<div>
					<SliderWithInput
						value={shadowOffsetY}
						onChange={(value) => onChange('shadow-offset-y', value)}
						min={-50}
						max={50}
						step={0.5}
						unit="px"
						label="Offset Y"
					/>
				</div>
			</div>
		</AccordionContent>
	</AccordionItem>
</Accordion>
