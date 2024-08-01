<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import router from '@/router'

const items = ref([
  {
    label: 'Employee',
    icon: 'pi pi-user',
    command: () => {
      router.push('/signup/employee')
    }
  },
  {
    label: 'Customer',
    icon: 'pi pi-user-plus',
    command: () => {
      router.push('/signup/customer')
    }
  },
  {
    label: 'Agent',
    icon: 'pi pi-briefcase',
    command: () => {
      router.push('/signup/agent')
    }
  }
])
</script>

<template>
  <div class="d-flex justify-content-center pt-4 flex-column align-items-center bg-light">
    <TabMenu :model="items" class="tab" />
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
/* @media screen and (max-width:440px){
  .tab{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
} */

@media screen and (max-width: 370px) {
  .tab {
    width: 100%;
  }
}
</style>
