import QuizFooterLinks from './QuizFooterLinks.vue';

<template>
  <footer>
    <h4>Quiz Footer</h4>

    <QuizFooterLinks />
  </footer>
</template>

<script setup>
import QuizFooterLinks from './QuizFooterLinks.vue'

defineProps({
  quiz: Object
})
</script>
