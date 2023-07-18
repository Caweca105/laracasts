<script setup>
import Quiz from '@/components/Quiz/Quiz.vue'
import { state } from '@/store'
</script>

<template>
  <main>
    <Quiz :quiz="state" />
  </main>
</template>
