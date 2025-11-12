<script lang="ts">
	import {
		ArrowRightLeftIcon,
		CalendarClockIcon,
		ChartNoAxesCombinedIcon,
		ChartPieIcon,
		ChartSplineIcon,
		ClipboardListIcon,
		Clock9Icon,
		CrownIcon,
		FacebookIcon,
		HashIcon,
		InstagramIcon,
		LinkedinIcon,
		SettingsIcon,
		SquareActivityIcon,
		TwitterIcon,
		Undo2Icon,
		UsersIcon
	} from '@lucide/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import LanguageDropdown from './components/dropdown-language.svelte';
	import ProfileDropdown from './components/dropdown-profile.svelte';
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<Sidebar.Root>
			<Sidebar.Content>
				<Sidebar.Group>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<ChartNoAxesCombinedIcon />
											<span>Dashboard</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
								<Sidebar.MenuBadge class="rounded-full bg-primary/10">5</Sidebar.MenuBadge>
							</Sidebar.MenuItem>
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
				<Sidebar.Group>
					<Sidebar.GroupLabel>Pages</Sidebar.GroupLabel>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<ChartSplineIcon />
											<span>Content Performance</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<UsersIcon />
											<span>Audience Insight</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<ChartPieIcon />
											<span>Engagement Metrics</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<HashIcon />
											<span>Hashtag Performance</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
								<Sidebar.MenuBadge class="rounded-full bg-primary/10">3</Sidebar.MenuBadge>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<ArrowRightLeftIcon />
											<span>Competitor Analysis</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<Clock9Icon />
											<span>Campaign Tracking</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<ClipboardListIcon />
											<span>Sentiment Tracking</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<CrownIcon />
											<span>Influencer</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
				<Sidebar.Group>
					<Sidebar.GroupLabel>Supporting Features</Sidebar.GroupLabel>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<SquareActivityIcon />
											<span>Real Time Monitoring</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<CalendarClockIcon />
											<span>Schedule Post & Calendar</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<Undo2Icon />
											<span>Report & Export</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<SettingsIcon />
											<span>Settings & Integrations</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a {...props} href="#">
											<UsersIcon />
											<span>User Management</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			</Sidebar.Content>
		</Sidebar.Root>
		<div class="flex flex-1 flex-col">
			<header class="sticky top-0 z-50 border-b bg-card">
				<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6">
					<div class="flex items-center gap-4">
						<Sidebar.Trigger class="[&_svg]:!size-5" />
						<Separator orientation="vertical" class="hidden !h-4 sm:block" />
						<Breadcrumb.Root class="hidden sm:block">
							<Breadcrumb.List>
								<Breadcrumb.Item>
									<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
								</Breadcrumb.Item>
								<Breadcrumb.Separator />
								<Breadcrumb.Item>
									<Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
								</Breadcrumb.Item>
								<Breadcrumb.Separator />
								<Breadcrumb.Item>
									<Breadcrumb.Page>Free</Breadcrumb.Page>
								</Breadcrumb.Item>
							</Breadcrumb.List>
						</Breadcrumb.Root>
					</div>
					<div class="flex items-center gap-1.5">
						<LanguageDropdown />
						<ProfileDropdown />
					</div>
				</div>
			</header>
			<main class="mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
				<Card.Root class="h-250">
					<Card.Content class="h-full">
						<div
							class="h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]"
						></div>
					</Card.Content>
				</Card.Root>
			</main>
			<footer>
				<div
					class="mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 text-muted-foreground max-sm:flex-col sm:gap-6 sm:px-6"
				>
					<p class="text-sm text-balance max-sm:text-center">
						©{new Date().getFullYear()}{' '}
						<a href="#" class="text-primary"> Shadcn/studio </a>
						, Made for better web design
					</p>
					<div class="flex items-center gap-5">
						<a href="#">
							<FacebookIcon class="size-4" />
						</a>
						<a href="#">
							<InstagramIcon class="size-4" />
						</a>
						<a href="#">
							<LinkedinIcon class="size-4" />
						</a>
						<a href="#">
							<TwitterIcon class="size-4" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	</Sidebar.Provider>
</div>
