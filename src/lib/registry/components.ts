import {
	AccordionSVG,
	AlertSVG,
	AvatarSVG,
	BadgeSVG,
	BreadcrumbSVG,
	ButtonGroupSVG,
	ButtonSVG,
	CalendarSVG,
	CardSVG,
	CheckboxSVG,
	CollapsibleSVG,
	ComboboxSVG,
	DataTableSVG,
	DatepickerSVG,
	DialogSVG,
	DropdownSVG,
	FormSVG,
	InputOTPSVG,
	InputSVG,
	PaginationSVG,
	PopoverSVG,
	RadioGroupSVG,
	SelectSVG,
	SheetSVG,
	SonnerSVG,
	SwitchSVG,
	TableSVG,
	TabsSVG,
	TextareaSVG,
	TooltipSVG
} from '$lib/assets/svg';
import { componentMeta } from './component-meta';
import FormNote from '$lib/components/form-note.svelte';
import type { CssSchema, CssVars } from '@shadcn-svelte/registry';
import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type ComponentMeta = {
	cssVars?: CssVars;
	css?: CssSchema;
};

export type ComponentProps = {
	id: string;
	name?: string;
	class?: string;
	badge?: string;
	underConstruction?: boolean;
	isAnimated?: boolean;
} & ComponentMeta;

export type ComponentCategory = {
	id: string;
	name?: string;
	svg?: Component<SVGAttributes<SVGElement>>;
	links?: { label: string; href: string }[];
	components: ComponentProps[];
	breakpoints?: {
		xs?: number;
		sm?: number;
		md?: number;
		lg?: number;
		xl?: number;
	};
	badge?: string;
	note?: Component;
	comingSoon?: boolean;
	hasAnimation?: boolean;
};

function defineCategories(categories: ComponentCategory[]) {
	// Apply defaults
	return categories.map((category) => ({
		...category,
		name: category.name ?? category.id,
		breakpoints: {
			xs: 1,
			...category.breakpoints
		},
		hasAnimation: category.components.some((component) => component.isAnimated)
	})).filter((category) => !category.comingSoon);
}

