export type ComponentMeta = {
	cssVars?: {
		theme?: Record<string, string>;
		light?: Record<string, string>;
		dark?: Record<string, string>;
	};
	css?: Record<string, string | Record<string, string | Record<string, string>>>;
};

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
	},
	'button-55': {
		css: {
			'@property --button-angle': {
				syntax: '<angle>',
				inherits: 'false',
				'initial-value': '-75deg'
			}
		}
	}
};
