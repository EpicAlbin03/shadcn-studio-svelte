<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import ApplicationShell from './components/application-shell-01.svelte';
</script>

<div class="flex min-h-dvh w-full">
	<Sidebar.Provider>
		<ApplicationShell />
	</Sidebar.Provider>
</div>
