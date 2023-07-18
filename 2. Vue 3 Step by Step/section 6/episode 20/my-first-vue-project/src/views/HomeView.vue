<script setup>
// import { ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'tacos')
let age = useStorage('age', '30')

// let food = ref(localStorage.getItem('food'))
// let age = ref(localStorage.getItem('age'))

// watch(food, (val) => {
//   write('food', val)
// })

// function write(key, val) {
//   localStorage.setItem(key, val)
// }

// setTimeout(() => {
//   food.value = 'changed'
//   age.value = 30
// }, 2000)
</script>

<template>
  <main>
    <p>What is your favorite food?<input type="text" v-model="food" /></p>

    <p>How old are you?<input type="text" v-model="age" /></p>
  </main>
</template>
