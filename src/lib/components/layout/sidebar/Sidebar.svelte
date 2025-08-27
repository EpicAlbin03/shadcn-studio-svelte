<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import {
		ChevronRightIcon,
		Component,
		Figma,
		File,
		Flame,
		LayoutPanelTop,
		PaintbrushVertical,
		X
	} from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import {
		Sidebar,
		SidebarContent,
		SidebarGroup,
		SidebarMenuSub,
		SidebarMenuBadge,
		SidebarHeader,
		SidebarMenuItem,
		SidebarMenuButton,
		SidebarMenu,
		useSidebar
	} from '$lib/components/ui/sidebar';
	import { CustomSidebarMenuItem, CustomSidebarMenuSubItem } from '.';
	import Logo from '$lib/components/layout/Logo.svelte';
	import { cn } from '$lib/utils';
	import { categories } from '$lib/config/components.svelte';

	const breakpoint = new MediaQuery('(max-width: 1023px)', false);
	let isBreakpointReached = $derived(breakpoint.current);
	const { setOpenMobile } = useSidebar();
</script>

<Sidebar
	collapsible={isBreakpointReached ? 'offcanvas' : 'none'}
	class="border-r border-dashed bg-background"
>
	{#if isBreakpointReached}
		<SidebarHeader
			class="min-h-(--header-height) flex-row items-center justify-between px-6 py-3.5"
		>
			<a href="/">
				<Logo />
			</a>
			<Button
				variant="ghost"
				size="icon"
				class="size-7 cursor-pointer"
				onclick={() => setOpenMobile(false)}
			>
				<X class="size-5" />
				<span class="sr-only">Close</span>
			</Button>
		</SidebarHeader>
	{/if}
	<ScrollArea class="max-h-[calc(100vh-var(--header-height))] lg:!sticky lg:top-(--header-height)">
		<SidebarContent>
			<SidebarGroup
				class={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-5', { 'first:pt-8': !isBreakpointReached })}
			>
				<SidebarMenu class="gap-2.5">
					<CustomSidebarMenuItem href="/theme-generator">
						<PaintbrushVertical class="!size-5" />
						Theme Generator
						<SidebarMenuBadge
							class="static gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 font-normal text-destructive"
						>
							<Flame class="size-4" /> Hot
						</SidebarMenuBadge>
					</CustomSidebarMenuItem>
					<CustomSidebarMenuItem href="/components">
						<Component class="!size-5" />
						Components
					</CustomSidebarMenuItem>
					<CustomSidebarMenuItem>
						<Figma class="!size-5" />
						Figma UI Kit
						<SidebarMenuBadge
							class="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground"
						>
							Coming Soon
						</SidebarMenuBadge>
					</CustomSidebarMenuItem>
					<CustomSidebarMenuItem>
						<LayoutPanelTop class="!size-5" />
						Blocks
						<SidebarMenuBadge
							class="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground"
						>
							Coming Soon
						</SidebarMenuBadge>
					</CustomSidebarMenuItem>
					<CustomSidebarMenuItem>
						<File class="!size-5" />
						Templates
						<SidebarMenuBadge
							class="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground"
						>
							Coming Soon
						</SidebarMenuBadge>
					</CustomSidebarMenuItem>
				</SidebarMenu>
			</SidebarGroup>
			<SidebarGroup
				class={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}
			>
				<SidebarMenu class="gap-2.5">
					<Collapsible class="group/collapsible" open>
						<SidebarMenuItem>
							<CollapsibleTrigger>
								{#snippet child({ props })}
									<SidebarMenuButton
										{...props}
										class="h-8.5 cursor-pointer rounded-sm px-3 font-semibold text-sidebar-foreground/70 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 lg:px-4"
									>
										<span>Getting Started</span>
										<ChevronRightIcon
											class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
										/>
									</SidebarMenuButton>
								{/snippet}
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub class="mx-3 gap-0 border-0 p-0 lg:mx-4">
									<CustomSidebarMenuSubItem href="/docs/getting-started/introduction">
										Introduction
									</CustomSidebarMenuSubItem>
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				</SidebarMenu>
			</SidebarGroup>
			<SidebarGroup
				class={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}
			>
				<SidebarMenu class="gap-2.5">
					<Collapsible class="group/collapsible" open>
						<SidebarMenuItem>
							<CollapsibleTrigger>
								{#snippet child({ props })}
									<SidebarMenuButton
										{...props}
										class="h-8.5 cursor-pointer rounded-sm px-3 font-semibold text-sidebar-foreground/70 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 lg:px-4"
									>
										<span>Animated Components</span>
										<ChevronRightIcon
											class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
										/>
									</SidebarMenuButton>
								{/snippet}
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub class="mx-3 gap-0 border-0 p-0 lg:mx-4">
									{#each categories.filter((category) => category.hasAnimation) as category (category.slug)}
										<CustomSidebarMenuSubItem
											{...category.isComingSoon
												? { href: '/', onClick: (e) => e.preventDefault() }
												: {
														href: `/docs/components/${category.slug}#animated-variants`
													}}
										>
											{category.name}
											{#if category.isComingSoon}
												<SidebarMenuBadge
													class="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground"
												>
													Coming Soon
												</SidebarMenuBadge>
											{/if}
											{#if category.animation?.badge}
												<SidebarMenuBadge
													class={cn({
														'static rounded-full bg-primary px-2 py-0.5 font-normal text-primary-foreground':
															category.animation.badge === 'New',
														'static rounded-full bg-indigo-600/10 px-2 py-0.5 font-normal text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-400':
															category.animation.badge === 'Updated'
													})}
												>
													{category.animation.badge}
												</SidebarMenuBadge>
											{/if}
										</CustomSidebarMenuSubItem>
									{/each}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				</SidebarMenu>
			</SidebarGroup>
			<SidebarGroup
				class={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}
			>
				<SidebarMenu class="gap-2.5">
					<Collapsible class="group/collapsible" open>
						<SidebarMenuItem>
							<CollapsibleTrigger>
								{#snippet child({ props })}
									<SidebarMenuButton
										{...props}
										class="h-8.5 cursor-pointer rounded-sm px-3 font-semibold text-sidebar-foreground/70 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 lg:px-4"
									>
										<span>Components</span>
										<ChevronRightIcon
											class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
										/>
									</SidebarMenuButton>
								{/snippet}
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub class="mx-3 gap-0 border-0 p-0 lg:mx-4">
									{#each categories as category (category.slug)}
										<CustomSidebarMenuSubItem
											{...category.isComingSoon
												? { href: '/', onClick: (e) => e.preventDefault() }
												: { href: `/docs/components/${category.slug}` }}
										>
											{category.name}
											{#if category.isComingSoon}
												<SidebarMenuBadge
													class="static rounded-full bg-muted px-2 py-0.5 font-normal text-muted-foreground"
												>
													Coming Soon
												</SidebarMenuBadge>
											{/if}
											{#if category.badge}
												<SidebarMenuBadge
													class={cn({
														'static rounded-full bg-primary px-2 py-0.5 font-normal text-primary-foreground':
															category.badge === 'New',
														'static rounded-full bg-indigo-600/10 px-2 py-0.5 font-normal text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-400':
															category.badge === 'Updated'
													})}
												>
													{category.badge}
												</SidebarMenuBadge>
											{/if}
										</CustomSidebarMenuSubItem>
									{/each}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				</SidebarMenu>
			</SidebarGroup>
		</SidebarContent>
	</ScrollArea>
</Sidebar>
