<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarDisableDayDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 18))

  return (
    <div>
      <Calendar
        type="single"

        bind:value

        disabled={{
          before: new Date(2025, 5, 12)
        }}
        class='rounded-lg border'
      />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Disabled day calendar
      </p>
    </div>
  )
}


