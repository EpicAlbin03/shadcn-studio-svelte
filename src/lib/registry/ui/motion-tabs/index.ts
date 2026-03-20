import HighlightItem, { type MotionHighlightItemProps } from './motion-highlight-item.svelte';
import Highlight, {
	motionHighlightContext,
	type MotionHighlightContext,
	type MotionHighlightProps
} from './motion-highlight.svelte';
import Content, { type MotionTabsContentProps } from './motion-tabs-content.svelte';
import Contents, { type MotionTabsContentsProps } from './motion-tabs-contents.svelte';
import List, { type MotionTabsListProps } from './motion-tabs-list.svelte';
import Trigger, { type MotionTabsTriggerProps } from './motion-tabs-trigger.svelte';
import Root, { motionTabsContext, type MotionTabsProps } from './motion-tabs.svelte';

export {
	Root,
	List,
	Trigger,
	Contents,
	Content,
	Highlight,
	HighlightItem,
	//
	Root as MotionTabs,
	List as MotionTabsList,
	Trigger as MotionTabsTrigger,
	Contents as MotionTabsContents,
	Content as MotionTabsContent,
	Highlight as MotionHighlight,
	HighlightItem as MotionHighlightItem,
	//
	motionTabsContext,
	motionHighlightContext,
	//
	type MotionTabsProps,
	type MotionTabsListProps,
	type MotionTabsTriggerProps,
	type MotionTabsContentsProps,
	type MotionTabsContentProps,
	type MotionHighlightProps,
	type MotionHighlightItemProps,
	type MotionHighlightContext
};
