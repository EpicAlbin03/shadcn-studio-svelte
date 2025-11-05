<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
</script>

<RadioGroup value="basic">
	<div class="flex gap-2">
		<RadioGroupItem value="basic" id="plan-basic" />
		<div class="grid flex-1 space-y-2">
			<Label for="plan-basic">Basic Plan</Label>
			<p class="text-xs text-muted-foreground">Perfect for individuals just getting started</p>
		</div>
	</div>
	<div class="flex gap-2">
		<RadioGroupItem value="pro" id="plan-pro" />
		<div class="grid flex-1 space-y-2">
			<Label for="plan-pro">Pro Plan</Label>
			<p class="text-xs text-muted-foreground">Advanced features for power users and small teams</p>
		</div>
	</div>
	<div class="flex gap-2">
		<RadioGroupItem value="enterprise" id="plan-enterprise" />
		<div class="grid flex-1 space-y-2">
			<Label for="plan-enterprise">Enterprise Plan</Label>
			<p class="text-xs text-muted-foreground">Custom solutions for large organizations</p>
		</div>
	</div>
</RadioGroup>
