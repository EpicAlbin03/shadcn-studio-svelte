<script lang="ts">
	import { Clock8Icon, MapPinIcon, BriefcaseBusinessIcon, PhoneIcon } from '@lucide/svelte';
	import ContactUs from './components/contact-us-01.svelte';

	const contactInfo = [
		{
			title: 'Office Hours',
			icon: Clock8Icon,
			description: 'Monday-Friday\n8:00 am to 5:00 pm'
		},
		{
			title: 'Our Address',
			icon: MapPinIcon,
			description: '802 Perston Rd,Maine\n96812, USA'
		},
		{
			title: 'Office 2',
			icon: BriefcaseBusinessIcon,
			description: '802 Perston Rd,Maine\n96812, USA'
		},
		{
			title: 'Get in Touch',
			icon: PhoneIcon,
			description: '+1-316-888-9685\n+1-316-477-0169'
		}
	];
</script>

<ContactUs {contactInfo} />
