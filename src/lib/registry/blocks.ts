export const FEATURED_BLOCKS: string[] = ['hero-01', 'dashboard-shell-01', 'product-list-01'];
export const NEW_BLOCKS: string[] = [
	'hero-41',
	'hero-35',
	'cta-10',
	'cta-12',
	'blog-15',
	'blog-17',
	'testimonials-18',
	'faq-17',
	'product-list-01'
];

export type Block = {
	slug: string;
	name: string;
	iframeHeight?: string;
	class?: string;
};

export type BlockCategory = {
	slug: string;
	name: string;
	hidden?: boolean;
	blocks: Block[];
};

export const blockCategories = [
	{
		slug: 'marketing',
		name: 'Marketing',
		blocks: [
			{ slug: 'hero-01', name: 'Hero 1' },
			{ slug: 'hero-35', name: 'Hero 35' },
			{ slug: 'hero-41', name: 'Hero 41' },
			{ slug: 'features-01', name: 'Features 1' },
			{ slug: 'pricing-01', name: 'Pricing 1' },
			{ slug: 'testimonials-01', name: 'Testimonials 1', iframeHeight: '600px' },
			{ slug: 'testimonials-18', name: 'Testimonials 18', iframeHeight: '600px' },
			{ slug: 'social-proof-01', name: 'Social Proof 1', iframeHeight: '600px' },
			{ slug: 'portfolio-01', name: 'Portfolio 1' },
			{ slug: 'team-01', name: 'Team 1' },
			{ slug: 'cta-01', name: 'CTA 1', iframeHeight: '600px' },
			{ slug: 'cta-10', name: 'CTA 10', iframeHeight: '600px' },
			{ slug: 'cta-12', name: 'CTA 12', iframeHeight: '600px' },
			{ slug: 'logo-cloud-01', name: 'Logo Cloud 1', iframeHeight: '600px' },
			{ slug: 'faq-01', name: 'FAQ 1' },
			{ slug: 'faq-17', name: 'FAQ 17' },
			{ slug: 'gallery-01', name: 'Gallery 1' },
			{ slug: 'blog-01', name: 'Blog 1' },
			{ slug: 'blog-15', name: 'Blog 15' },
			{ slug: 'blog-17', name: 'Blog 17' },
			{ slug: 'about-us-01', name: 'About Us 1' },
			{ slug: 'contact-us-01', name: 'Contact Us 1' },
			{ slug: 'navbar-01', name: 'Navbar 1', iframeHeight: '600px' },
			{ slug: 'footer-01', name: 'Footer 1', iframeHeight: '600px' },
			{ slug: 'login-01', name: 'Login 1' },
			{ slug: 'register-01', name: 'Register 1' },
			{ slug: 'forgot-password-01', name: 'Forgot Password 1' },
			{ slug: 'reset-password-01', name: 'Reset Password 1' },
			{ slug: 'verify-email-01', name: 'Verify Email 1' },
			{
				slug: 'two-factor-authentication-01',
				name: 'Two Factor Authentication 1'
			},
			{ slug: 'app-integration-01', name: 'App Integration 1', iframeHeight: '600px' },
			{ slug: 'error-01', name: 'Error 1' }
		]
	},
	{
		slug: 'dashboard',
		name: 'Dashboard & App',
		blocks: [
			{ slug: 'dashboard-shell-01', name: 'Dashboard Shell 1' },
			{ slug: 'application-shell-01', name: 'Application Shell 1' },
			{ slug: 'charts-01', name: 'Charts 1' },
			{ slug: 'widget-01', name: 'Widget 1', iframeHeight: '600px' },
			{ slug: 'widget-02', name: 'Widget 2', iframeHeight: '600px' },
			{ slug: 'statistics-01', name: 'Statistics 1', iframeHeight: '600px' },
			{ slug: 'dashboard-dialog-01', name: 'Dashboard Dialog 1', iframeHeight: '600px' },
			{
				slug: 'dashboard-dropdown-01',
				name: 'Dashboard Dropdown 1',
				iframeHeight: '600px'
			},
			{
				slug: 'dashboard-dropdown-02',
				name: 'Dashboard Dropdown 2',
				iframeHeight: '600px'
			},
			{ slug: 'dashboard-sidebar-01', name: 'Dashboard Sidebar 1' },
			{ slug: 'dashboard-header-01', name: 'Dashboard Header 1' },
			{ slug: 'dashboard-footer-01', name: 'Dashboard Footer 1' }
		]
	},
	{
		slug: 'ecommerce',
		name: 'eCommerce',
		blocks: [{ slug: 'product-list-01', name: 'Product List 1' }]
	},
	{
		slug: 'datatable',
		name: 'Datatable',
		hidden: true,
		blocks: []
	},
	{
		slug: 'bento',
		name: 'Bento',
		hidden: true,
		blocks: []
	}
] satisfies BlockCategory[];

export const blocks = blockCategories.flatMap((category) => category.blocks);
