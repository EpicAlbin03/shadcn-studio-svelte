<script lang="ts">
	import Team from './components/team-01.svelte';

	const teamMembers = [
		{
			image: '/blocks/team-01.webp',
			alt: 'Phillip Bothman',
			name: 'Phillip Bothman',
			role: 'Founder & CEO',
			description: 'A visionary leader driving innovation and collaboration.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-02.webp',
			alt: 'James Kenter',
			name: 'James Kenter',
			role: 'Engineering Manager',
			description: 'Leading teams to build smart, scalable solutions.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-03.webp',
			alt: 'Cristofer Kenter',
			name: 'Cristofer Kenter',
			role: 'Product Designer',
			description: 'Crafting intuitive and engaging user experiences.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-04.webp',
			alt: 'Alena Lubin',
			name: 'Alena Lubin',
			role: 'Frontend Developer',
			description: 'Bringing designs to life with seamless interfaces.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-05.webp',
			alt: 'Jayden Lipshultz',
			name: 'Jayden Lipshultz',
			role: 'Sales Lead',
			description: 'Driving business growth and strong client relationships.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-06.webp',
			alt: 'Maria Donin',
			name: 'Maria Donin',
			role: 'Product Manager',
			description: 'Bridging business needs with impactful solutions.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-07.webp',
			alt: 'Carter Saris',
			name: 'Carter Saris',
			role: 'UX Researcher',
			description: 'Uncovering insights to enhance user experiences.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		},
		{
			image: '/blocks/team-08.webp',
			alt: 'Ahmad Donin',
			name: 'Ahmad Donin',
			role: 'Customer Success',
			description: 'Ensuring customer satisfaction and long-term success.',
			socialLinks: {
				facebook: '#',
				twitter: '#',
				github: '#',
				instagram: '#'
			}
		}
	];
</script>

<Team {teamMembers} />
