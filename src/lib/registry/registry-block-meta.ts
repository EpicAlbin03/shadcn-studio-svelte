import { type BlockName } from '$lib/utils/blocks.js';

type BlockMeta = {
	iframeHeight?: string;
	className?: string;
	description: string;
	mobile?: 'component';
};

export const blockMeta = {
	'hero-01': {
		description: 'Hero 1'
	},
	'hero-35': {
		description: 'Hero 35'
	},
	'hero-41': {
		description: 'Hero 41'
	},
	'features-01': {
		description: 'Features 1'
	},
	'pricing-01': {
		description: 'Pricing 1'
	},
	'testimonials-01': {
		description: 'Testimonials 1',
		iframeHeight: '600px'
	},
	'testimonials-18': {
		description: 'Testimonials 18',
		iframeHeight: '600px'
	},
	'social-proof-01': {
		description: 'Social Proof 1',
		iframeHeight: '600px'
	},
	'portfolio-01': {
		description: 'Portfolio 1'
	},
	'team-01': {
		description: 'Team 1'
	},
	'cta-01': {
		description: 'CTA 1',
		iframeHeight: '600px'
	},
	'cta-10': {
		description: 'CTA 10',
		iframeHeight: '600px'
	},
	'cta-12': {
		description: 'CTA 12',
		iframeHeight: '600px'
	},
	'logo-cloud-01': {
		description: 'Logo Cloud 1',
		iframeHeight: '600px'
	},
	'faq-01': {
		description: 'FAQ 1'
	},
	'gallery-01': {
		description: 'Gallery 1'
	},
	'blog-01': {
		description: 'Blog 1'
	},
	'blog-15': {
		description: 'Blog 15'
	},
	'blog-17': {
		description: 'Blog 17'
	},
	'about-us-01': {
		description: 'About Us 1'
	},
	'contact-us-01': {
		description: 'Contact Us 1'
	},
	'navbar-01': {
		description: 'Navbar 1',
		iframeHeight: '600px'
	},
	'footer-01': {
		description: 'Footer 1',
		iframeHeight: '600px'
	},
	'login-01': {
		description: 'Login 1'
	},
	'register-01': {
		description: 'Register 1'
	},
	'forgot-password-01': {
		description: 'Forgot Password 1'
	},
	'reset-password-01': {
		description: 'Reset Password 1'
	},
	'verify-email-01': {
		description: 'Verify Email 1'
	},
	'two-factor-authentication-01': {
		description: 'Two Factor Authentication 1'
	},
	'app-integration-01': {
		description: 'App Integration 1',
		iframeHeight: '600px'
	},
	'error-01': {
		description: 'Error 1'
	},
	'dashboard-shell-01': {
		description: 'Dashboard Shell 1'
	},
	'application-shell-01': {
		description: 'Application Shell 1'
	},
	'charts-01': {
		description: 'Charts 1'
	},
	'widget-01': {
		description: 'Widget 1',
		iframeHeight: '600px'
	},
	'widget-02': {
		description: 'Widget 2',
		iframeHeight: '600px'
	},
	'statistics-01': {
		description: 'Statistics 1',
		iframeHeight: '600px'
	},
	'dashboard-dialog-01': {
		description: 'Dashboard Dialog 1',
		iframeHeight: '600px'
	},
	'dashboard-dropdown-01': {
		description: 'Dashboard Dropdown 1',
		iframeHeight: '600px'
	},
	'dashboard-dropdown-02': {
		description: 'Dashboard Dropdown 2',
		iframeHeight: '600px'
	},
	'dashboard-sidebar-01': {
		description: 'Dashboard Sidebar 1'
	},
	'dashboard-header-01': {
		description: 'Dashboard Header 1'
	},
	'dashboard-footer-01': {
		description: 'Dashboard Footer 1'
	}
} as Record<BlockName, BlockMeta>;
