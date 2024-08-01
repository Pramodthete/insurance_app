<script setup>
import { ref } from 'vue'
import EditDialog from './EditDialog.vue'
const visible = ref(false)
const EditData = ref({})

const products = ref([
  {
    id: 1,
    code: 'C001',
    name: 'Suraj',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
    age: 12,
    category: 'Home Insurance',
    premium: 209.09,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 2,
    code: 'C002',
    name: 'Pramod',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
    age: 22,
    category: 'Car Insurance',
    premium: 504.88,
    inventoryStatus: 'Completed',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 3,
    code: 'C003',
    name: 'Mayur',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
    age: 22,
    category: 'Health Insurance',
    premium: 306.99,
    inventoryStatus: 'Completed',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 4,
    code: 'C004',
    name: 'Raj Shigade',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
    age: 24,
    category: 'Health Insurance',
    premium: 49.98,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 5,
    code: 'C005',
    name: 'Hrituj',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
    age: 29,
    category: 'Pet Insurance',
    premium: 204.77,
    inventoryStatus: 'On Going...',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 6,
    code: 'C006',
    name: 'Pranav',
    username: 'Josephine9966',
    email: 'jose55@gmail.com',
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
      return null
  }
}
const close = (vis) => {
  visible.value = vis
}
const updateData = (data) => {
  visible.value = true
  EditData.value = data
}
function onRowReorder(event) {
  const { dragIndex, dropIndex } = event

  const [draggedData] = products.value.splice(dragIndex, 1)

  products.value.splice(dropIndex, 0, draggedData)

  //   cars2.value = cars1.value.filter((car) => car)
}
</script>

<template>
  <div class="cust">
    <div class="card border-0 my-1 bg-warning">
      <!-- <Toolbar class="mb-6 w-100">
        <template #start>
          <Button label="New" outlined icon="pi pi-plus" severity="success" />
        </template>
      </Toolbar> -->

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
          @row-reorder="onRowReorder"
        >
          <template #header>
            <div class="d-flex flex-wrap gap-5">
              <h4 class="m-0">Manage Customers</h4>
              <InputGroup class="wi">
                <InputText placeholder="Search..." />
                <Button icon="pi pi-search" severity="warn" />
              </InputGroup>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <Column :rowReorder="true" headerStyle="width: 3em" />
          <div class="fix-width overflow-x-hidden ps-2">
            <Column field="code" header="Customer Id" sortable></Column>
            <Column field="name" header="Full Name" sortable></Column>
            <!-- <Column  header="Image">
          <template v-slot="slotProps">
            <img :src="slotProps.data.image" class="rounded" style="width: 64px" />
          </template>
        </Column> -->
            <Column field="age" header="Age" sortable>
              <template v-slot="slotProps">
                {{ formatCurrency(slotProps.data.age) }}
              </template>
            </Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="premium" header="Premiums /m" sortable>
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.premium) }}
              </template>
            </Column>
            <Column field="inventoryStatus" header="Status" sortable>
              <!-- <template v-slot="slotProps">
                <Tag :value="slotProps.data.inventoryStatus" />
              </template> -->
              <template #body="slotProps">
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data)"
                />
              </template>
            </Column>
            <Column field="actions" header="Actions" :exportable="false">
              <template #body="{ data }">
                <div class="flex flex-wrap gap-2">
                  <Button
                    icon="pi pi-pencil"
                    outlined
                    rounded
                    severity="help"
                    @click="updateData(data)"
                  />
                  <Button icon="pi pi-trash" outlined rounded severity="danger" />
                </div>
              </template>
            </Column>
            <EditDialog v-if="visible == true" :EditData="EditData" @updateDialog="close" />
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
