import { type ComponentCategory } from '$lib/config/components.svelte';
import { Context } from 'runed';

export const ComponentCategoryContext = new Context<() => ComponentCategory>('ComponentCategory');
