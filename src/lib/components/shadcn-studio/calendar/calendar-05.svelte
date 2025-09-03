<script lang="ts">

</script>




import { type DateRange } from 'react-day-picker'

import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarRangeWithMinimumDaysDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 8),
    to: new Date(2025, 5, 17)
  })

  return (
    <div>
      <Calendar
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={1}
        min={5}
        class='rounded-lg border'
      />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Minimum 5 days selection
      </p>
    </div>
  )
}


