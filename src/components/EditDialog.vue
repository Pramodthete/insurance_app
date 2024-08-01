<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  EditData: Object
})
let vis = true
const emit = defineEmits(['updateDialog', 'updateEmp'])
const close = () => {
  vis = false
  console.log(vis)
  emit('updateDialog', false)
}
// const visible = ref(false)
</script>

<template>
  <div class="card d-flex justify-center">
    <Dialog v-model:visible="vis" modal header="Update Agent" :style="{ width: '25rem' }">
      <!-- <span class="">Update Agent Info.</span> -->
      <div class="">
        <label for="username">Username</label><br />
        <InputText
          id="username"
          :value="EditData.username"
          class="flex-auto w-100"
          autocomplete="off"
        />
      </div>
      <div class="">
        <label for="email">Email</label><br />
        <InputText id="email" :value="EditData.email" class="flex-auto w-100" autocomplete="off" />
      </div>
      <div class="">
        <label for="name">Full Name</label><br />
        <InputText id="name" :value="EditData.name" class="flex-auto w-100" autocomplete="off" />
      </div>
      <br />
      <div class="d-flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="close"></Button>
        <Button type="button" label="Save" @click="vis = false"></Button>
      </div>
    </Dialog>
  </div>
</template>
