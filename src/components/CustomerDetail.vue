  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  
  interface Policy {
    id: number;
    name: string;
    details: string;
    type: string;
    premium: string;
  }
  
  interface Customer {
    name: string;
    email: string;
    contact:string;
    policies: Policy[];
  }
  
  export default defineComponent({
    name: 'CustomerDetails',
    components: {
      DataTable,
      Column,
    },
    setup() {
      const customer = ref<Customer | null>(null);
  
      onMounted(() => {
        customer.value = {
          name: 'Vicky Yadav',
          email: 'vk.vk@gmail.com',
          contact: '9889304754',
          policies: [
            { id: 1, name: 'Health Insurance', details: 'Covers medical expenses', type: 'Health', premium: '$200/month' },
            { id: 2, name: 'Life Insurance', details: 'Life coverage of $100,000', type: 'Life', premium: '$50/month' },
            { id: 3, name: 'Car Insurance', details: 'Covers car damages and theft', type: 'Auto', premium: '$100/month' },
          ],
        };
      });
  
      return {
        customer,
      };
    },
  });
  </script>

<template>
  <div class="customer-details p-card p-shadow-3 p-p-3">
    
    <div v-if="customer">
      

      <DataTable :value="customer.policies" class="p-datatable-sm">
        <template #header> 
          <h4>Customer Details</h4>
<div class="mycard card p-2 m-auto p-field d-flex justify-content-center flex-column align-items-center">
        <div class="d-flex justify-content-center w-50 h-50">
        <img class="fixed-width rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&s" alt="">
        </div>
        <br>
        <h2>{{ customer.name }}</h2>
        <h5>Email: {{ customer.email }}</h5>
        <h5>Contact: {{ customer.contact }}</h5>
        
      </div>
      <h4>Policies</h4>
    
        </template>
        <Column field="id" header="Policy ID" />
        <Column field="name" header="Policy Name" />
        <Column field="details" header="Policy Details" />
        <Column field="type" header="Type" />
        <Column field="premium" header="Premium" />
      </DataTable>
    </div>
    <div v-else>
      <p>Loading customer details...</p>
    </div>
  </div>
</template>
  
  <style scoped>
  .customer-details {
    font-family: Arial, sans-serif;
    margin: 20px;
    /* background-image: linear-gradient(rgba(123,121,122),rgba(212,33,45)); */
  }
  h1, h2, h3 {
    color: #333;
  }

  .fixed-width{
    width: 100px;
  }

  .mycard{
    background-image: linear-gradient(rgba(123,121,122),rgba(212,33,45));
    color: white;
    width: 50%;
  }

  .mycard img{
    border:1px solid white
  }

  .mycard h2{
    color: white;
  }


  @media screen and (max-width:600px){
    .mycard{
      width: 100%;
    }
  }
  </style>
  
  