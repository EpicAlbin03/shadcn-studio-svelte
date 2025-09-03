<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarWeekNumberDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar
        type="single"

        bind:value

        class='rounded-lg border shadow-sm'
        showWeekNumber
      />
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Week number calendar
      </p>
    </div>
  )
}


