import Root, { type MotionTabsProps, motionTabsContext } from './motion-tabs.svelte';
import List, { type MotionTabsListProps } from './motion-tabs-list.svelte';
import Trigger, { type MotionTabsTriggerProps } from './motion-tabs-trigger.svelte';
import Contents, { type MotionTabsContentsProps } from './motion-tabs-contents.svelte';
import Content, { type MotionTabsContentProps } from './motion-tabs-content.svelte';
import Highlight, {
	type MotionHighlightProps,
	type MotionHighlightContext,
	motionHighlightContext
} from './motion-highlight.svelte';
import HighlightItem, { type MotionHighlightItemProps } from './motion-highlight-item.svelte';

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
