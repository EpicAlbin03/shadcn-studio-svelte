<script lang="ts">

</script>




import { CircleCheck } from '@lucide/svelte'

import { Button } from '$lib/components/ui/button'
import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card'
import { ScrollArea } from '$lib/components/ui/scroll-area'

const CalendarAppointmentBookingDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 20))
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00')

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  })

  const bookedDates = Array.from({ length: 3 }, (_, i) => new Date(2025, 5, 17 + i))

  return (
    <div>
      <Card class='gap-0 p-0'>
        <CardHeader class='flex h-max justify-center border-b !p-4'>
          <CardTitle>Book your appointment</CardTitle>
        </CardHeader>
        <CardContent class='relative p-0 md:pr-48'>
          <div class='p-6'>
            <Calendar
              type="single"
              bind:value


              disabled={bookedDates}
              showOutsideDays={false}
              modifiers={{
                booked: bookedDates
              }}
              modifiersclasss={{
                booked: '[&>button]:line-through opacity-100'
              }}
              class='bg-transparent p-0 [--cell-size:--spacing(10)]'
              formatters={{
                formatWeekdayName: date => {
                  return date.toLocaleString('en-US', { weekday: 'short' })
                }
              }}
            />
          </div>
          <div class='inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l'>
            <ScrollArea class='h-full'>
              <div class='flex flex-col gap-2 p-6'>
                {timeSlots.map(time => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    onClick={() => setSelectedTime(time)}
                    class='w-full shadow-none'
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
        <CardFooter class='flex flex-col gap-4 border-t px-6 !py-5 md:flex-row'>
          <div class='flex items-center gap-2 text-sm'>
            {date && selectedTime ? (
              <>
                <CircleCheck class='size-5 stroke-green-600 dark:stroke-green-400' />
                <span>
                  Your meeting is booked for{' '}
                  <span class='font-medium'>
                    {' '}
                    {date?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long'
                    })}{' '}
                  </span>
                  at <span class='font-medium'>{selectedTime}</span>.
                </span>
              </>
            ) : (
              <>Select a date and time for your meeting.</>
            )}
          </div>
          <Button disabled={!date || !selectedTime} class='w-full md:ml-auto md:w-auto' variant='outline'>
            Continue
          </Button>
        </CardFooter>
      </Card>
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Appointment calendar
      </p>
    </div>
  )
}


