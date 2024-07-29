  
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
  <div class="customer-details p-card p-shadow-3 p-p-3 bg-gradient-light">
    <h1>Customer Details</h1>
    <div v-if="customer">
      <div class="p-field d-flex justify-content-center flex-column align-items-center bg-gradient-info">
        <div class="d-flex justify-content-center w-50 h-50 bg-gradient-info">
        <img class="fixed-width rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&s" alt="">
        </div>
        <br>
        <h2>{{ customer.name }}</h2>
        <p>Email: {{ customer.email }}</p>
      </div>

      <h3>Policies</h3>
      <DataTable :value="customer.policies" class="p-datatable-sm">
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
  }
  h1, h2, h3 {
    color: #333;
  }

  .fixed-width{
    width: 100px;
  }
  </style>
  
  