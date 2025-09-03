<script lang="ts">

</script>




import { formatDateRange } from 'little-date'
import { PlusIcon } from '@lucide/svelte'

import { Button } from '$lib/components/ui/button'
import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardContent, CardFooter } from '$lib/components/ui/card'

const events = [
  {
    title: 'Team Sync Meeting',
    from: '2025-06-12T09:00:00',
    to: '2025-06-12T10:00:00'
  },
  {
    title: 'Design Review',
    from: '2025-06-12T11:30:00',
    to: '2025-06-12T12:30:00'
  },
  {
    title: 'Client Presentation',
    from: '2025-06-12T14:00:00',
    to: '2025-06-12T15:00:00'
  }
]

const CalendarEventListDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Card class='w-2xs py-4'>
        <CardContent class='px-4'>
          <Calendar type="single" bind:value  class='w-full bg-transparent p-0' required />
        </CardContent>
        <CardFooter class='flex flex-col items-start gap-3 border-t px-4 !pt-4'>
          <div class='flex w-full items-center justify-between px-1'>
            <div class='text-sm font-medium'>
              {date?.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            <Button variant='ghost' size='icon' class='size-6' title='Add Event'>
              <PlusIcon />
              <span class='sr-only'>Add Event</span>
            </Button>
          </div>
          <div class='flex w-full flex-col gap-2'>
            {events.map(event => (
              <div
                key={event.title}
                class='bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full'
              >
                <div class='font-medium'>{event.title}</div>
                <div class='text-muted-foreground text-xs'>
                  {formatDateRange(new Date(event.from), new Date(event.to))}
                </div>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Calendar with event list
      </p>
    </div>
  )
}


