<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Textarea } from '$lib/components/ui/textarea';

	const id = $props.id();

	const ratings = [
		{ value: '1', label: 'Angry', icon: '😡' },
		{ value: '2', label: 'Sad', icon: '🙁' },
		{ value: '3', label: 'Neutral', icon: '🙂' },
		{ value: '4', label: 'Happy', icon: '😁' },
		{ value: '5', label: 'Laughing', icon: '🤩' }
	];
</script>

<Dialog>
	<form>
		<DialogTrigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Rating</Button>
			{/snippet}
		</DialogTrigger>
		<DialogContent class="sm:max-w-md">
			<DialogHeader>
				<DialogTitle class="text-xl">Help us improve our product for you</DialogTitle>
			</DialogHeader>
			<form class="flex flex-col gap-4 pt-4">
				<fieldset class="space-y-4">
					<legend class="text-sm leading-none font-medium text-foreground">
						How would you like to describe your experience with the app today?
					</legend>
					<RadioGroup class="flex gap-1.5" value="5">
						{#each ratings as rating (`${id}-${rating.value}`)}
							<label
								class="relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border border-input text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-sky-600 has-focus-visible:ring-[3px] has-focus-visible:ring-sky-600/50 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:border-sky-600 has-data-[state=checked]:bg-sky-600/10 dark:has-focus-visible:border-sky-400 dark:has-focus-visible:ring-sky-600/50 dark:has-data-[state=checked]:border-sky-400 dark:has-data-[state=checked]:bg-sky-400/10"
							>
								<RadioGroupItem
									id={`${id}-${rating.value}`}
									value={rating.value}
									class="sr-only after:absolute after:inset-0"
								/>
								{rating.icon}
							</label>
						{/each}
					</RadioGroup>
				</fieldset>
				<div class="grid grow-1 gap-3">
					<Textarea placeholder="Type your message here." id="message-2" required />
					<p class="text-sm text-muted-foreground">500/500 characters left</p>
				</div>
				<div class="flex gap-3">
					<Checkbox id="terms" />
					<Label for="terms">I consent to Shadcn Studio contacting me based on my feedback</Label>
				</div>

				<DialogFooter class="sm:justify-end">
					<DialogClose>
						{#snippet child({ props })}
							<Button {...props} variant="outline">Cancel</Button>
						{/snippet}
					</DialogClose>
					<Button type="submit">Submit</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</form>
</Dialog>
