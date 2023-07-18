<script setup>
import { useCounterStore } from "@/stores/CounterStore.js";

let counter = useCounterStore();
</script>

<template>
  <div>
    <p>{{ counter.count }}</p>

    <button :disabled="!counter.remaining" @click="counter.increment()">
      Increment ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>
