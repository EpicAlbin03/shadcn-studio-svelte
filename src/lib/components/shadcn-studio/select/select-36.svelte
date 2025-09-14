<script lang="ts">
  
</script>


import { Header, ListBox, ListBoxItem, ListBoxSection, Separator } from 'react-aria-components'

import { Label } from '$lib/components/ui/label'

const ListBoxWithOptionGroupsDemo = () => {
  return (
    <div class='w-full max-w-xs space-y-2'>
      <Label>Listbox with option groups</Label>
      <div class='border-input overflow-hidden rounded-md border'>
        <ListBox
          class='bg-background max-h-65 min-h-20 space-y-2 overflow-auto p-1 text-sm shadow-xs transition-[color,box-shadow]'
          aria-label='Select some foods'
          selectionMode='multiple'
          defaultSelectedKeys={['english', 'tuna']}
        >
          <ListBoxSection class='space-y-1'>
            <Header class='text-muted-foreground px-2 py-1.5 text-xs font-medium'>European Languages</Header>
            <ListBoxItem
              id='english'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              English
            </ListBoxItem>
            <ListBoxItem
              id='french'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              French
            </ListBoxItem>
            <ListBoxItem
              id='spanish'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Spanish
            </ListBoxItem>
          </ListBoxSection>
          <Separator class='bg-border -mx-1 my-2 h-px' />
          <ListBoxSection class='space-y-1'>
            <Header class='text-muted-foreground px-2 py-1.5 text-xs font-medium'>Asian Languages</Header>
            <ListBoxItem
              id='hindi'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Hindi
            </ListBoxItem>
            <ListBoxItem
              id='japanese'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Japanese
            </ListBoxItem>
            <ListBoxItem
              id='mandarin'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Mandarin
            </ListBoxItem>
          </ListBoxSection>
          <Separator class='bg-border -mx-1 my-2 h-px' />
          <ListBoxSection class='space-y-1'>
            <Header class='text-muted-foreground px-2 py-1.5 text-xs font-medium'>Other Languages</Header>
            <ListBoxItem
              id='swahili'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Swahili
            </ListBoxItem>
            <ListBoxItem
              id='arabic'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Arabic
            </ListBoxItem>
            <ListBoxItem
              id='russian'
              class='data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]'
            >
              Russian
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>
      <p class='text-muted-foreground text-xs' role='region' aria-live='polite'>
        Built using{' '}
        <a
          href='https://react-spectrum.adobe.com/react-aria/ListBox.html'
          class='hover:text-primary underline'
          target='_blank'
        >
          React Aria
        </a>
      </p>
    </div>
  )
}


