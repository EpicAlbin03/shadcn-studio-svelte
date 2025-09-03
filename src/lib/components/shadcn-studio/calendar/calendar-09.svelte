<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarWithMonthYearDropdownDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar
        type="single"
        bind:value

        class='rounded-md border'
        captionLayout='dropdown'
      />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Month and year dropdown calendar
      </p>
    </div>
  )
}


