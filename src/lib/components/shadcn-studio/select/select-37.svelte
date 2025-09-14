<script lang="ts">

</script>



import { Label } from '$lib/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '$lib/components/ui/select'

const SelectMenuSlideInDemo = () => {
  const id = $props.id()

  return (
    <div class='w-full max-w-xs space-y-2'>
      <Label for={id}>Select menu slide-in from bottom</Label>
      <Select defaultValue='apple'>
        <SelectTrigger id={id} class='w-full'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent class='data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}


