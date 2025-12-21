<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { MotionSwitch } from '$lib/registry/ui/motion-switch';
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center space-x-2">
		<MotionSwitch aria-label="Animated small switch" size="sm" id="small-switch" />
		<Label for="small-switch">Small switch</Label>
	</div>
	<div class="flex items-center space-x-2">
		<MotionSwitch aria-label="Animated medium switch" size="md" id="medium-switch" />
		<Label for="medium-switch">Medium switch</Label>
	</div>
	<div class="flex items-center space-x-2">
		<MotionSwitch aria-label="Animated large switch" size="lg" id="large-switch" />
		<Label for="large-switch">Large switch</Label>
	</div>
</div>
