<script lang="ts">
	import ApplicationShell from './components/application-shell-01.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<ApplicationShell />
	</Sidebar.Provider>
</div>
