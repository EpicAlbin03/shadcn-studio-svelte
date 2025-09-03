<script lang="ts">

</script>




import { Calendar } from '$lib/components/ui/calendar';
	import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';

const CalendarCustomSelectDayDemo = () => {
  let value = $state<CalendarDate | undefined>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar
        type="single"
        bind:value

        class='rounded-md border'
        classs={{
          day_button:
            'rounded-full! data-[selected-single=true]:bg-sky-600! data-[selected-single=true]:text-white! data-[selected-single=true]:dark:bg-sky-400! data-[selected-single=true]:group-data-[focused=true]/day:ring-sky-600/20 data-[selected-single=true]:dark:group-data-[focused=true]/day:ring-sky-400/40',
          today: 'rounded-full! bg-accent!'
        }}
      />
      <p class='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Custom day select calendar
      </p>
    </div>
  )
}


