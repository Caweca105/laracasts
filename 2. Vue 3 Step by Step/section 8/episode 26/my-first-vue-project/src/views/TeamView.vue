<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import Modal from "@/components/Modal.vue";
import { useTeamStore } from "@/stores/TeamStore.js";
import { ref } from "vue";

let team = useTeamStore();

team.fill();

let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal :show="showModal" @close="showModal = false">
    <template #default>
      <p>Need to add a new member to your team</p>

      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email" cl-1ass="flex-1" />
          <button type="submit">Add Member</button>
        </div>
      </form>
    </template>
  </Modal>
</template>
