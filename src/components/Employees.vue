<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    code: 'C001',
    name: 'Akash ambani',
    age: 12,
    category: 'Bike Insurance',
    premium: 209.09,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 2,
    code: 'C002',
    name: 'Pramod Musk',
    age: 22,
    category: 'Car Insurance',
    premium: 504.88,
    inventoryStatus: 'Completed',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 3,
    code: 'C003',
    name: 'Mayur Shinde',
    age: 22,
    category: 'Health Insurance',
    premium: 306.99,
    inventoryStatus: 'Completed',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 4,
    code: 'C004',
    name: 'Raj Kapoor',
    age: 24,
    category: 'Health Insurance',
    premium: 49.98,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 5,
    code: 'C005',
    name: 'Yash Patil',
    age: 29,
    category: 'Pet Insurance',
    premium: 204.77,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 6,
    code: 'C006',
    name: 'Rohit Sharma',
    age: 21,
    category: 'Crop Insurance',
    premium: 199.85,
    inventoryStatus: 'Completed',
    image: './public/favicon.ico'
  }
])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(value)
}
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'Completed':
      return 'success'

    case 'On Going...':
      return 'warn'

    default:
      return 'info'
  }
}
</script>

<template>
  <div class="cust">
    <div class="card border-0 my-1 bg-warning">

      <div>
        <DataTable
          ref="dt"
          :value="products"
          dataKey="id"
          :paginator="true"
          :rows="10"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 25]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        >
          <template #header>
            <div class="d-flex flex-wrap gap-5 justify-content-between">
              <h4 class="m-0">Employee Details</h4>
              <InputGroup class="wi">
                <InputText placeholder="Search..." />
                <Button icon="pi pi-search" severity="info" />
              </InputGroup>
            </div>
          </template>
          <div class="fix-width overflow-x-hidden ps-2">
            <Column field="code" header="Customer Id" sortable></Column>
            <Column field="name" header="Full Name" sortable></Column>
            <Column field="age" header="Age" sortable>
              <template v-slot="slotProps">
                {{ formatCurrency(slotProps.data.age) }}
              </template>
            </Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="premium" header="Commission/m" sortable>
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.premium) }}
              </template>
            </Column>
            <Column field="inventoryStatus" header="Status" sortable>
              <template #body="slotProps">
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data)"
                />
              </template>
            </Column>
            <Column field="actions" header="Actions" :exportable="false">
              <template #body>
                <div class="flex flex-wrap gap-2">
                  <Button
                    icon="pi pi-pencil"
                    outlined
                    rounded
                    severity="help"
                    
                  />
                  <Button
                    icon="pi pi-trash"
                    outlined
                    rounded
                    severity="danger"
                  />
                </div>
              </template>
            </Column>
          </div>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cust {
  position: relative;
  top: 100px;
}
.fix-width {
  width: 950px;
}
.wi {
  width: 25%;
}


@media screen and (max-width: 700px) {
  .wi {
    width: 100%;
  }
}
</style>
