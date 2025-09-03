<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarVariableSizeDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar
        type="single"
        bind:value

        class='rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]'
      />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Variable size calendar
      </p>
    </div>
  )
}


