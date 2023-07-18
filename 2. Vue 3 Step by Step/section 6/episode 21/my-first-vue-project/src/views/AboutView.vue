<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It works on the about page!', 'info')">Click Me</button>
    </p>
  </div>
</template>

<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
