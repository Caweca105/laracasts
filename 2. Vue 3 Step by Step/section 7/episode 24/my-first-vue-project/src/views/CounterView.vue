<script setup>
import { counter } from '@/stores/counterStore.js'
</script>

<template>
  <div>
    <p>{{ counter.count }}</p>

    <button @click="counter.increment">Increment</button>
  </div>
</template>
