<script lang="ts">
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	const message =
		'Motion components will be available soon*. It is currently not possible to spread props on motion elements.';
</script>

<UnderConstruction {message} />

<!-- <script lang="ts">

</script>


import { useId, useState } from 'react'

import { motion, AnimatePresence, easeOut } from 'motion/react'

import { Checkbox } from '$lib/components/ui/checkbox'
import { Label } from '$lib/components/ui/label'

const particleAnimation = (index: number) => {
  const angle = Math.random() * Math.PI * 2
  const distance = 30 + Math.random() * 20

  return {
    initial: { x: '50%', y: '50%', scale: 0, opacity: 0 },
    animate: {
      x: `calc(50% + ${Math.cos(angle) * distance}px)`,
      y: `calc(50% + ${Math.sin(angle) * distance}px)`,
      scale: [0, 1, 0],
      opacity: [0, 1, 0]
    },
    transition: { duration: 0.4, delay: index * 0.05, ease: easeOut }
  }
}

const ConfettiPiece = ({ index }: { index: number }) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
  const color = colors[index % colors.length]

  return (
    <motion.div
      class='absolute h-1 w-1 rounded-full'
      style={{ backgroundColor: color }}
      {...particleAnimation(index)}
    />
  )
}

const CheckboxConfettiDemo = () => {
  const [showConfetti, setShowConfetti] = useState(false)

  const id = $props.id()

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 800)
    }
  }

  return (
    <div class='relative flex items-center gap-2'>
      <Checkbox id={id} onCheckedChange={handleCheckedChange} />
      <Label htmlFor={id}>Check to see magic</Label>
      <AnimatePresence>
        {showConfetti && (
          <div class='pointer-events-none absolute inset-0'>
            {[...Array(12)].map((_, i) => (
              <ConfettiPiece key={i} index={i} />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

 -->
