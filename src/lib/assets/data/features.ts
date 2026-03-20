import PaintbrushVerticalIcon from '@lucide/svelte/icons/paintbrush-vertical';
import PaletteIcon from '@lucide/svelte/icons/palette';
import SeparatorVerticalIcon from '@lucide/svelte/icons/separator-vertical';
import SquareDashedBottomCodeIcon from '@lucide/svelte/icons/square-dashed-bottom-code';
import SwatchBookIcon from '@lucide/svelte/icons/swatch-book';
import TypeOutlineIcon from '@lucide/svelte/icons/type-outline';

export const features = [
	{
		icon: PaletteIcon,
		title: 'Live Theme Generator',
		description:
			'See your shadcn components transform instantly as you experiment with styles in real time.'
	},
	{
		icon: PaintbrushVerticalIcon,
		title: 'Color Mastery',
		description:
			'Play with background, text, and border hues using a sleek color picker for a unified design.'
	},
	{
		icon: TypeOutlineIcon,
		title: 'Typography Fine-Tuning',
		description:
			'Perfect your text with adjustable font sizes, weights, and transformations for a polished look.'
	},
	{
		icon: SquareDashedBottomCodeIcon,
		title: 'Tailwind v4 Compatibility',
		description: 'Effortlessly use Tailwind v4, supporting OKLCH, HSL, RGB & HEX color formats.'
	},
	{
		icon: SeparatorVerticalIcon,
		title: 'Stunning Theme Starters',
		description:
			'Kick off with gorgeous pre-built themes and customize light or dark modes in a breeze.'
	},
	{
		icon: SwatchBookIcon,
		title: 'Hold to Save Theme',
		description:
			'Preserve your custom themes with a quick hold, making them easy to reuse or share later.'
	}
];
