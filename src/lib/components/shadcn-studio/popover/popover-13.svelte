<script lang="ts">
	import { CheckIcon, CopyIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';

	let copied = $state(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText('SUMMER25OFF');
			copied = true;
			setTimeout(() => (copied = false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};
</script>

<Popover>
	<PopoverTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Slide-in from left</Button>
		{/snippet}
	</PopoverTrigger>
	<PopoverContent
		class="w-80 duration-400 data-[state=closed]:slide-out-to-left-20 data-[state=closed]:slide-out-to-top-0 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-left-20 data-[state=open]:slide-in-from-top-0 data-[state=open]:zoom-in-100"
	>
		<div class="flex flex-col items-center gap-4">
			<div class="space-y-1 text-center">
				<div class="text-lg font-semibold">Summer Sale Discount</div>
				<p class="text-sm">Scan this code at checkout for 25% off</p>
			</div>
			<div class="aspect-square rounded-xl border p-2">
				<img src="/components/qr-code.webp" alt="Discount QR Code" class="size-38 rounded-md" />
			</div>
			<div class="flex w-full items-center gap-1.5">
				<Separator class="flex-1" />
				<span class="text-xs text-muted-foreground">or use coupon code</span>
				<Separator class="flex-1" />
			</div>
			<div class="flex w-full gap-2">
				<Input
					type="text"
					placeholder="Discount code"
					defaultValue="SUMMER25OFF"
					class="disabled:bg-muted"
					disabled
				/>
				<Button variant="outline" size="icon" class="relative" onclick={handleCopy}>
					<span
						class={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}
					>
						<CheckIcon class="stroke-green-600 dark:stroke-green-400" />
					</span>
					<span
						class={cn(
							'absolute start-2.25 transition-all',
							copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
						)}
					>
						<CopyIcon />
					</span>
				</Button>
			</div>
		</div>
	</PopoverContent>
</Popover>
