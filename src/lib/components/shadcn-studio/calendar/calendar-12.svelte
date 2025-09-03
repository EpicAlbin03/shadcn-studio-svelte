<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarMultiSelectDemo = () => {
  const [dates, setDates] = useState<Date[]>([new Date(2025, 5, 12), new Date(2025, 5, 17)])

  return (
    <div>
      <Calendar mode='multiple' required selected={dates} onSelect={setDates} max={5} class='rounded-lg border' />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Multi day select calendar
      </p>
    </div>
  )
}


