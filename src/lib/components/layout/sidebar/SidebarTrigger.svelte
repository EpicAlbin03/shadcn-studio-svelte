<script lang="ts">
  import { Menu } from '@lucide/svelte'
  import { Button } from '$lib/components/ui/button'
  import { useSidebar } from '$lib/components/ui/sidebar'

  const sidebar = useSidebar()
</script>

<Button variant="outline" size="icon" class="cursor-pointer lg:hidden" onclick={() => sidebar.toggle()}>
  <Menu class="size-5" />
  <span class="sr-only">Sidebar</span>
</Button>
