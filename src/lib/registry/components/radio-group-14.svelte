<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { MotionRadioGroup, MotionRadioGroupItem } from '$lib/registry/ui/motion-radio-group';
</script>

<MotionRadioGroup value="realtime">
	<div class="flex items-center gap-2">
		<MotionRadioGroupItem value="realtime" id="notifications-realtime" />
		<Label for="notifications-realtime">Real-time</Label>
	</div>
	<div class="flex items-center gap-2">
		<MotionRadioGroupItem value="daily" id="notifications-daily" />
		<Label for="notifications-daily">Daily Digest</Label>
	</div>
	<div class="flex items-center gap-2">
		<MotionRadioGroupItem value="none" id="notifications-none" />
		<Label for="notifications-none">No Notifications</Label>
	</div>
</MotionRadioGroup>
