<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue'
import { ref } from 'vue'

let comment = ref('test value')

setTimeout(() => {
  comment.value = 'test value 2'
}, 2000)
</script>

<template>
  <main>
    <form><TabbableTextarea v-model="comment" style="width: 100%; height: 300px" /></form>
  </main>
</template>
