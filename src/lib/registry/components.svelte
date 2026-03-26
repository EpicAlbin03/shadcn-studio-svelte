<script lang="ts" module>
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
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
	import { Alert, AlertDescription } from '$lib/components/ui/alert';
	import { componentMeta } from './component-meta';
	import type {
		ComponentCategory as BaseComponentCategory,
		ComponentSection
	} from './components.types';

	type LegacyAnimation = {
		badge?: string;
		breakpoints?: ComponentSection['breakpoints'];
	};

	type ComponentCategory = BaseComponentCategory & {
		badge?: string;
		isComingSoon?: boolean;
		hasAnimation?: boolean;
		animation?: LegacyAnimation;
	};

	export const categories: ComponentCategory[] = [
		{
			slug: 'accordion',
			svg: AccordionSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/accordion' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/accordion' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'accordion-01' },
						{ slug: 'accordion-02' },
						{ slug: 'accordion-03' },
						{ slug: 'accordion-04' },
						{ slug: 'accordion-05' },
						{ slug: 'accordion-06' },
						{ slug: 'accordion-07' },
						{ slug: 'accordion-08' },
						{ slug: 'accordion-09' },
						{ slug: 'accordion-10' },
						{ slug: 'accordion-11' },
						{ slug: 'accordion-12' },
						{ slug: 'accordion-13' },
						{ slug: 'accordion-14' },
						{ slug: 'accordion-15' },
						{ slug: 'accordion-16' }
					]
				}
			]
		},
		{
			slug: 'alert',
			svg: AlertSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/alert' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'alert-01' },
						{ slug: 'alert-02' },
						{ slug: 'alert-03' },
						{ slug: 'alert-04' },
						{ slug: 'alert-05' },
						{ slug: 'alert-06' },
						{ slug: 'alert-07' },
						{ slug: 'alert-08' },
						{ slug: 'alert-09' },
						{ slug: 'alert-10' },
						{ slug: 'alert-11' },
						{ slug: 'alert-12' },
						{ slug: 'alert-13' },
						{ slug: 'alert-14' },
						{ slug: 'alert-15' },
						{ slug: 'alert-16' },
						{ slug: 'alert-17' },
						{ slug: 'alert-18' },
						{ slug: 'alert-19' },
						{ slug: 'alert-20' },
						{ slug: 'alert-21' },
						{ slug: 'alert-22' },
						{ slug: 'alert-23' },
						{ slug: 'alert-24' },
						{ slug: 'alert-25' },
						{ slug: 'alert-26' },
						{ slug: 'alert-27' },
						{ slug: 'alert-28' },
						{ slug: 'alert-29' },
						{ slug: 'alert-30' }
					]
				}
			]
		},
		{
			slug: 'avatar',
			svg: AvatarSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/avatar' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/avatar' }
					],
					breakpoints: {
						sm: 2,
						lg: 3
					},
					components: [
						{ slug: 'avatar-01' },
						{ slug: 'avatar-02' },
						{ slug: 'avatar-03' },
						{ slug: 'avatar-04' },
						{ slug: 'avatar-05' },
						{ slug: 'avatar-06' },
						{ slug: 'avatar-07' },
						{ slug: 'avatar-08' },
						{ slug: 'avatar-09' },
						{ slug: 'avatar-10' },
						{ slug: 'avatar-11' },
						{ slug: 'avatar-12' },
						{ slug: 'avatar-13' },
						{ slug: 'avatar-14' },
						{ slug: 'avatar-15' },
						{ slug: 'avatar-16' },
						{ slug: 'avatar-17' },
						{ slug: 'avatar-18' },
						{ slug: 'avatar-19' },
						{ slug: 'avatar-20' },
						{ slug: 'avatar-21' }
					]
				}
			]
		},
		{
			slug: 'badge',
			svg: BadgeSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/badge' }
					],
					breakpoints: {
						sm: 2,
						lg: 3
					},
					components: [
						{ slug: 'badge-01' },
						{ slug: 'badge-02' },
						{ slug: 'badge-03' },
						{ slug: 'badge-04' },
						{ slug: 'badge-05' },
						{ slug: 'badge-06' },
						{ slug: 'badge-07' },
						{ slug: 'badge-08' },
						{ slug: 'badge-09' },
						{ slug: 'badge-10' },
						{ slug: 'badge-11' },
						{ slug: 'badge-12' },
						{ slug: 'badge-13' },
						{ slug: 'badge-14' },
						{ slug: 'badge-15' },
						{ slug: 'badge-16' },
						{ slug: 'badge-17' },
						{ slug: 'badge-18' },
						{ slug: 'badge-19' },
						{ slug: 'badge-20' },
						{ slug: 'badge-21' },
						{ slug: 'badge-22' },
						{ slug: 'badge-23' },
						{ slug: 'badge-24' }
					]
				}
			]
		},
		{
			slug: 'breadcrumb',
			svg: BreadcrumbSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/breadcrumb' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'breadcrumb-01' },
						{ slug: 'breadcrumb-02' },
						{ slug: 'breadcrumb-03' },
						{ slug: 'breadcrumb-04' },
						{ slug: 'breadcrumb-05' },
						{ slug: 'breadcrumb-06' },
						{ slug: 'breadcrumb-07' },
						{ slug: 'breadcrumb-08' }
					]
				}
			]
		},
		{
			slug: 'button',
			svg: ButtonSVG,
			badge: '+8 New',
			hasAnimation: true,
			animation: {
				badge: '+8 New',
				breakpoints: {
					md: 2,
					xl: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/button' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/button' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'button-01' },
						{ slug: 'button-02' },
						{ slug: 'button-03' },
						{ slug: 'button-04' },
						{ slug: 'button-05' },
						{ slug: 'button-06' },
						{ slug: 'button-07' },
						{ slug: 'button-08' },
						{ slug: 'button-09' },
						{ slug: 'button-10' },
						{ slug: 'button-11' },
						{ slug: 'button-12' },
						{ slug: 'button-13' },
						{ slug: 'button-14' },
						{ slug: 'button-15' },
						{ slug: 'button-16' },
						{ slug: 'button-17' },
						{ slug: 'button-18' },
						{ slug: 'button-19' },
						{ slug: 'button-20' },
						{ slug: 'button-21' },
						{ slug: 'button-22' },
						{ slug: 'button-23' },
						{ slug: 'button-24' },
						{ slug: 'button-25' },
						{ slug: 'button-26' },
						{ slug: 'button-27' },
						{ slug: 'button-28' },
						{ slug: 'button-29' },
						{ slug: 'button-30' },
						{ slug: 'button-31' },
						{ slug: 'button-32' },
						{ slug: 'button-33' },
						{ slug: 'button-34' },
						{ slug: 'button-35' },
						{ slug: 'button-36' },
						{ slug: 'button-37' },
						{ slug: 'button-38' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2,
						xl: 3
					},
					badge: '+8 New',
					components: [
						{ slug: 'button-39' },
						{ slug: 'button-40' },
						{ slug: 'button-41' },
						{ slug: 'button-42' },
						{ slug: 'button-43' },
						{ slug: 'button-44' },
						{ slug: 'button-45' },
						{ slug: 'button-46', ...componentMeta['button-46'] },
						{ slug: 'button-47' },
						{ slug: 'button-48', badge: 'New' },
						{ slug: 'button-49', badge: 'New' },
						{ slug: 'button-50', badge: 'New' },
						{ slug: 'button-51', badge: 'New' },
						{ slug: 'button-52', badge: 'New' },
						{ slug: 'button-53', badge: 'New' },
						{ slug: 'button-54', badge: 'New' },
						{ slug: 'button-55', ...componentMeta['button-55'], badge: 'New' }
					]
				}
			]
		},
		{
			slug: 'button-group',
			svg: ButtonGroupSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/button' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/button' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'button-group-01' },
						{ slug: 'button-group-02' },
						{ slug: 'button-group-03' },
						{ slug: 'button-group-04' },
						{ slug: 'button-group-05' },
						{ slug: 'button-group-06' },
						{ slug: 'button-group-07' },
						{ slug: 'button-group-08' },
						{ slug: 'button-group-09' },
						{ slug: 'button-group-10' },
						{ slug: 'button-group-11' },
						{ slug: 'button-group-12' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'button-group-13' },
						{ slug: 'button-group-14' },
						{ slug: 'button-group-15' },
						{ slug: 'button-group-16' }
					]
				}
			]
		},
		{
			slug: 'calendar',
			svg: CalendarSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/calendar' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/calendar' }
					],
					breakpoints: {
						xl: 2
					},
					components: [
						{ slug: 'calendar-01' },
						{ slug: 'calendar-02' },
						{ slug: 'calendar-03' },
						{ slug: 'calendar-04' },
						{ slug: 'calendar-05' },
						{ slug: 'calendar-06' },
						{ slug: 'calendar-07' },
						{ slug: 'calendar-08' },
						{ slug: 'calendar-09' },
						{ slug: 'calendar-10' },
						{ slug: 'calendar-11' },
						{ slug: 'calendar-12' },
						{ slug: 'calendar-13' },
						{ slug: 'calendar-14' },
						{ slug: 'calendar-15' },
						{ slug: 'calendar-16' },
						{ slug: 'calendar-17', status: 'coming-soon' },
						{ slug: 'calendar-18' },
						{ slug: 'calendar-19' },
						{ slug: 'calendar-20' },
						{ slug: 'calendar-21', status: 'coming-soon' },
						{ slug: 'calendar-22' },
						{ slug: 'calendar-23' },
						{ slug: 'calendar-24' },
						{ slug: 'calendar-25' }
					]
				}
			]
		},
		{
			slug: 'card',
			svg: CardSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/card' }
					],
					breakpoints: {
						xl: 2
					},
					components: [
						{ slug: 'card-01' },
						{ slug: 'card-02' },
						{ slug: 'card-03' },
						{ slug: 'card-04' },
						{ slug: 'card-05' },
						{ slug: 'card-06' },
						{ slug: 'card-07' },
						{ slug: 'card-08' },
						{ slug: 'card-09' },
						{ slug: 'card-10' },
						{ slug: 'card-11' },
						{ slug: 'card-12' },
						{ slug: 'card-13' },
						{ slug: 'card-14' },
						{ slug: 'card-15', class: 'col-span-full border-e-0' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2
					},
					components: [{ slug: 'card-16' }, { slug: 'card-17' }]
				}
			]
		},
		{
			slug: 'checkbox',
			svg: CheckboxSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2,
					xl: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/checkbox' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/checkbox' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'checkbox-01' },
						{ slug: 'checkbox-02' },
						{ slug: 'checkbox-03' },
						{ slug: 'checkbox-04' },
						{ slug: 'checkbox-05' },
						{ slug: 'checkbox-06' },
						{ slug: 'checkbox-07' },
						{ slug: 'checkbox-08' },
						{ slug: 'checkbox-09' },
						{ slug: 'checkbox-10' },
						{ slug: 'checkbox-11' },
						{ slug: 'checkbox-12' },
						{ slug: 'checkbox-13' },
						{ slug: 'checkbox-14' },
						{ slug: 'checkbox-15' },
						{ slug: 'checkbox-16' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [{ slug: 'checkbox-17' }, { slug: 'checkbox-18' }, { slug: 'checkbox-19' }]
				}
			]
		},
		{
			slug: 'collapsible',
			svg: CollapsibleSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					xl: 2
				}
			},
			sections: [
				{
					links: [
						{
							label: 'shadcn-svelte',
							href: 'https://shadcn-svelte.com/docs/components/collapsible'
						},
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/collapsible' }
					],
					breakpoints: {
						xl: 2
					},
					components: [
						{ slug: 'collapsible-01' },
						{ slug: 'collapsible-02' },
						{ slug: 'collapsible-03' },
						{ slug: 'collapsible-04' },
						{ slug: 'collapsible-05' },
						{ slug: 'collapsible-06' },
						{ slug: 'collapsible-07' },
						{ slug: 'collapsible-08' },
						{ slug: 'collapsible-09' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						xl: 2
					},
					components: [{ slug: 'collapsible-10' }]
				}
			]
		},
		{
			slug: 'combobox',
			svg: ComboboxSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2,
					xl: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/combobox' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'combobox-01' },
						{ slug: 'combobox-02' },
						{ slug: 'combobox-03' },
						{ slug: 'combobox-04' },
						{ slug: 'combobox-05' },
						{ slug: 'combobox-06' },
						{ slug: 'combobox-07' },
						{ slug: 'combobox-08' },
						{ slug: 'combobox-09' },
						{ slug: 'combobox-10' },
						{ slug: 'combobox-11' },
						{ slug: 'combobox-12' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [{ slug: 'combobox-13' }, { slug: 'combobox-14' }]
				}
			]
		},
		{
			slug: 'data-table',
			svg: DataTableSVG,
			sections: [
				{
					links: [
						{
							label: 'shadcn-svelte',
							href: 'https://shadcn-svelte.com/docs/components/data-table'
						},
						{
							label: 'tanstack-table',
							href: 'https://bits-ui.com/docs/components/https://tanstack.com/table/v8/docs/introduction'
						}
					],
					breakpoints: {},
					components: [
						{ slug: 'data-table-01' },
						{ slug: 'data-table-02' },
						{ slug: 'data-table-03' },
						{ slug: 'data-table-04' },
						{ slug: 'data-table-05' },
						{ slug: 'data-table-06' },
						{ slug: 'data-table-07' },
						{ slug: 'data-table-08' },
						{ slug: 'data-table-14' },
						{ slug: 'data-table-09' },
						{ slug: 'data-table-10' },
						{ slug: 'data-table-11' },
						{ slug: 'data-table-12' },
						{ slug: 'data-table-13' }
					]
				}
			]
		},
		{
			slug: 'date-picker',
			svg: DatepickerSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/data-table' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'date-picker-01' },
						{ slug: 'date-picker-02' },
						{ slug: 'date-picker-03' },
						{ slug: 'date-picker-04' },
						{ slug: 'date-picker-05' },
						{ slug: 'date-picker-06' },
						{ slug: 'date-picker-07' },
						{ slug: 'date-picker-08' },
						{ slug: 'date-picker-09' },
						{ slug: 'date-picker-10' },
						{ slug: 'date-picker-11' },
						{ slug: 'date-picker-12' },
						{ slug: 'date-picker-13', class: 'col-span-full border-e-0' }
					]
				}
			]
		},
		{
			slug: 'dialog',
			svg: DialogSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					sm: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/dialog' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/dialog' }
					],
					breakpoints: {
						md: 3
					},
					components: [
						{ slug: 'dialog-01' },
						{ slug: 'dialog-02' },
						{ slug: 'dialog-03' },
						{ slug: 'dialog-04' },
						{ slug: 'dialog-05' },
						{ slug: 'dialog-06' },
						{ slug: 'dialog-07' },
						{ slug: 'dialog-08' },
						{ slug: 'dialog-09' },
						{ slug: 'dialog-10' },
						{ slug: 'dialog-11' },
						{ slug: 'dialog-12' },
						{ slug: 'dialog-13' },
						{ slug: 'dialog-14' },
						{ slug: 'dialog-15' },
						{ slug: 'dialog-16' },
						{ slug: 'dialog-17' },
						{ slug: 'dialog-18' },
						{ slug: 'dialog-19' },
						{ slug: 'dialog-20' },
						{ slug: 'dialog-21' },
						{ slug: 'dialog-22' },
						{ slug: 'dialog-23' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						sm: 3
					},
					components: [{ slug: 'dialog-24' }, { slug: 'dialog-25' }, { slug: 'dialog-26' }]
				}
			]
		},
		{
			slug: 'dropdown-menu',
			svg: DropdownSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					sm: 2,
					md: 3
				}
			},
			sections: [
				{
					links: [
						{
							label: 'shadcn-svelte',
							href: 'https://shadcn-svelte.com/docs/components/dropdown-menu'
						},
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/dropdown-menu' }
					],
					breakpoints: {
						sm: 2,
						md: 3
					},
					components: [
						{ slug: 'dropdown-menu-01' },
						{ slug: 'dropdown-menu-02' },
						{ slug: 'dropdown-menu-03' },
						{ slug: 'dropdown-menu-04' },
						{ slug: 'dropdown-menu-05' },
						{ slug: 'dropdown-menu-06' },
						{ slug: 'dropdown-menu-07' },
						{ slug: 'dropdown-menu-08' },
						{ slug: 'dropdown-menu-09' },
						{ slug: 'dropdown-menu-10' },
						{ slug: 'dropdown-menu-11' },
						{ slug: 'dropdown-menu-12' },
						{ slug: 'dropdown-menu-13' },
						{ slug: 'dropdown-menu-14' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						sm: 2,
						md: 3
					},
					components: [{ slug: 'dropdown-menu-15' }, { slug: 'dropdown-menu-16' }]
				}
			]
		},
		{
			slug: 'form',
			svg: FormSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/form' },
						{ label: 'formsnap', href: 'https://formsnap.dev/docs' },
						{ label: 'superforms', href: 'https://superforms.rocks/get-started' }
					],
					breakpoints: {
						md: 2
					},
					note: formNote,
					components: [
						{ slug: 'form-01' },
						{ slug: 'form-02' },
						{ slug: 'form-03' },
						{ slug: 'form-04' },
						{ slug: 'form-05' },
						{ slug: 'form-06' },
						{ slug: 'form-07' },
						{ slug: 'form-08' },
						{ slug: 'form-09' },
						{ slug: 'form-10' }
					]
				}
			]
		},
		{
			slug: 'input',
			svg: InputSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'input-01' },
						{ slug: 'input-02' },
						{ slug: 'input-03' },
						{ slug: 'input-04' },
						{ slug: 'input-05' },
						{ slug: 'input-06' },
						{ slug: 'input-07' },
						{ slug: 'input-08' },
						{ slug: 'input-09' },
						{ slug: 'input-10' },
						{ slug: 'input-11' },
						{ slug: 'input-12' },
						{ slug: 'input-13' },
						{ slug: 'input-14' },
						{ slug: 'input-15' },
						{ slug: 'input-16' },
						{ slug: 'input-17' },
						{ slug: 'input-18' },
						{ slug: 'input-19' },
						{ slug: 'input-20' },
						{ slug: 'input-21' },
						{ slug: 'input-22' },
						{ slug: 'input-23' },
						{ slug: 'input-24' },
						{ slug: 'input-25' },
						{ slug: 'input-26' },
						{ slug: 'input-27' },
						{ slug: 'input-28' },
						{ slug: 'input-29' },
						{ slug: 'input-30' },
						{ slug: 'input-31' },
						{ slug: 'input-32' },
						{ slug: 'input-33' },
						{ slug: 'input-34' },
						{ slug: 'input-35' },
						{ slug: 'input-36' },
						{ slug: 'input-37' },
						{ slug: 'input-38' },
						{ slug: 'input-39' },
						{ slug: 'input-40' },
						{ slug: 'input-41' },
						{ slug: 'input-42' },
						{ slug: 'input-43' },
						{ slug: 'input-44' },
						{ slug: 'input-45' },
						{ slug: 'input-46' }
					]
				}
			]
		},
		{
			slug: 'input-mask',
			svg: InputSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'input-mask-01', status: 'coming-soon' },
						{ slug: 'input-mask-02', status: 'coming-soon' },
						{ slug: 'input-mask-03' },
						{ slug: 'input-mask-04' },
						{ slug: 'input-mask-05' },
						{ slug: 'input-mask-06' }
					]
				}
			]
		},
		{
			slug: 'input-otp',
			svg: InputOTPSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/input-otp' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/pin-input' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'input-otp-01' },
						{ slug: 'input-otp-02' },
						{ slug: 'input-otp-03' },
						{ slug: 'input-otp-04' },
						{ slug: 'input-otp-05' },
						{ slug: 'input-otp-06' },
						{ slug: 'input-otp-07' },
						{ slug: 'input-otp-08' },
						{ slug: 'input-otp-09' },
						{ slug: 'input-otp-10' }
					]
				}
			]
		},
		{
			slug: 'pagination',
			svg: PaginationSVG,
			sections: [
				{
					links: [
						{
							label: 'shadcn-svelte',
							href: 'https://shadcn-svelte.com/docs/components/pagination'
						},
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/pagination' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'pagination-01' },
						{ slug: 'pagination-02' },
						{ slug: 'pagination-03' },
						{ slug: 'pagination-04' },
						{ slug: 'pagination-05' },
						{ slug: 'pagination-06' },
						{ slug: 'pagination-07' },
						{ slug: 'pagination-08' },
						{ slug: 'pagination-09' },
						{ slug: 'pagination-10' },
						{ slug: 'pagination-11' },
						{ slug: 'pagination-12' },
						{ slug: 'pagination-13' },
						{ slug: 'pagination-14' },
						{ slug: 'pagination-15', class: 'col-span-full border-e-0' }
					]
				}
			]
		},
		{
			slug: 'popover',
			svg: PopoverSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					sm: 2,
					xl: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/popover' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/popover' }
					],
					breakpoints: {
						sm: 2,
						xl: 3
					},
					components: [
						{ slug: 'popover-01' },
						{ slug: 'popover-02' },
						{ slug: 'popover-03' },
						{ slug: 'popover-04' },
						{ slug: 'popover-05' },
						{ slug: 'popover-06' },
						{ slug: 'popover-07' },
						{ slug: 'popover-08' },
						{ slug: 'popover-09' },
						{ slug: 'popover-10' },
						{ slug: 'popover-11' },
						{ slug: 'popover-12' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						sm: 2,
						xl: 3
					},
					components: [{ slug: 'popover-13' }, { slug: 'popover-14' }, { slug: 'popover-15' }]
				}
			]
		},
		{
			slug: 'radio-group',
			svg: RadioGroupSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2
				}
			},
			sections: [
				{
					links: [
						{
							label: 'shadcn-svelte',
							href: 'https://shadcn-svelte.com/docs/components/radio-group'
						},
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/radio-group' }
					],
					breakpoints: {
						md: 2
					},
					components: [
						{ slug: 'radio-group-01' },
						{ slug: 'radio-group-02' },
						{ slug: 'radio-group-03' },
						{ slug: 'radio-group-04' },
						{ slug: 'radio-group-05' },
						{ slug: 'radio-group-06' },
						{ slug: 'radio-group-07' },
						{ slug: 'radio-group-08' },
						{ slug: 'radio-group-09' },
						{ slug: 'radio-group-10' },
						{ slug: 'radio-group-11' },
						{ slug: 'radio-group-12' },
						{ slug: 'radio-group-13' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2
					},
					components: [{ slug: 'radio-group-14' }, { slug: 'radio-group-15' }]
				}
			]
		},
		{
			slug: 'select',
			svg: SelectSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					md: 2,
					xl: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/select' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/select' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'select-01' },
						{ slug: 'select-02' },
						{ slug: 'select-03' },
						{ slug: 'select-04' },
						{ slug: 'select-05' },
						{ slug: 'select-06' },
						{ slug: 'select-07' },
						{ slug: 'select-08' },
						{ slug: 'select-09' },
						{ slug: 'select-10' },
						{ slug: 'select-11' },
						{ slug: 'select-12' },
						{ slug: 'select-13' },
						{ slug: 'select-14' },
						{ slug: 'select-15' },
						{ slug: 'select-16' },
						{ slug: 'select-17' },
						{ slug: 'select-18' },
						{ slug: 'select-19' },
						{ slug: 'select-20' },
						{ slug: 'select-21' },
						{ slug: 'select-22' },
						{ slug: 'select-23' },
						{ slug: 'select-24' },
						{ slug: 'select-25' },
						{ slug: 'select-26' },
						{ slug: 'select-27' },
						{ slug: 'select-28' },
						{ slug: 'select-29' },
						{ slug: 'select-30' },
						{ slug: 'select-31' },
						{ slug: 'select-32' },
						{ slug: 'select-33' },
						{ slug: 'select-34' },
						{ slug: 'select-35', status: 'coming-soon' },
						{ slug: 'select-36', status: 'coming-soon' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [{ slug: 'select-37' }, { slug: 'select-38' }]
				}
			]
		},
		{
			slug: 'sheet',
			svg: SheetSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/sheet' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/sheet' }
					],
					breakpoints: {
						sm: 2,
						md: 3
					},
					components: [
						{ slug: 'sheet-01' },
						{ slug: 'sheet-02' },
						{ slug: 'sheet-03' },
						{ slug: 'sheet-04' },
						{ slug: 'sheet-05' },
						{ slug: 'sheet-06' },
						{ slug: 'sheet-07', class: 'col-span-full border-e-0' }
					]
				}
			]
		},
		{
			slug: 'sonner',

			svg: SonnerSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/sonner' },
						{ label: 'svelte-sonner', href: 'https://svelte-sonner.vercel.app/' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'sonner-01' },
						{ slug: 'sonner-02' },
						{ slug: 'sonner-03' },
						{ slug: 'sonner-04' },
						{ slug: 'sonner-05' },
						{ slug: 'sonner-06' },
						{ slug: 'sonner-07' },
						{ slug: 'sonner-08' },
						{ slug: 'sonner-09' },
						{ slug: 'sonner-10' },
						{ slug: 'sonner-11' },
						{ slug: 'sonner-12' },
						{ slug: 'sonner-13' },
						{ slug: 'sonner-14' },
						{ slug: 'sonner-15' },
						{ slug: 'sonner-16' },
						{ slug: 'sonner-17' },
						{ slug: 'sonner-18' },
						{ slug: 'sonner-19' },
						{ slug: 'sonner-20' }
					]
				}
			]
		},
		{
			slug: 'switch',
			svg: SwitchSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					sm: 2,
					md: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/switch' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/switch' }
					],
					breakpoints: {
						sm: 2,
						md: 3
					},
					components: [
						{ slug: 'switch-01' },
						{ slug: 'switch-02' },
						{ slug: 'switch-03' },
						{ slug: 'switch-04' },
						{ slug: 'switch-05' },
						{ slug: 'switch-06' },
						{ slug: 'switch-07' },
						{ slug: 'switch-08' },
						{ slug: 'switch-09' },
						{ slug: 'switch-10' },
						{ slug: 'switch-11' },
						{ slug: 'switch-12' },
						{ slug: 'switch-13' },
						{ slug: 'switch-14' },
						{ slug: 'switch-15' },
						{ slug: 'switch-16' },
						{ slug: 'switch-17' },
						{ slug: 'switch-18' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						sm: 2,
						md: 3
					},
					components: [{ slug: 'switch-19' }, { slug: 'switch-20' }]
				}
			]
		},
		{
			slug: 'table',
			svg: TableSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/table' }
					],
					breakpoints: {},
					components: [
						{ slug: 'table-01' },
						{ slug: 'table-02' },
						{ slug: 'table-03' },
						{ slug: 'table-04' },
						{ slug: 'table-05' },
						{ slug: 'table-06' },
						{ slug: 'table-07' },
						{ slug: 'table-08' },
						{ slug: 'table-09' },
						{ slug: 'table-10' },
						{ slug: 'table-11' },
						{ slug: 'table-12' },
						{ slug: 'table-13' },
						{ slug: 'table-14' },
						{ slug: 'table-15' },
						{ slug: 'table-16' }
					]
				}
			]
		},
		{
			slug: 'tabs',
			svg: TabsSVG,

			hasAnimation: true,
			animation: {
				breakpoints: {
					xl: 2
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/tabs' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/tabs' }
					],
					breakpoints: {
						xl: 2
					},
					components: [
						{ slug: 'tabs-01' },
						{ slug: 'tabs-02' },
						{ slug: 'tabs-03' },
						{ slug: 'tabs-04' },
						{ slug: 'tabs-05' },
						{ slug: 'tabs-06' },
						{ slug: 'tabs-07' },
						{ slug: 'tabs-08' },
						{ slug: 'tabs-09' },
						{ slug: 'tabs-10' },
						{ slug: 'tabs-11' },
						{ slug: 'tabs-12' },
						{ slug: 'tabs-13' },
						{ slug: 'tabs-14' },
						{ slug: 'tabs-15' },
						{ slug: 'tabs-16' },
						{ slug: 'tabs-17' },
						{ slug: 'tabs-18' },
						{ slug: 'tabs-19' },
						{ slug: 'tabs-20' },
						{ slug: 'tabs-21' },
						{ slug: 'tabs-22' },
						{ slug: 'tabs-23' },
						{ slug: 'tabs-24' },
						{ slug: 'tabs-25' },
						{ slug: 'tabs-26' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						xl: 2
					},
					components: [{ slug: 'tabs-27' }, { slug: 'tabs-28' }, { slug: 'tabs-29' }]
				}
			]
		},
		{
			slug: 'textarea',
			svg: TextareaSVG,
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/textarea' }
					],
					breakpoints: {
						md: 2,
						xl: 3
					},
					components: [
						{ slug: 'textarea-01' },
						{ slug: 'textarea-02' },
						{ slug: 'textarea-03' },
						{ slug: 'textarea-04' },
						{ slug: 'textarea-05' },
						{ slug: 'textarea-06' },
						{ slug: 'textarea-07' },
						{ slug: 'textarea-08' },
						{ slug: 'textarea-09' },
						{ slug: 'textarea-10' },
						{ slug: 'textarea-11' },
						{ slug: 'textarea-12' },
						{ slug: 'textarea-13' },
						{ slug: 'textarea-14' },
						{ slug: 'textarea-15' },
						{ slug: 'textarea-16' },
						{ slug: 'textarea-17' },
						{ slug: 'textarea-18' },
						{ slug: 'textarea-19' },
						{ slug: 'textarea-20' },
						{ slug: 'textarea-21' }
					]
				}
			]
		},
		{
			slug: 'tooltip',
			svg: TooltipSVG,
			hasAnimation: true,
			animation: {
				breakpoints: {
					sm: 2,
					lg: 3
				}
			},
			sections: [
				{
					links: [
						{ label: 'shadcn-svelte', href: 'https://shadcn-svelte.com/docs/components/tooltip' },
						{ label: 'bits-ui', href: 'https://bits-ui.com/docs/components/tooltip' }
					],
					breakpoints: {
						sm: 2,
						lg: 3
					},
					components: [
						{ slug: 'tooltip-01' },
						{ slug: 'tooltip-02' },
						{ slug: 'tooltip-03' },
						{ slug: 'tooltip-04' },
						{ slug: 'tooltip-05' },
						{ slug: 'tooltip-06' },
						{ slug: 'tooltip-07' },
						{ slug: 'tooltip-08' },
						{ slug: 'tooltip-09' },
						{ slug: 'tooltip-10' },
						{ slug: 'tooltip-11' },
						{ slug: 'tooltip-12' },
						{ slug: 'tooltip-13' },
						{ slug: 'tooltip-14' },
						{ slug: 'tooltip-15' }
					]
				},
				{
					slug: 'animated-variants',
					breakpoints: {
						sm: 2,
						lg: 3
					},
					components: [{ slug: 'tooltip-16' }, { slug: 'tooltip-17' }]
				}
			]
		},
		{
			slug: 'carousel',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'chart',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'command',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'context-menu',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'drawer',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'menubar',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'navigation-menu',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'progress',
			isComingSoon: true,
			sections: []
		},

		{
			slug: 'separator',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'sidebar',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'skeleton',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'slider',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'toggle',
			isComingSoon: true,
			sections: []
		},
		{
			slug: 'toggle-group',
			isComingSoon: true,
			sections: []
		}
	];

	export function getCategory(slug: string): ComponentCategory | undefined {
		return categories.find((category) => category.slug === slug);
	}
</script>

{#snippet formNote()}
	<Alert
		class="border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
	>
		<CircleAlertIcon />
		<AlertDescription class="text-amber-600/80 dark:text-amber-400/80">
			<span>
				If you are getting type errors, try changing your Zod version to "4.0.10" (<a
					href="https://github.com/ciscoheat/sveltekit-superforms/issues/630"
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-amber-600 dark:hover:text-amber-400"
				>
					see issue
				</a>).
			</span>
		</AlertDescription>
	</Alert>
{/snippet}
