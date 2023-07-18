<template>
  <Transition
    enter-from-class="transition duration-1000 opacity-0"
    enter-to-class="opacity-100"
  >
    <div v-if="show" class="transition duration-1000 modal-mask">
      <div class="modal-container">
        <div><slot>default body</slot></div>

        <footer class="modal-footer">
          <slot name="footer"><button @click="$emit('close')">Close</button></slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean,
});
</script>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.moddal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.model-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.model-footer button:hover {
  background: #c8c8c8;
}
</style>
