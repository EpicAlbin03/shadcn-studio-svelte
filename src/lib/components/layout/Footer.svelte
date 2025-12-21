<script lang="ts">
	import Logo from '$lib/components/layout/Logo.svelte';
	import Github from '$lib/assets/svg/Github.svelte';
	import Discord from '$lib/assets/svg/Discord.svelte';
	import X from '$lib/assets/svg/X.svelte';
</script>

<footer class="flex w-full flex-col">
	<div
		class="mx-auto w-full max-w-[1400px] border-t border-dashed px-4 py-9 min-[1400px]:border-x min-[1800px]:max-w-[1536px] sm:px-8 sm:py-16"
	>
		<div class="grid grid-cols-5 gap-6 sm:gap-8">
			<div class="col-span-full flex flex-col items-start gap-4 lg:col-span-2">
				<a href="/">
					<Logo />
				</a>
				<p>
					An open-source collection of copy-and-paste shadcn components, blocks, and templates -
					paired with a powerful theme generator to craft, customize, and ship faster.
				</p>
				<div class="flex items-center gap-4">
					<a
						href="https://github.com/EpicAlbin03/shadcn-studio-svelte"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github class="size-6" />
						<span class="sr-only">Github</span>
					</a>
					<!-- <a href="https://discord.com/invite/kBHkY7DekX" target="_blank" rel="noopener noreferrer">
						<Discord class="size-6" />
						<span class="sr-only">Discord</span>
					</a> -->
					<a href="https://x.com/EpicAlbin03" target="_blank" rel="noopener noreferrer">
						<X class="size-6" />
						<span class="sr-only">X</span>
					</a>
				</div>
				<p class="text-sm text-muted-foreground">
					This project is independent and not affiliated with shadcn/ui, or shadcn/studio.
				</p>
			</div>
			<div
				class="col-span-full grid gap-6 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:col-span-3 lg:gap-8"
			>
				<div class="flex flex-col gap-5">
					<div class="text-lg font-semibold">Products</div>
					<ul class="space-y-3">
						<li class="hover:underline">
							<a href="/theme-generator">Theme Generator</a>
						</li>
						<li class="hover:underline">
							<a href="/components">Components</a>
						</li>
						<li class="hover:underline">
							<a href="/blocks">Blocks </a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col gap-5">
					<div class="text-lg font-semibold">Resources</div>
					<ul class="space-y-3">
						<!-- <li>
							<a href="/theme-generator/#roadmap">Roadmap</a>
						</li> -->
						<li class="hover:underline">
							<a href="/theme-generator#faq">FAQ</a>
						</li>
						<li class="hover:underline">
							<a href="/sitemap.xml">Sitemap</a>
						</li>
						<!-- <li>
              <a
                href="https://github.com/themeselection/shadcn-studio/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Changelog
              </a>
            </li> -->
					</ul>
				</div>
				<div class="flex flex-col gap-5">
					<div class="text-lg font-semibold">Legal</div>
					<ul class="space-y-3">
						<li class="hover:underline">
							<a
								href="https://github.com/EpicAlbin03/shadcn-studio-svelte/blob/main/LICENSE.md"
								target="_blank"
								rel="noopener noreferrer"
							>
								License
							</a>
						</li>
						<li class="hover:underline">
							<a href="https://shadcnstudio.com/privacy-policy">Privacy policy</a>
						</li>
						<li class="hover:underline">
							<a href="https://shadcnstudio.com/terms-and-condition">Terms & Condition</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full border-t border-dashed">
		<div
			class="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-5 border-dashed px-8 py-6 text-center text-muted-foreground max-lg:flex-col min-[1400px]:border-x min-[1800px]:max-w-[1536px]"
		>
			<p>
				Built by
				<a
					href="https://x.com/ajaypatel_aj"
					target="_blank"
					class="font-medium text-foreground hover:underline"
				>
					@Ajay Patel
				</a>
				&
				<a
					href="https://x.com/imananddesigner"
					target="_blank"
					class="font-medium text-foreground hover:underline"
				>
					@Anand Patel
				</a>
				at
				<a href="https://shadcnstudio.com" class="font-medium text-foreground hover:underline"
					>shadcn/studio</a
				>
				. Ported to Svelte by
				<a
					href="https://x.com/EpicAlbin03"
					target="_blank"
					class="font-medium text-foreground hover:underline"
				>
					@EpicAlbin03
				</a>
			</p>
		</div>
	</div>
</footer>
