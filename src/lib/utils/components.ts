import { Context } from 'runed';
import { type ComponentCategory } from '$lib/config/components.svelte';

export const ComponentCategoryContext = new Context<() => ComponentCategory>('ComponentCategory');
