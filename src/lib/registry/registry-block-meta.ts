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
	'features-01': {
		description: 'Features 1'
	},
	'pricing-01': {
		description: 'Pricing 1'
	},
	'testimonials-01': {
		description: 'Testimonials 1'
	},
	'social-proof-01': {
		description: 'Social Proof 1'
	},
	'portfolio-01': {
		description: 'Portfolio 1'
	},
	'team-01': {
		description: 'Team 1'
	},
	'cta-01': {
		description: 'CTA 1'
	},
	'logo-cloud-01': {
		description: 'Logo Cloud 1'
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
	'about-us-01': {
		description: 'About Us 1'
	},
	'contact-us-01': {
		description: 'Contact Us 1'
	},
	'navbar-01': {
		description: 'Navbar 1'
	},
	'footer-01': {
		description: 'Footer 1'
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
		description: 'App Integration 1'
	},
	'error-01': {
		description: 'Error 1'
	},
	'application-shell-01': {
		description: 'Application Shell 1'
	},
	'charts-01': {
		description: 'Charts 1'
	},
	'widget-01': {
		description: 'Widget 1'
	},
	'widget-02': {
		description: 'Widget 2'
	},
	'statistics-01': {
		description: 'Statistics 1'
	},
	'dashboard-dialog-01': {
		description: 'Dashboard Dialog 1'
	},
	'dashboard-dropdown-01': {
		description: 'Dashboard Dropdown 1'
	},
	'dashboard-dropdown-02': {
		description: 'Dashboard Dropdown 2'
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
