<script lang="ts">
	import Navbar from './components/navbar-01.svelte';

	const navigationData = [
		{
			title: 'Home',
			href: '#'
		},
		{
			title: 'Products',
			href: '#'
		},
		{
			title: 'About Us',
			href: '#'
		},
		{
			title: 'Contacts',
			href: '#'
		}
	];
</script>

<div class="h-60">
	<Navbar {navigationData} />
</div>
