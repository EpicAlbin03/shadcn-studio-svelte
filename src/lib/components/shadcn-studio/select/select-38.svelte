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

const SelectMenuZoomInDemo = () => {
  const id = $props.id()

  return (
    <div class='w-full max-w-xs space-y-2'>
      <Label for={id}>Select menu zoom-in</Label>
      <Select defaultValue='apple'>
        <SelectTrigger id={id} class='w-full'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent class='data-[state=open]:!zoom-in-0 origin-center duration-400'>
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


