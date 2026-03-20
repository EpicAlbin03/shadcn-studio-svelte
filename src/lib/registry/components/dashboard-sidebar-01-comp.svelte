<script lang="ts">
	import ArrowRightLeftIcon from '@lucide/svelte/icons/arrow-right-left';
	import CalendarClockIcon from '@lucide/svelte/icons/calendar-clock';
	import ChartNoAxesCombinedIcon from '@lucide/svelte/icons/chart-no-axes-combined';
	import ChartPieIcon from '@lucide/svelte/icons/chart-pie';
	import ChartSplineIcon from '@lucide/svelte/icons/chart-spline';
	import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
	import Clock9Icon from '@lucide/svelte/icons/clock9';
	import CrownIcon from '@lucide/svelte/icons/crown';
	import HashIcon from '@lucide/svelte/icons/hash';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import SquareActivityIcon from '@lucide/svelte/icons/square-activity';
	import Undo2Icon from '@lucide/svelte/icons/undo2';
	import UsersIcon from '@lucide/svelte/icons/users';
	import * as Sidebar from '$lib/components/ui/sidebar';
</script>

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
