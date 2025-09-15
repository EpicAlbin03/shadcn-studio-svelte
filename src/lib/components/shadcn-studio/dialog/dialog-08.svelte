<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
</script>

<Dialog>
	<DialogTrigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Terms & Condition</Button>
		{/snippet}
	</DialogTrigger>
	<DialogContent class="gap-0 p-0 sm:max-h-[min(600px,80vh)] sm:max-w-md">
		<DialogHeader class="contents space-y-0 text-left">
			<DialogTitle class="border-b px-6 py-4">Terms and Condition</DialogTitle>
			<div class="px-6 py-4 text-sm text-muted-foreground">
				<ol class="flex list-decimal flex-col gap-2 pl-4">
					<li>
						<strong class="text-primary">Eligibility:</strong> You must be at least 18 years old to use
						this service.
					</li>
					<li>
						<strong class="text-primary">Account Responsibility:</strong>You are responsible for
						maintaining the confidentiality of your account and password.
					</li>
					<li>
						<strong class="text-primary">Usage:</strong>Do not misuse or attempt to disrupt the
						service.
					</li>
					<li>
						<strong class="text-primary">Data Collection:</strong>We collect and use your data as
						described in our Privacy Policy.
					</li>
					<li>
						<strong class="text-primary">Modifications:</strong>We reserve the right to update or
						modify these terms at any time.
					</li>
					<li>
						<strong class="text-primary">Termination:</strong>YWe may suspend or terminate your
						access if you violate these terms.
					</li>
				</ol>
				<p class="mt-3">
					For full details, please read our complete
					<a href="#!" class="text-sky-600 hover:underline dark:text-sky-400">
						Terms & Conditions
					</a>
				</p>
			</div>
			<DialogFooter class="px-6 pb-4 sm:justify-end">
				<DialogClose>
					{#snippet child({ props })}
						<Button {...props} variant="outline">Cancel</Button>
					{/snippet}
				</DialogClose>
				<DialogClose>
					{#snippet child({ props })}
						<Button {...props} type="button">I Agree</Button>
					{/snippet}
				</DialogClose>
			</DialogFooter>
		</DialogHeader>
	</DialogContent>
</Dialog>
