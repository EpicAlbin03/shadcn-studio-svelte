<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/motion-radio-group';
</script>

<RadioGroup defaultValue="realtime">
	<div class="flex items-center gap-2">
		<RadioGroupItem value="realtime" id="notifications-realtime" />
		<Label for="notifications-realtime">Real-time</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="daily" id="notifications-daily" />
		<Label for="notifications-daily">Daily Digest</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroupItem value="none" id="notifications-none" />
		<Label for="notifications-none">No Notifications</Label>
	</div>
</RadioGroup> -->
