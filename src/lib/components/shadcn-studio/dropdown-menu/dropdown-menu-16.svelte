<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Switch } from '$lib/components/ui/switch';

	let googleSwitch = $state(false);
	let twitterSwitch = $state(false);
	let linkedinSwitch = $state(false);
	let dribbbleSwitch = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Slide Up Animation</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenuContent
		class="w-56 duration-400 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:slide-out-to-left-0 data-[state=closed]:zoom-out-100 data-[state=open]:slide-in-from-bottom-20 data-[state=open]:slide-in-from-left-0"
	>
		<DropdownMenuLabel>Apps notification</DropdownMenuLabel>
		<DropdownMenuGroup>
			<DropdownMenuItem class="justify-between" onSelect={(event) => event.preventDefault()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="256" height="262" viewBox="0 0 256 262"
					><path
						fill="#4285f4"
						d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
					/><path
						fill="#34a853"
						d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
					/><path
						fill="#fbbc05"
						d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
					/><path
						fill="#eb4335"
						d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
					/></svg
				>
				<span class="flex-1">Google</span>
				<Switch id="airplane-mode" bind:checked={googleSwitch} />
			</DropdownMenu.Item>
			<DropdownMenuItem class="justify-between" onSelect={(event) => event.preventDefault()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="251" height="256" viewBox="0 0 251 256"
					><path
						d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z"
					/></svg
				>
				<span class="flex-1">Twitter</span>
				<Switch id="airplane-mode" bind:checked={twitterSwitch} />
			</DropdownMenu.Item>
			<DropdownMenuItem class="justify-between" onSelect={(event) => event.preventDefault()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"
					><path
						fill="#0a66c2"
						d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
					/></svg
				>
				<span class="flex-1">Linkedin</span>
				<Switch id="airplane-mode" bind:checked={linkedinSwitch} />
			</DropdownMenu.Item>
			<DropdownMenuItem class="justify-between" onSelect={(event) => event.preventDefault()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"
					><path
						fill="#e74d89"
						d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2S8.6 193.8 8.6 127.9S62 8.5 128 8.5"
					/><path
						fill="#b2215a"
						d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8s-57.4 127.9-128 127.9m107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7c14.3 39.2 20.1 71.2 21.2 77.8c24.6-16.5 42.1-42.7 46.9-73.1m-65.2 83.2c-1.6-9.6-8-43-23.3-82.8c-.2.1-.5.2-.7.2c-61.7 21.5-83.8 64.2-85.8 68.2c18.5 14.4 41.8 23 67.1 23c15.1.1 29.6-3 42.7-8.6M46.8 201c2.5-4.2 32.5-53.8 88.9-72.1c1.4-.5 2.9-.9 4.3-1.3c-2.7-6.2-5.7-12.4-8.9-18.5c-54.6 16.3-107.6 15.6-112.4 15.5c0 1.1-.1 2.2-.1 3.3c.1 28.1 10.7 53.7 28.2 73.1M21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2C50.9 43.6 28.1 71.8 21 105.6m81.4-83.8c3 4 22.9 31 40.8 63.9c38.9-14.6 55.3-36.6 57.3-39.4c-19.3-17.1-44.7-27.5-72.5-27.5c-8.8 0-17.4 1.1-25.6 3m110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1c2.5 5.2 5 10.5 7.3 15.8c.8 1.9 1.6 3.8 2.4 5.6c36.4-4.6 72.5 2.8 76.1 3.5c-.3-25.7-9.5-49.4-24.8-68"
					/></svg
				>
				<span class="flex-1">Dribbble</span>
				<Switch id="airplane-mode" bind:checked={dribbbleSwitch} />
			</DropdownMenu.Item>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu.Root>
