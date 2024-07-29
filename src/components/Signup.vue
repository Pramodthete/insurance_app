<script setup>
import { ref} from 'vue'
import router from '@/router';

const items = ref([
  { label: 'Employee', icon: 'pi pi-user',command:()=>{
    router.push('/signup/employee')
  } },
  { label: 'Customer', icon: 'pi pi-user-plus',command:()=>{
    router.push('/signup/customer')
  }},
  { label: 'Insurance Agent', icon: 'pi pi-briefcase',command:()=>{
    router.push('/signup/agent')
  } },

])
</script>

<template>
  <div class=" custom d-flex justify-content-center pt-4 flex-column align-items-center bg-light">
    <TabMenu  :model="items"/>
    <div>
       <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="scss">
// $gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0));

.custom{
    background-image: linear-gradient(180deg,rgba(50,50,50,.15),rgba(129,126,221,0))
}
</style>
