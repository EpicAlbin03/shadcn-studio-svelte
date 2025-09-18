<script lang="ts" module>
	import { z } from 'zod/v4';

	const formSchema = z.object({
		dob: z.string().refine((v) => v, { error: 'A date of birth is required.' })
	});
</script>

<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import {
		CalendarDate,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		today,
		type DateValue
	} from '@internationalized/date';
	import { CalendarIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	const form = superForm(defaults(zod4(formSchema)), {
		validators: zod4(formSchema),
		SPA: true,
		resetForm: false,
		onUpdate: ({ form: f }) => {
			if (f.valid) {
				toast.success('Great we send you a personalized outfit suggestion!', { richColors: true });
			}
		}
	});

	const { form: formData, enhance } = form;

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	let value = $derived($formData.dob ? parseDate($formData.dob) : undefined);
	let placeholder = $state<DateValue>(today(getLocalTimeZone()));

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<form method="POST" class="w-full max-w-xs space-y-6" use:enhance>
	<Form.Fieldset {form} name="dob" class="flex flex-col">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Timeless Trends for You</Form.Label>
				<Popover.Root bind:open>
					<Popover.Trigger bind:ref={triggerRef} {...props}>
						{#snippet child({ props })}
							<Button
								{...props}
								variant="outline"
								class={cn('pl-3 text-left font-normal', !value && 'text-muted-foreground')}
							>
								{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
								<CalendarIcon class="ml-auto size-4 opacity-50" />
							</Button>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0" align="start">
						<Calendar
							type="single"
							value={value as DateValue}
							bind:placeholder
							minValue={new CalendarDate(1900, 1, 1)}
							maxValue={today(getLocalTimeZone())}
							calendarLabel="Date of birth"
							onValueChange={(v) => {
								if (v) {
									$formData.dob = v.toString();
								} else {
									$formData.dob = '';
								}
								closeAndFocusTrigger();
							}}
						/>
					</Popover.Content>
				</Popover.Root>
			{/snippet}
		</Form.Control>
		<Form.Description>
			Enter your birth date to reveal styles and outfits tailored to your fashion journey.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Fieldset>
	<Form.Button>Submit</Form.Button>
</form>
