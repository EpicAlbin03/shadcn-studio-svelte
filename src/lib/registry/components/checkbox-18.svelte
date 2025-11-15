<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">

</script>



import { Checkbox } from '$lib/registry/ui/motion-checkbox'
import { Label } from '$lib/components/ui/label'

const CheckboxAnimatedTodoListDemo = () => {
  const id = $props.id()

  return (
    <div class='flex items-center gap-2'>
      <Checkbox
        id={id}
        defaultChecked
        class='rounded-full focus-visible:border-blue-500 focus-visible:ring-blue-500/20 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500! dark:text-white dark:focus-visible:ring-blue-500/40'
      />
      <Label
        htmlFor={id}
        class='after:bg-primary peer-data-[state=checked]:text-primary relative after:absolute after:start-0 after:top-1/2 after:h-px after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100'
      >
        Animated todo list item
      </Label>
    </div>
  )
}

 -->
