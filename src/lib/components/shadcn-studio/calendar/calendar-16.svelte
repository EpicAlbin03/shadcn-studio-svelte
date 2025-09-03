<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarLeftYearMonthDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar
        type="single"
        bind:value


        class='rounded-md border'
        classs={{
          month_caption: 'flex items-center h-8 justify-end',
          nav: 'flex justify-start absolute w-full items-center'
        }}
      />
      <p class='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Left side month year navigation calendar
      </p>
    </div>
  )
}


