<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<section class="bg-primary py-8 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<Card.Root class="rounded-none border-0 bg-primary shadow-none">
			<Card.Content class="flex justify-between gap-6 max-lg:flex-col md:px-8 lg:items-center">
				<div class="space-y-4">
					<h2 class="text-2xl font-semibold text-primary-foreground md:text-3xl lg:text-4xl">
						Ready to Dive Deeper?
					</h2>
					<p class="text-lg text-muted-foreground md:text-xl">
						Everything from setup to advanced features is covered in our docs.
					</p>
				</div>
				<div>
					<Button
						size="lg"
						variant="secondary"
						class="inline-flex shrink-0 items-center gap-2 rounded-lg text-base has-[>svg]:px-6"
						href="#"
					>
						View Docs
						<ArrowRightIcon class="size-5" />
					</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
