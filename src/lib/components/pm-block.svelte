<script lang="ts">
	import type { Command } from 'package-manager-detector';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { getCommand, PACKAGE_MANAGERS, type PackageManager } from '$lib/utils/package-manager.js';
	import TerminalIcon from '@lucide/svelte/icons/terminal';
	import { UserConfigContext } from '$lib/config/user-config.svelte.js';
	import { cn } from '$lib/utils';
	import CopyButton from './CopyButton.svelte';

	const {
		type,
		command
	}: {
		type?: Command | 'create';
		command: string | string[];
	} = $props();

	const userConfig = UserConfigContext.get();
	const packageManager = $derived(userConfig.settings.packageManager);

	function getCommandText(agent: PackageManager) {
		const cmd = getCommand(agent, type, command);
		if (!type) {
			return `${cmd.args.join(' ')}`.trim();
		}
		return `${cmd.command} ${cmd.args.join(' ')}`.trim();
	}

	const commandText = $derived(getCommandText(packageManager));
</script>

<figure data-rehype-pretty-code-figure class="m-0 rounded-lg border bg-code text-code-foreground">
	<div class="overflow-x-auto">
		<Tabs.Root
			bind:value={
				() => packageManager,
				(v) => {
					userConfig.setSettings({ packageManager: v });
				}
			}
			class="gap-0"
		>
			<div class="flex items-center gap-2 border-b border-border/50 px-3 py-1">
				<div class="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
					<TerminalIcon class="size-3 text-code" />
				</div>
				<Tabs.List class="rounded-none bg-transparent p-0" data-llm-ignore>
					{#each PACKAGE_MANAGERS as pm (pm)}
						<Tabs.Trigger
							value={pm}
							class="h-7 border border-transparent pt-0.5 data-[state=active]:border-input data-[state=active]:bg-accent data-[state=active]:shadow-none"
						>
							{pm}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</div>
			<div class="no-scrollbar overflow-x-auto">
				{#each PACKAGE_MANAGERS as pm (pm)}
					<Tabs.Content
						value={pm}
						class="mt-0 px-4 py-3.5"
						data-llm-ignore={pm === 'yarn' || pm === 'yarn@berry' ? '' : undefined}
					>
						{#snippet child({ props })}
							{@const { hidden, class: className, ...rest } = props}
							<div {...rest} class={cn(className as string, (hidden as boolean) && 'hidden')}>
								<pre><code class="font-mono text-sm leading-none text-wrap" data-language="bash"
										>{getCommandText(pm)}</code
									></pre>
							</div>
						{/snippet}
					</Tabs.Content>
				{/each}
			</div>
		</Tabs.Root>
		<CopyButton text={commandText} class="absolute top-2 right-2" />
	</div>
</figure>
