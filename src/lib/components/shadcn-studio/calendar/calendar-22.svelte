<script lang="ts">

</script>




import { addDays } from 'date-fns'

import { Button } from '$lib/components/ui/button'
import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardContent, CardFooter } from '$lib/components/ui/card'

const CalendarWithPresetsDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Card class='max-w-xs py-4'>
        <CardContent class='px-4'>
          <Calendar
            type="single"
            bind:value


            class='w-full bg-transparent p-0'
          />
        </CardContent>
        <CardFooter class='flex flex-wrap gap-2 border-t px-4 !pt-4'>
          {[
            { label: 'Today', value: 0 },
            { label: 'Yesterday', value: -1 },
            { label: 'Tomorrow', value: 1 },
            { label: 'In 3 days', value: 3 },
            { label: 'In a week', value: 7 },
            { label: 'In 2 weeks', value: 14 }
          ].map(preset => (
            <Button
              key={preset.value}
              variant='outline'
              size='sm'
              class='flex-1'
              onClick={() => {
                const newDate = addDays(new Date(), preset.value)

                setDate(newDate)
              }}
            >
              {preset.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with presets
      </p>
    </div>
  )
}