export const componentCategories = defineCategories([
	{
		id: 'accordion',
		name: 'Accordion',
		svg: AccordionSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/accordion' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/accordion' }
		],
		components: [
			{ id: 'accordion-01' },
			{ id: 'accordion-02' },
			{ id: 'accordion-03' },
			{ id: 'accordion-04' },
			{ id: 'accordion-05' },
			{ id: 'accordion-06' },
			{ id: 'accordion-07' },
			{ id: 'accordion-08' },
			{ id: 'accordion-09' },
			{ id: 'accordion-10' },
			{ id: 'accordion-11' },
			{ id: 'accordion-12' },
			{ id: 'accordion-13' },
			{ id: 'accordion-14' },
			{ id: 'accordion-15' },
			{ id: 'accordion-16' }
		]
	},
	{
		id: 'alert',
		name: 'Alert',
		svg: AlertSVG,
		breakpoints: {
			md: 2
		},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/alert' }],
		components: [
			{ id: 'alert-01' },
			{ id: 'alert-02' },
			{ id: 'alert-03' },
			{ id: 'alert-04' },
			{ id: 'alert-05' },
			{ id: 'alert-06' },
			{ id: 'alert-07' },
			{ id: 'alert-08' },
			{ id: 'alert-09' },
			{ id: 'alert-10' },
			{ id: 'alert-11' },
			{ id: 'alert-12' },
			{ id: 'alert-13' },
			{ id: 'alert-14' },
			{ id: 'alert-15' },
			{ id: 'alert-16' },
			{ id: 'alert-17' },
			{ id: 'alert-18' },
			{ id: 'alert-19' },
			{ id: 'alert-20' },
			{ id: 'alert-21' },
			{ id: 'alert-22' },
			{ id: 'alert-23' },
			{ id: 'alert-24' },
			{ id: 'alert-25' },
			{ id: 'alert-26' },
			{ id: 'alert-27' },
			{ id: 'alert-28' },
			{ id: 'alert-29' },
			{ id: 'alert-30' }
		]
	},
	{
		id: 'avatar',
		name: 'Avatar',
		svg: AvatarSVG,
		breakpoints: {
			sm: 2,
			lg: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/avatar' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/avatar' }
		],
		components: [
			{ id: 'avatar-01' },
			{ id: 'avatar-02' },
			{ id: 'avatar-03' },
			{ id: 'avatar-04' },
			{ id: 'avatar-05' },
			{ id: 'avatar-06' },
			{ id: 'avatar-07' },
			{ id: 'avatar-08' },
			{ id: 'avatar-09' },
			{ id: 'avatar-10' },
			{ id: 'avatar-11' },
			{ id: 'avatar-12' },
			{ id: 'avatar-13' },
			{ id: 'avatar-14' },
			{ id: 'avatar-15' },
			{ id: 'avatar-16' },
			{ id: 'avatar-17' },
			{ id: 'avatar-18' },
			{ id: 'avatar-19' },
			{ id: 'avatar-20' },
			{ id: 'avatar-21' }
		]
	},
	{
		id: 'badge',
		name: 'Badge',
		svg: BadgeSVG,
		breakpoints: {
			sm: 2,
			lg: 3
		},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/badge' }],
		components: [
			{ id: 'badge-01' },
			{ id: 'badge-02' },
			{ id: 'badge-03' },
			{ id: 'badge-04' },
			{ id: 'badge-05' },
			{ id: 'badge-06' },
			{ id: 'badge-07' },
			{ id: 'badge-08' },
			{ id: 'badge-09' },
			{ id: 'badge-10' },
			{ id: 'badge-11' },
			{ id: 'badge-12' },
			{ id: 'badge-13' },
			{ id: 'badge-14' },
			{ id: 'badge-15' },
			{ id: 'badge-16' },
			{ id: 'badge-17' },
			{ id: 'badge-18' },
			{ id: 'badge-19' },
			{ id: 'badge-20' },
			{ id: 'badge-21' },
			{ id: 'badge-22' },
			{ id: 'badge-23' },
			{ id: 'badge-24' }
		]
	},
	{
		id: 'breadcrumb',
		name: 'Breadcrumb',
		svg: BreadcrumbSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/breadcrumb' }
		],
		components: [
			{ id: 'breadcrumb-01' },
			{ id: 'breadcrumb-02' },
			{ id: 'breadcrumb-03' },
			{ id: 'breadcrumb-04' },
			{ id: 'breadcrumb-05' },
			{ id: 'breadcrumb-06' },
			{ id: 'breadcrumb-07' },
			{ id: 'breadcrumb-08' }
		]
	},
	{
		id: 'button',
		name: 'Button',
		svg: ButtonSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/button' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/button' }
		],
		badge: '+8 New',
		components: [
			{ id: 'button-01' },
			{ id: 'button-02' },
			{ id: 'button-03' },
			{ id: 'button-04' },
			{ id: 'button-05' },
			{ id: 'button-06' },
			{ id: 'button-07' },
			{ id: 'button-08' },
			{ id: 'button-09' },
			{ id: 'button-10' },
			{ id: 'button-11' },
			{ id: 'button-12' },
			{ id: 'button-13' },
			{ id: 'button-14' },
			{ id: 'button-15' },
			{ id: 'button-16' },
			{ id: 'button-17' },
			{ id: 'button-18' },
			{ id: 'button-19' },
			{ id: 'button-20' },
			{ id: 'button-21' },
			{ id: 'button-22' },
			{ id: 'button-23' },
			{ id: 'button-24' },
			{ id: 'button-25' },
			{ id: 'button-26' },
			{ id: 'button-27' },
			{ id: 'button-28' },
			{ id: 'button-29' },
			{ id: 'button-30' },
			{ id: 'button-31' },
			{ id: 'button-32' },
			{ id: 'button-33' },
			{ id: 'button-34' },
			{ id: 'button-35' },
			{ id: 'button-36' },
			{ id: 'button-37' },
			{ id: 'button-38' },
			{ id: 'button-39', isAnimated: true },
			{ id: 'button-40', isAnimated: true },
			{ id: 'button-41', isAnimated: true },
			{ id: 'button-42', isAnimated: true },
			{ id: 'button-43', isAnimated: true },
			{ id: 'button-44', isAnimated: true },
			{ id: 'button-45', isAnimated: true },
			{ id: 'button-46', isAnimated: true, ...componentMeta['button-46'] },
			{ id: 'button-47', isAnimated: true },
			{ id: 'button-48', isAnimated: true, badge: 'New' },
			{ id: 'button-49', isAnimated: true, badge: 'New' },
			{ id: 'button-50', isAnimated: true, badge: 'New' },
			{ id: 'button-51', isAnimated: true, badge: 'New' },
			{ id: 'button-52', isAnimated: true, badge: 'New' },
			{ id: 'button-53', isAnimated: true, badge: 'New' },
			{ id: 'button-54', isAnimated: true, badge: 'New' },
			{ id: 'button-55', isAnimated: true, ...componentMeta['button-55'], badge: 'New' }
		]
	},
	{
		id: 'button-group',
		name: 'Button Group',
		svg: ButtonGroupSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/button' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/button' }
		],
		components: [
			{ id: 'button-group-01' },
			{ id: 'button-group-02' },
			{ id: 'button-group-03' },
			{ id: 'button-group-04' },
			{ id: 'button-group-05' },
			{ id: 'button-group-06' },
			{ id: 'button-group-07' },
			{ id: 'button-group-08' },
			{ id: 'button-group-09' },
			{ id: 'button-group-10' },
			{ id: 'button-group-11' },
			{ id: 'button-group-12' },
			{ id: 'button-group-13', isAnimated: true },
			{ id: 'button-group-14', isAnimated: true },
			{ id: 'button-group-15', isAnimated: true },
			{ id: 'button-group-16', isAnimated: true }
		]
	},
	{
		id: 'calendar',
		name: 'Calendar',
		svg: CalendarSVG,
		breakpoints: {
			xl: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/calendar' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/calendar' }
		],
		components: [
			{ id: 'calendar-01' },
			{ id: 'calendar-02' },
			{ id: 'calendar-03' },
			{ id: 'calendar-04' },
			{ id: 'calendar-05' },
			{ id: 'calendar-06' },
			{ id: 'calendar-07' },
			{ id: 'calendar-08' },
			{ id: 'calendar-09' },
			{ id: 'calendar-10' },
			{ id: 'calendar-11' },
			{ id: 'calendar-12' },
			{ id: 'calendar-13' },
			{ id: 'calendar-14' },
			{ id: 'calendar-15' },
			{ id: 'calendar-16' },
			{ id: 'calendar-17', underConstruction: true },
			{ id: 'calendar-18' },
			{ id: 'calendar-19' },
			{ id: 'calendar-20' },
			{ id: 'calendar-21', underConstruction: true },
			{ id: 'calendar-22' },
			{ id: 'calendar-23' },
			{ id: 'calendar-24' },
			{ id: 'calendar-25' }
		]
	},
	{
		id: 'card',
		name: 'Card',
		svg: CardSVG,
		breakpoints: {
			xl: 2
		},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/card' }],
		components: [
			{ id: 'card-01' },
			{ id: 'card-02' },
			{ id: 'card-03' },
			{ id: 'card-04' },
			{ id: 'card-05' },
			{ id: 'card-06' },
			{ id: 'card-07' },
			{ id: 'card-08' },
			{ id: 'card-09' },
			{ id: 'card-10' },
			{ id: 'card-11' },
			{ id: 'card-12' },
			{ id: 'card-13' },
			{ id: 'card-14' },
			{ id: 'card-15', class: 'col-span-full border-e-0' },
			{ id: 'card-16', isAnimated: true },
			{ id: 'card-17', isAnimated: true }
		]
	},
	{
		id: 'checkbox',
		name: 'Checkbox',
		svg: CheckboxSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/checkbox' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/checkbox' }
		],
		components: [
			{ id: 'checkbox-01' },
			{ id: 'checkbox-02' },
			{ id: 'checkbox-03' },
			{ id: 'checkbox-04' },
			{ id: 'checkbox-05' },
			{ id: 'checkbox-06' },
			{ id: 'checkbox-07' },
			{ id: 'checkbox-08' },
			{ id: 'checkbox-09' },
			{ id: 'checkbox-10' },
			{ id: 'checkbox-11' },
			{ id: 'checkbox-12' },
			{ id: 'checkbox-13' },
			{ id: 'checkbox-14' },
			{ id: 'checkbox-15' },
			{ id: 'checkbox-16' },
			{ id: 'checkbox-17', isAnimated: true },
			{ id: 'checkbox-18', isAnimated: true },
			{ id: 'checkbox-19', isAnimated: true }
		]
	},
	{
		id: 'collapsible',
		name: 'Collapsible',
		svg: CollapsibleSVG,
		breakpoints: {
			xl: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/collapsible' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/collapsible' }
		],
		components: [
			{ id: 'collapsible-01' },
			{ id: 'collapsible-02' },
			{ id: 'collapsible-03' },
			{ id: 'collapsible-04' },
			{ id: 'collapsible-05' },
			{ id: 'collapsible-06' },
			{ id: 'collapsible-07' },
			{ id: 'collapsible-08' },
			{ id: 'collapsible-09' },
			{ id: 'collapsible-10', isAnimated: true }
		]
	},
	{
		id: 'combobox',
		name: 'Combobox',
		svg: ComboboxSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/combobox' }
		],
		components: [
			{ id: 'combobox-01' },
			{ id: 'combobox-02' },
			{ id: 'combobox-03' },
			{ id: 'combobox-04' },
			{ id: 'combobox-05' },
			{ id: 'combobox-06' },
			{ id: 'combobox-07' },
			{ id: 'combobox-08' },
			{ id: 'combobox-09' },
			{ id: 'combobox-10' },
			{ id: 'combobox-11' },
			{ id: 'combobox-12' },
			{ id: 'combobox-13', isAnimated: true },
			{ id: 'combobox-14', isAnimated: true }
		]
	},
	{
		id: 'data-table',
		name: 'Data Table',
		svg: DataTableSVG,
		breakpoints: {},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/data-table' },
			{
				label: 'tanstack-table',
				href: 'https://bits-ui.com/docs/components/https://tanstack.com/table/v8/docs/introduction'
			}
		],
		components: [
			{ id: 'data-table-01' },
			{ id: 'data-table-02' },
			{ id: 'data-table-03' },
			{ id: 'data-table-04' },
			{ id: 'data-table-05' },
			{ id: 'data-table-06' },
			{ id: 'data-table-07' },
			{ id: 'data-table-08' },
			{ id: 'data-table-14' },
			{ id: 'data-table-09' },
			{ id: 'data-table-10' },
			{ id: 'data-table-11' },
			{ id: 'data-table-12' },
			{ id: 'data-table-13' }
		]
	},
	{
		id: 'date-picker',
		name: 'Date and Time Picker',
		svg: DatepickerSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/data-table' }
		],
		components: [
			{ id: 'date-picker-01' },
			{ id: 'date-picker-02' },
			{ id: 'date-picker-03' },
			{ id: 'date-picker-04' },
			{ id: 'date-picker-05' },
			{ id: 'date-picker-06' },
			{ id: 'date-picker-07' },
			{ id: 'date-picker-08' },
			{ id: 'date-picker-09' },
			{ id: 'date-picker-10' },
			{ id: 'date-picker-11' },
			{ id: 'date-picker-12' },
			{ id: 'date-picker-13', class: 'col-span-full border-e-0' }
		]
	},
	{
		id: 'dialog',
		name: 'Dialog',
		svg: DialogSVG,
		breakpoints: {
			md: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/dialog' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/dialog' }
		],
		components: [
			{ id: 'dialog-01' },
			{ id: 'dialog-02' },
			{ id: 'dialog-03' },
			{ id: 'dialog-04' },
			{ id: 'dialog-05' },
			{ id: 'dialog-06' },
			{ id: 'dialog-07' },
			{ id: 'dialog-08' },
			{ id: 'dialog-09' },
			{ id: 'dialog-10' },
			{ id: 'dialog-11' },
			{ id: 'dialog-12' },
			{ id: 'dialog-13' },
			{ id: 'dialog-14' },
			{ id: 'dialog-15' },
			{ id: 'dialog-16' },
			{ id: 'dialog-17' },
			{ id: 'dialog-18' },
			{ id: 'dialog-19' },
			{ id: 'dialog-20' },
			{ id: 'dialog-21' },
			{ id: 'dialog-22' },
			{ id: 'dialog-23' },
			{ id: 'dialog-24', isAnimated: true },
			{ id: 'dialog-25', isAnimated: true },
			{ id: 'dialog-26', isAnimated: true }
		]
	},
	{
		id: 'dropdown-menu',
		name: 'Dropdown Menu',
		svg: DropdownSVG,
		breakpoints: {
			sm: 2,
			md: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/dropdown-menu' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/dropdown-menu' }
		],
		components: [
			{ id: 'dropdown-menu-01' },
			{ id: 'dropdown-menu-02' },
			{ id: 'dropdown-menu-03' },
			{ id: 'dropdown-menu-04' },
			{ id: 'dropdown-menu-05' },
			{ id: 'dropdown-menu-06' },
			{ id: 'dropdown-menu-07' },
			{ id: 'dropdown-menu-08' },
			{ id: 'dropdown-menu-09' },
			{ id: 'dropdown-menu-10' },
			{ id: 'dropdown-menu-11' },
			{ id: 'dropdown-menu-12' },
			{ id: 'dropdown-menu-13' },
			{ id: 'dropdown-menu-14' },
			{ id: 'dropdown-menu-15', isAnimated: true },
			{ id: 'dropdown-menu-16', isAnimated: true }
		]
	},
	{
		id: 'form',
		name: 'Form',
		svg: FormSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/form' },
			{ label: 'formsnap', href: 'https://formsnap.dev/docs' },
			{ label: 'superforms', href: 'https://superforms.rocks/get-started' }
		],
		note: FormNote,
		components: [
			{ id: 'form-01' },
			{ id: 'form-02' },
			{ id: 'form-03' },
			{ id: 'form-04' },
			{ id: 'form-05' },
			{ id: 'form-06' },
			{ id: 'form-07' },
			{ id: 'form-08' },
			{ id: 'form-09' },
			{ id: 'form-10' }
		]
	},
	{
		id: 'input',
		name: 'Input',
		svg: InputSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input' }],
		components: [
			{ id: 'input-01' },
			{ id: 'input-02' },
			{ id: 'input-03' },
			{ id: 'input-04' },
			{ id: 'input-05' },
			{ id: 'input-06' },
			{ id: 'input-07' },
			{ id: 'input-08' },
			{ id: 'input-09' },
			{ id: 'input-10' },
			{ id: 'input-11' },
			{ id: 'input-12' },
			{ id: 'input-13' },
			{ id: 'input-14' },
			{ id: 'input-15' },
			{ id: 'input-16' },
			{ id: 'input-17' },
			{ id: 'input-18' },
			{ id: 'input-19' },
			{ id: 'input-20' },
			{ id: 'input-21' },
			{ id: 'input-22' },
			{ id: 'input-23' },
			{ id: 'input-24' },
			{ id: 'input-25' },
			{ id: 'input-26' },
			{ id: 'input-27' },
			{ id: 'input-28' },
			{ id: 'input-29' },
			{ id: 'input-30' },
			{ id: 'input-31' },
			{ id: 'input-32' },
			{ id: 'input-33' },
			{ id: 'input-34' },
			{ id: 'input-35' },
			{ id: 'input-36' },
			{ id: 'input-37' },
			{ id: 'input-38' },
			{ id: 'input-39' },
			{ id: 'input-40' },
			{ id: 'input-41' },
			{ id: 'input-42' },
			{ id: 'input-43' },
			{ id: 'input-44' },
			{ id: 'input-45' },
			{ id: 'input-46' }
		]
	},
	{
		id: 'input-mask',
		name: 'Input Mask',
		svg: InputSVG,
		breakpoints: {
			md: 2
		},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input' }],
		components: [
			{ id: 'input-mask-01' },
			{ id: 'input-mask-02' },
			{ id: 'input-mask-03' },
			{ id: 'input-mask-04' },
			{ id: 'input-mask-05' },
			{ id: 'input-mask-06' }
		]
	},
	{
		id: 'input-otp',
		name: 'Input OTP',
		svg: InputOTPSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input-otp' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/pin-input' }
		],
		components: [
			{ id: 'input-otp-01' },
			{ id: 'input-otp-02' },
			{ id: 'input-otp-03' },
			{ id: 'input-otp-04' },
			{ id: 'input-otp-05' },
			{ id: 'input-otp-06' },
			{ id: 'input-otp-07' },
			{ id: 'input-otp-08' },
			{ id: 'input-otp-09' },
			{ id: 'input-otp-10' }
		]
	},
	{
		id: 'pagination',
		name: 'Pagination',
		svg: PaginationSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/pagination' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/pagination' }
		],
		components: [
			{ id: 'pagination-01' },
			{ id: 'pagination-02' },
			{ id: 'pagination-03' },
			{ id: 'pagination-04' },
			{ id: 'pagination-05' },
			{ id: 'pagination-06' },
			{ id: 'pagination-07' },
			{ id: 'pagination-08' },
			{ id: 'pagination-09' },
			{ id: 'pagination-10' },
			{ id: 'pagination-11' },
			{ id: 'pagination-12' },
			{ id: 'pagination-13' },
			{ id: 'pagination-14' },
			{ id: 'pagination-15', class: 'col-span-full border-e-0' }
		]
	},
	{
		id: 'popover',
		name: 'Popover',
		svg: PopoverSVG,
		breakpoints: {
			sm: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/popover' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/popover' }
		],
		components: [
			{ id: 'popover-01' },
			{ id: 'popover-02' },
			{ id: 'popover-03' },
			{ id: 'popover-04' },
			{ id: 'popover-05' },
			{ id: 'popover-06' },
			{ id: 'popover-07' },
			{ id: 'popover-08' },
			{ id: 'popover-09' },
			{ id: 'popover-10' },
			{ id: 'popover-11' },
			{ id: 'popover-12' },
			{ id: 'popover-13', isAnimated: true },
			{ id: 'popover-14', isAnimated: true },
			{ id: 'popover-15', isAnimated: true }
		]
	},
	{
		id: 'radio-group',
		name: 'Radio Group',
		svg: RadioGroupSVG,
		breakpoints: {
			md: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/radio-group' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/radio-group' }
		],
		components: [
			{ id: 'radio-group-01' },
			{ id: 'radio-group-02' },
			{ id: 'radio-group-03' },
			{ id: 'radio-group-04' },
			{ id: 'radio-group-05' },
			{ id: 'radio-group-06' },
			{ id: 'radio-group-07' },
			{ id: 'radio-group-08' },
			{ id: 'radio-group-09' },
			{ id: 'radio-group-10' },
			{ id: 'radio-group-11' },
			{ id: 'radio-group-12' },
			{ id: 'radio-group-13' },
			{ id: 'radio-group-14', isAnimated: true },
			{ id: 'radio-group-15', isAnimated: true }
		]
	},
	{
		id: 'select',
		name: 'Select',
		svg: SelectSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/select' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/select' }
		],
		components: [
			{ id: 'select-01' },
			{ id: 'select-02' },
			{ id: 'select-03' },
			{ id: 'select-04' },
			{ id: 'select-05' },
			{ id: 'select-06' },
			{ id: 'select-07' },
			{ id: 'select-08' },
			{ id: 'select-09' },
			{ id: 'select-10' },
			{ id: 'select-11' },
			{ id: 'select-12' },
			{ id: 'select-13' },
			{ id: 'select-14' },
			{ id: 'select-15' },
			{ id: 'select-16' },
			{ id: 'select-17' },
			{ id: 'select-18' },
			{ id: 'select-19' },
			{ id: 'select-20' },
			{ id: 'select-21' },
			{ id: 'select-22' },
			{ id: 'select-23' },
			{ id: 'select-24' },
			{ id: 'select-25' },
			{ id: 'select-26' },
			{ id: 'select-27' },
			{ id: 'select-28' },
			{ id: 'select-29' },
			{ id: 'select-30' },
			{ id: 'select-31' },
			{ id: 'select-32' },
			{ id: 'select-33' },
			{ id: 'select-34' },
			{ id: 'select-35', underConstruction: true },
			{ id: 'select-36', underConstruction: true },
			{ id: 'select-37', isAnimated: true },
			{ id: 'select-38', isAnimated: true }
		]
	},
	{
		id: 'sheet',
		name: 'Sheet',
		svg: SheetSVG,
		breakpoints: {
			sm: 2,
			md: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/sheet' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/sheet' }
		],
		components: [
			{ id: 'sheet-01' },
			{ id: 'sheet-02' },
			{ id: 'sheet-03' },
			{ id: 'sheet-04' },
			{ id: 'sheet-05' },
			{ id: 'sheet-06' },
			{ id: 'sheet-07', class: 'col-span-full border-e-0' }
		]
	},
	{
		id: 'sonner',
		name: 'Sonner',

		svg: SonnerSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/sonner' },
			{ label: 'svelte-sonner', href: 'https://svelte-sonner.vercel.app/' }
		],
		components: [
			{ id: 'sonner-01' },
			{ id: 'sonner-02' },
			{ id: 'sonner-03' },
			{ id: 'sonner-04' },
			{ id: 'sonner-05' },
			{ id: 'sonner-06' },
			{ id: 'sonner-07' },
			{ id: 'sonner-08' },
			{ id: 'sonner-09' },
			{ id: 'sonner-10' },
			{ id: 'sonner-11' },
			{ id: 'sonner-12' },
			{ id: 'sonner-13' },
			{ id: 'sonner-14' },
			{ id: 'sonner-15' },
			{ id: 'sonner-16' },
			{ id: 'sonner-17' },
			{ id: 'sonner-18' },
			{ id: 'sonner-19' },
			{ id: 'sonner-20' }
		]
	},
	{
		id: 'switch',
		name: 'Switch',
		svg: SwitchSVG,
		breakpoints: {
			sm: 2,
			md: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/switch' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/switch' }
		],
		components: [
			{ id: 'switch-01' },
			{ id: 'switch-02' },
			{ id: 'switch-03' },
			{ id: 'switch-04' },
			{ id: 'switch-05' },
			{ id: 'switch-06' },
			{ id: 'switch-07' },
			{ id: 'switch-08' },
			{ id: 'switch-09' },
			{ id: 'switch-10' },
			{ id: 'switch-11' },
			{ id: 'switch-12' },
			{ id: 'switch-13' },
			{ id: 'switch-14' },
			{ id: 'switch-15' },
			{ id: 'switch-16' },
			{ id: 'switch-17' },
			{ id: 'switch-18' },
			{ id: 'switch-19', isAnimated: true },
			{ id: 'switch-20', isAnimated: true }
		]
	},
	{
		id: 'table',
		name: 'Table',
		svg: TableSVG,
		breakpoints: {},
		links: [{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/table' }],
		components: [
			{ id: 'table-01' },
			{ id: 'table-02' },
			{ id: 'table-03' },
			{ id: 'table-04' },
			{ id: 'table-05' },
			{ id: 'table-06' },
			{ id: 'table-07' },
			{ id: 'table-08' },
			{ id: 'table-09' },
			{ id: 'table-10' },
			{ id: 'table-11' },
			{ id: 'table-12' },
			{ id: 'table-13' },
			{ id: 'table-14' },
			{ id: 'table-15' },
			{ id: 'table-16' }
		]
	},
	{
		id: 'tabs',
		name: 'Tabs',
		svg: TabsSVG,

		breakpoints: {
			xl: 2
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/tabs' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/tabs' }
		],
		components: [
			{ id: 'tabs-01' },
			{ id: 'tabs-02' },
			{ id: 'tabs-03' },
			{ id: 'tabs-04' },
			{ id: 'tabs-05' },
			{ id: 'tabs-06' },
			{ id: 'tabs-07' },
			{ id: 'tabs-08' },
			{ id: 'tabs-09' },
			{ id: 'tabs-10' },
			{ id: 'tabs-11' },
			{ id: 'tabs-12' },
			{ id: 'tabs-13' },
			{ id: 'tabs-14' },
			{ id: 'tabs-15' },
			{ id: 'tabs-16' },
			{ id: 'tabs-17' },
			{ id: 'tabs-18' },
			{ id: 'tabs-19' },
			{ id: 'tabs-20' },
			{ id: 'tabs-21' },
			{ id: 'tabs-22' },
			{ id: 'tabs-23' },
			{ id: 'tabs-24' },
			{ id: 'tabs-25' },
			{ id: 'tabs-26' },
			{ id: 'tabs-27', isAnimated: true },
			{ id: 'tabs-28', isAnimated: true },
			{ id: 'tabs-29', isAnimated: true }
		]
	},
	{
		id: 'textarea',
		name: 'Textarea',
		svg: TextareaSVG,
		breakpoints: {
			md: 2,
			xl: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/textarea' }
		],
		components: [
			{ id: 'textarea-01' },
			{ id: 'textarea-02' },
			{ id: 'textarea-03' },
			{ id: 'textarea-04' },
			{ id: 'textarea-05' },
			{ id: 'textarea-06' },
			{ id: 'textarea-07' },
			{ id: 'textarea-08' },
			{ id: 'textarea-09' },
			{ id: 'textarea-10' },
			{ id: 'textarea-11' },
			{ id: 'textarea-12' },
			{ id: 'textarea-13' },
			{ id: 'textarea-14' },
			{ id: 'textarea-15' },
			{ id: 'textarea-16' },
			{ id: 'textarea-17' },
			{ id: 'textarea-18' },
			{ id: 'textarea-19' },
			{ id: 'textarea-20' },
			{ id: 'textarea-21' }
		]
	},
	{
		id: 'tooltip',
		name: 'Tooltip',
		svg: TooltipSVG,
		breakpoints: {
			sm: 2,
			lg: 3
		},
		links: [
			{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/tooltip' },
			{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/tooltip' }
		],
		components: [
			{ id: 'tooltip-01' },
			{ id: 'tooltip-02' },
			{ id: 'tooltip-03' },
			{ id: 'tooltip-04' },
			{ id: 'tooltip-05' },
			{ id: 'tooltip-06' },
			{ id: 'tooltip-07' },
			{ id: 'tooltip-08' },
			{ id: 'tooltip-09' },
			{ id: 'tooltip-10' },
			{ id: 'tooltip-11' },
			{ id: 'tooltip-12' },
			{ id: 'tooltip-13' },
			{ id: 'tooltip-14' },
			{ id: 'tooltip-15' },
			{ id: 'tooltip-16', isAnimated: true },
			{ id: 'tooltip-17', isAnimated: true }
		]
	},
	{
		id: 'carousel',
		name: 'Carousel',
		components: [],
		comingSoon: true
	},
	{
		id: 'chart',
		name: 'Chart',
		components: [],
		comingSoon: true
	},
	{
		id: 'command',
		name: 'Command',
		components: [],
		comingSoon: true
	},
	{
		id: 'context-menu',
		name: 'Context Menu',
		components: [],
		comingSoon: true
	},
	{
		id: 'drawer',
		name: 'Drawer',
		components: [],
		comingSoon: true
	},
	{
		id: 'menubar',
		name: 'Menubar',
		components: [],
		comingSoon: true
	},
	{
		id: 'navigation-menu',
		name: 'Navigation Menu',
		components: [],
		comingSoon: true
	},
	{
		id: 'progress',
		name: 'Progress',
		components: [],
		comingSoon: true
	},

	{
		id: 'separator',
		name: 'Separator',
		components: [],
		comingSoon: true
	},
	{
		id: 'sidebar',
		name: 'Sidebar',
		components: [],
		comingSoon: true
	},
	{
		id: 'skeleton',
		name: 'Skeleton',
		components: [],
		comingSoon: true
	},
	{
		id: 'slider',
		name: 'Slider',
		components: [],
		comingSoon: true
	},
	{
		id: 'toggle',
		name: 'Toggle',
		components: [],
		comingSoon: true
	},
	{
		id: 'toggle-group',
		name: 'Toggle Group',
		components: [],
		comingSoon: true
	}
] satisfies ComponentCategory[]);
