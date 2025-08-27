import { MediaQuery } from 'svelte/reactivity';

const DEFAULT_MOBILE_BREAKPOINT = 1025;

export class IsMobile extends MediaQuery {
	constructor(breakpoint: number = DEFAULT_MOBILE_BREAKPOINT) {
		super(`max-width: ${breakpoint - 1}px`);
	}
}
