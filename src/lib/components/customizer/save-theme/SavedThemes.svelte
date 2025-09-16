<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { UserConfigContext } from '$lib/config/user-config.svelte';
	import type { ThemeStyleProps, ThemeStyles } from '$lib/types/theme';
	import { Trash2 } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	const userConfig = UserConfigContext.get();

	function handleApplyTheme(theme: { name: string; cssVars: ThemeStyles }) {
		userConfig.setActiveTheme({
			name: theme.name,
			label: theme.name,
			cssVars: theme.cssVars
		});

		toast.success(`Theme "${theme.name}" has been applied.`);
	}

	function handleDeleteTheme(event: MouseEvent, name: string) {
		event.stopPropagation(); // Prevent theme application when deleting
		userConfig.removeSavedTheme(name);
		toast.success(`Theme "${name}" has been removed.`);
	}

	function getThemeColor(theme: { cssVars: ThemeStyles }, color: keyof ThemeStyleProps) {
		return theme.cssVars?.light?.[color] || theme.cssVars?.dark?.[color] || '#000000';
	}
</script>

{#if userConfig.savedThemes && userConfig.savedThemes.length > 0}
	<div class="space-y-3">
		<h3 class="text-sm font-medium text-muted-foreground">My themes</h3>
		<div class="grid gap-2">
			{#each userConfig.savedThemes as theme (theme.name)}
				<button
					onclick={() => handleApplyTheme(theme)}
					class="group flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg border bg-card px-2 py-1 transition-colors hover:bg-accent/5 sm:max-w-[22rem]"
				>
					<div class="flex items-center">
						<div class="relative size-[26px] rounded border bg-background p-1">
							<div class="grid h-full w-full grid-cols-2 grid-rows-2 gap-[2px]">
								<div
									class="rounded-[2px]"
									style="background-color: {getThemeColor(theme, 'primary')}"
								></div>
								<div
									class="rounded-[2px]"
									style="background-color: {getThemeColor(theme, 'destructive')}"
								></div>
								<div
									class="rounded-[2px]"
									style="background-color: {getThemeColor(theme, 'secondary')}"
								></div>
								<div
									class="rounded-full"
									style="background-color: {getThemeColor(theme, 'accent')}"
								></div>
							</div>
						</div>
					</div>
					<span class="flex-1 truncate text-[13px] font-medium">{theme.name}</span>
					<Button
						variant="ghost"
						size="icon"
						class="h-8 w-8 text-muted-foreground/60 hover:text-destructive"
						onclick={(e: MouseEvent) => handleDeleteTheme(e, theme.name)}
					>
						<Trash2 class="h-4 w-4" />
					</Button>
				</button>
			{/each}
		</div>
	</div>
{/if}
