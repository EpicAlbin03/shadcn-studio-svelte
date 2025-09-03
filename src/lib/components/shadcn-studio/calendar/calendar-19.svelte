<script lang="ts">

</script>


import { useEffect, useId, useState } from 'react'

import { format } from 'date-fns'
import { CalendarIcon } from '@lucide/svelte'

import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardContent, CardHeader } from '$lib/components/ui/card'
import { Input } from '$lib/components/ui/input'
import { Label } from '$lib/components/ui/label'

const CalendarWithDateInput = () => {
  const id = useId()
  const today = new Date()
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date | undefined>(today)
  const [inputValue, setInputValue] = useState('')

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('')
      setDate(undefined)
    } else {
      setDate(date)
      setMonth(date)
      setInputValue(format(date, 'yyyy-MM-dd'))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setInputValue(value)

    if (value) {
      const parsedDate = new Date(value)

      setDate(parsedDate)
      setMonth(parsedDate)
    } else {
      setDate(undefined)
    }
  }

  useEffect(() => {
    setInputValue(format(today, 'yyyy-MM-dd'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card class='gap-5 py-5'>
        <CardHeader class='flex items-center gap-2 border-b px-3 !pb-3'>
          <Label htmlFor={id} class='shrink-0 text-xs'>
            Enter date
          </Label>
          <div class='relative grow'>
            <Input
              id={id}
              type='date'
              value={inputValue}
              onChange={handleInputChange}
              class='peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
              aria-label='Select date'
            />
            <div class='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
              <CalendarIcon size={16} aria-hidden='true' />
            </div>
          </div>
        </CardHeader>
        <CardContent class='px-5'>
          <Calendar
            type="single"
            bind:value
            onSelect={handleDayPickerSelect}
            month={month}
            onMonthChange={setMonth}
            class='bg-transparent p-0'
          />
        </CardContent>
      </Card>
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with date input
      </p>
    </div>
  )
}


