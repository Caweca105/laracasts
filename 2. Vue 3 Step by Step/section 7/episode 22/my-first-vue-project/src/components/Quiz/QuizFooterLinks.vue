<template>
  <div>
    <h5>{{ quiz.name }}</h5>

    <ul>
      <li><a href="#">Get a job</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue'

let quiz = inject('quiz')
</script>
