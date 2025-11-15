import { z } from 'zod/v4';

export const themeStylePropsSchema = z.object({
	background: z.string(),
	foreground: z.string(),
	card: z.string(),
	'card-foreground': z.string(),
	popover: z.string(),
	'popover-foreground': z.string(),
	primary: z.string(),
	'primary-foreground': z.string(),
	secondary: z.string(),
	'secondary-foreground': z.string(),
	muted: z.string(),
	'muted-foreground': z.string(),
	accent: z.string(),
	'accent-foreground': z.string(),
	destructive: z.string(),
	border: z.string(),
	input: z.string(),
	ring: z.string(),
	'chart-1': z.string(),
	'chart-2': z.string(),
	'chart-3': z.string(),
	'chart-4': z.string(),
	'chart-5': z.string(),
	sidebar: z.string(),
	'sidebar-foreground': z.string(),
	'sidebar-primary': z.string(),
	'sidebar-primary-foreground': z.string(),
	'sidebar-accent': z.string(),
	'sidebar-accent-foreground': z.string(),
	'sidebar-border': z.string(),
	'sidebar-ring': z.string(),
	'font-sans': z.string().optional(),
	'font-serif': z.string().optional(),
	'font-mono': z.string().optional(),
	radius: z.string().optional(),
	'shadow-color': z.string().optional(),
	'shadow-opacity': z.string().optional(),
	'shadow-blur': z.string().optional(),
	'shadow-spread': z.string().optional(),
	'shadow-offset-x': z.string().optional(),
	'shadow-offset-y': z.string().optional(),
	'letter-spacing': z.string().optional(),
	spacing: z.string().optional()
});

export type ThemeStyleProps = z.infer<typeof themeStylePropsSchema>;

export const themeStylesSchema = z.object({
	light: themeStylePropsSchema.partial(),
	dark: themeStylePropsSchema.partial()
});

export type ThemeStyles = z.infer<typeof themeStylesSchema>;

export const themeMetadataSchema = z.object({
	badge: z.string().optional()
});

export type ThemeMetadata = z.infer<typeof themeMetadataSchema>;

export const themeSchema = z.object({
	name: z.string(),
	label: z.string(),
	cssVars: themeStylesSchema,
	meta: themeMetadataSchema.optional()
});

export type Theme = z.infer<typeof themeSchema>;
