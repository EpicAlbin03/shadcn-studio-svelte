<script lang="ts">
	import { ChevronDownIcon, StarIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="w-full max-w-[350px] space-y-3">
	<Collapsible class="flex flex-col gap-2">
		<div class="flex items-center justify-between gap-4 px-4">
			<div class="text-sm font-semibold">Price Range</div>
			<CollapsibleTrigger class="group">
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="size-8">
						<ChevronDownIcon
							class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
						/>
						<span class="sr-only">Toggle</span>
					</Button>
				{/snippet}
			</CollapsibleTrigger>
		</div>
		<CollapsibleContent class="flex flex-col gap-2">
			<div class="flex items-center justify-between gap-4 px-4">
				<Label for="min-price" class="shrink-0 text-sm font-medium">Min Price</Label>
				<Input id="min-price" type="number" placeholder="0" class="max-w-58" />
			</div>
			<div class="flex items-center justify-between gap-4 px-4">
				<Label for="max-price" class="shrink-0 text-sm font-medium">Max Price</Label>
				<Input id="max-price" type="number" placeholder="1000" class="max-w-58" />
			</div>
		</CollapsibleContent>
	</Collapsible>
	<Separator />
	<Collapsible class="flex w-full max-w-[350px] flex-col gap-2">
		<div class="flex items-center justify-between gap-4 px-4">
			<div class="text-sm font-semibold">Customer Ratings</div>
			<CollapsibleTrigger class="group">
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="size-8">
						<ChevronDownIcon
							class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
						/>
						<span class="sr-only">Toggle</span>
					</Button>
				{/snippet}
			</CollapsibleTrigger>
		</div>
		<CollapsibleContent class="flex flex-col gap-2">
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="rating-4" />
				<Label for="rating-4" class="flex shrink-0 items-center gap-1 text-sm font-medium">
					<span class="flex items-center gap-1">
						4
						<StarIcon
							class="size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
						/>
					</span>
					& Up
				</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="rating-3" />
				<Label for="rating-3" class="flex shrink-0 items-center gap-1 text-sm font-medium">
					<span class="flex items-center gap-1">
						3
						<StarIcon
							class="size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
						/>
					</span>
					& Up
				</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="rating-2" />
				<Label for="rating-2" class="flex shrink-0 items-center gap-1 text-sm font-medium">
					<span class="flex items-center gap-1">
						2
						<StarIcon
							class="size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400"
						/>
					</span>
					& Up
				</Label>
			</div>
		</CollapsibleContent>
	</Collapsible>
	<Separator />
	<Collapsible class="flex w-full max-w-[350px] flex-col gap-2">
		<div class="flex items-center justify-between gap-4 px-4">
			<div class="text-sm font-semibold">Brand</div>
			<CollapsibleTrigger class="group">
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="size-8">
						<ChevronDownIcon
							class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
						/>
						<span class="sr-only">Toggle</span>
					</Button>
				{/snippet}
			</CollapsibleTrigger>
		</div>
		<CollapsibleContent class="flex flex-col gap-2">
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="brand-apple" />
				<Label for="brand-apple" class="shrink-0 text-sm font-medium">Apple</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="brand-samsung" />
				<Label for="brand-samsung" class="shrink-0 text-sm font-medium">Samsung</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="brand-google" />
				<Label for="brand-google" class="shrink-0 text-sm font-medium">Google</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="brand-oneplus" />
				<Label for="brand-oneplus" class="shrink-0 text-sm font-medium">OnePlus</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="brand-xiaomi" />
				<Label for="brand-xiaomi" class="shrink-0 text-sm font-medium">Xiaomi</Label>
			</div>
		</CollapsibleContent>
	</Collapsible>
	<Separator />
	<Collapsible class="flex w-full max-w-[350px] flex-col gap-2">
		<div class="flex items-center justify-between gap-4 px-4">
			<div class="text-sm font-semibold">Battery</div>
			<CollapsibleTrigger class="group">
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="size-8">
						<ChevronDownIcon
							class="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
						/>
						<span class="sr-only">Toggle</span>
					</Button>
				{/snippet}
			</CollapsibleTrigger>
		</div>
		<CollapsibleContent class="flex flex-col gap-2">
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="battery-3500" />
				<Label for="battery-3500" class="shrink-0 text-sm font-medium">3500mAh</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="battery-4000" />
				<Label for="battery-4000" class="shrink-0 text-sm font-medium">4000mAh</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="battery-5000" />
				<Label for="battery-5000" class="shrink-0 text-sm font-medium">5000mAh</Label>
			</div>
			<div class="flex items-center gap-2 px-4">
				<Checkbox id="battery-6000" />
				<Label for="battery-6000" class="shrink-0 text-sm font-medium">6000mAh</Label>
			</div>
		</CollapsibleContent>
	</Collapsible>
</div>
