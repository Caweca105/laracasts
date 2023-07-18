<script setup>
import TheWelcome from '../components/TheWelcome.vue'

// eslint-disable-next-line no-undef
let message = $ref('Hello from HomeView')

setTimeout(() => {
  message = 'Hello from HomeView (updated)'
}, 3000)

let doSomething = () => {
  alert('Doing it now...')
}
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <p>
      <input type="text" v-model="message" />
    </p>
    <p>
      <button @click="doSomething">Click Me</button>
    </p>
  </main>
</template>
