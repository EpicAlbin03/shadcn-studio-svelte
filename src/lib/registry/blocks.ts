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
	id: string;
	name: string;
	description?: string;
	iframeHeight?: string;
	class?: string;
};

export type BlockCategory = {
	id: string;
	name: string;
	hidden?: boolean;
	blocks: Block[];
};

function defineCategories(categories: BlockCategory[]) {
	// Apply defaults
	return categories.map((category) => ({
		...category,
		name: category.name ?? category.id,
	}));
}

export const blockCategories = defineCategories([
	{
		id: 'marketing',
		name: 'Marketing',
		blocks: [
			{ id: 'hero-01', name: 'Hero 1' },
			{ id: 'hero-35', name: 'Hero 35' },
			{ id: 'hero-41', name: 'Hero 41' },
			{ id: 'features-01', name: 'Features 1' },
			{ id: 'pricing-01', name: 'Pricing 1' },
			{ id: 'testimonials-01', name: 'Testimonials 1', iframeHeight: '600px' },
			{ id: 'testimonials-18', name: 'Testimonials 18', iframeHeight: '600px' },
			{ id: 'social-proof-01', name: 'Social Proof 1', iframeHeight: '600px' },
			{ id: 'portfolio-01', name: 'Portfolio 1' },
			{ id: 'team-01', name: 'Team 1' },
			{ id: 'cta-01', name: 'CTA 1', iframeHeight: '600px' },
			{ id: 'cta-10', name: 'CTA 10', iframeHeight: '600px' },
			{ id: 'cta-12', name: 'CTA 12', iframeHeight: '600px' },
			{ id: 'logo-cloud-01', name: 'Logo Cloud 1', iframeHeight: '600px' },
			{ id: 'faq-01', name: 'FAQ 1' },
			{ id: 'faq-17', name: 'FAQ 17' },
			{ id: 'gallery-01', name: 'Gallery 1' },
			{ id: 'blog-01', name: 'Blog 1' },
			{ id: 'blog-15', name: 'Blog 15' },
			{ id: 'blog-17', name: 'Blog 17' },
			{ id: 'about-us-01', name: 'About Us 1' },
			{ id: 'contact-us-01', name: 'Contact Us 1' },
			{ id: 'navbar-01', name: 'Navbar 1', iframeHeight: '600px' },
			{ id: 'footer-01', name: 'Footer 1', iframeHeight: '600px' },
			{ id: 'login-01', name: 'Login 1' },
			{ id: 'register-01', name: 'Register 1' },
			{ id: 'forgot-password-01', name: 'Forgot Password 1' },
			{ id: 'reset-password-01', name: 'Reset Password 1' },
			{ id: 'verify-email-01', name: 'Verify Email 1' },
			{
				id: 'two-factor-authentication-01',
				name: 'Two Factor Authentication 1'
			},
			{ id: 'app-integration-01', name: 'App Integration 1', iframeHeight: '600px' },
			{ id: 'error-01', name: 'Error 1' }
		]
	},
	{
		id: 'dashboard',
		name: 'Dashboard & App',
		blocks: [
			{ id: 'dashboard-shell-01', name: 'Dashboard Shell 1' },
			{ id: 'application-shell-01', name: 'Application Shell 1' },
			{ id: 'charts-01', name: 'Charts 1' },
			{ id: 'widget-01', name: 'Widget 1', iframeHeight: '600px' },
			{ id: 'widget-02', name: 'Widget 2', iframeHeight: '600px' },
			{ id: 'statistics-01', name: 'Statistics 1', iframeHeight: '600px' },
			{ id: 'dashboard-dialog-01', name: 'Dashboard Dialog 1', iframeHeight: '600px' },
			{
				id: 'dashboard-dropdown-01',
				name: 'Dashboard Dropdown 1',
				iframeHeight: '600px'
			},
			{
				id: 'dashboard-dropdown-02',
				name: 'Dashboard Dropdown 2',
				iframeHeight: '600px'
			},
			{ id: 'dashboard-sidebar-01', name: 'Dashboard Sidebar 1' },
			{ id: 'dashboard-header-01', name: 'Dashboard Header 1' },
			{ id: 'dashboard-footer-01', name: 'Dashboard Footer 1' }
		]
	},
	{
		id: 'ecommerce',
		name: 'eCommerce',
		blocks: [{ id: 'product-list-01', name: 'Product List 1' }]
	},
	{
		id: 'datatable',
		name: 'Datatable',
		hidden: true,
		blocks: []
	},
	{
		id: 'bento',
		name: 'Bento',
		hidden: true,
		blocks: []
	}
]);

export const blocks = blockCategories.flatMap((category) => category.blocks);