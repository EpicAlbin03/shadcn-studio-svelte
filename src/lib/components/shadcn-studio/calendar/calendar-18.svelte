<script lang="ts">

</script>




import { Button } from '$lib/components/ui/button'
import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card'

const CalendarWithTodayMonthButtonDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 15))
  const [month, setMonth] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Book the show</CardTitle>
          <CardDescription>Find a date</CardDescription>
          <CardAction>
            <Button
              size='sm'
              variant='outline'
              onClick={() => {
                setMonth(new Date())
                setDate(new Date())
              }}
            >
              Today
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Calendar
            type="single"
            month={month}
            onMonthChange={setMonth}
            bind:value

            class='bg-transparent p-0'
          />
        </CardContent>
      </Card>
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with today button
      </p>
    </div>
  )
}


