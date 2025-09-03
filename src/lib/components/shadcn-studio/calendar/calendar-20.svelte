<script lang="ts">

</script>


import { useId, useState } from 'react'

import { ClockIcon } from '@lucide/svelte'

import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardContent, CardHeader } from '$lib/components/ui/card'
import { Input } from '$lib/components/ui/input'
import { Label } from '$lib/components/ui/label'

const CalendarWithTimeInput = () => {
  const id = useId()
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Card class='gap-5 py-5'>
        <CardHeader class='flex items-center gap-2 border-b px-3 !pb-3'>
          <Label htmlFor={id} class='text-xs'>
            Enter time
          </Label>
          <div class='relative grow'>
            <Input
              id={id}
              type='time'
              step='1'
              defaultValue='12:00:00'
              class='peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
            <div class='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
              <ClockIcon size={16} aria-hidden='true' />
            </div>
          </div>
        </CardHeader>
        <CardContent class='px-5'>
          <Calendar type="single" bind:value  class='bg-transparent p-0' />
        </CardContent>
      </Card>
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with time input
      </p>
    </div>
  )
}


