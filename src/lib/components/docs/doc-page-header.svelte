<script lang="ts">
	type Props = {
		title: string;
		description: string;
	};

	let { title, description }: Props = $props();
</script>

<div class="flex flex-col items-start space-y-3">
	<h1 class="text-3xl font-bold sm:text-3xl">{title}</h1>
	<p class="text-muted-foreground">
		{description}
	</p>
</div>
