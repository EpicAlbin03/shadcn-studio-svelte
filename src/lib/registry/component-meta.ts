import type { ComponentMeta } from './components';

export const componentMeta: Record<string, ComponentMeta> = {
	'button-46': {
		cssVars: {
			theme: {
				'animate-heartbeat': 'heartbeat 2s infinite ease-in-out'
			}
		},
		css: {
			'@keyframes heartbeat': {
				'0%': {
					'box-shadow': '0 0 0 0 var(--destructive)',
					transform: 'scale(1)'
				},
				'50%': {
					'box-shadow': '0 0 0 7px transparent',
					transform: 'scale(1.05)'
				},
				'100%': {
					'box-shadow': '0 0 0 0 transparent',
					transform: 'scale(1)'
				}
			}
		}
	}
};
