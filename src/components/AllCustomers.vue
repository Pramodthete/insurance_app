<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    code: 'P001',
    name: 'Product 1',
    price: 29.99,
    category: 'Accessories',
    rating: 4,
    inventoryStatus: 'In Stock',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 2,
    code: 'P002',
    name: 'Product 2',
    price: 49.99,
    category: 'Clothing',
    rating: 5,
    inventoryStatus: 'Out of Stock',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 3,
    code: 'P003',
    name: 'Product 3',
    price: 99.99,
    category: 'Electronics',
    rating: 3,
    inventoryStatus: 'Low Stock',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 4,
    code: 'P004',
    name: 'Product 4',
    price: 199.99,
    category: 'Fitness',
    rating: 4,
    inventoryStatus: 'In Stock',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 5,
    code: 'P005',
    name: 'Product 5',
    price: 199.99,
    category: 'Fitness',
    rating: 4,
    inventoryStatus: 'In Stock',
    image: 'https://via.placeholder.com/64'
  },
  {
    id: 6,
    code: 'P006',
    name: 'Product 6',
    price: 199.99,
    category: 'Furniture',
    rating: 3,
    inventoryStatus: 'In Stock',
    image: './public/favicon.ico'
  }
])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script>

<template>
  <div>
    <div class="card border border-success p-2 my-1">
      <Toolbar class="mb-6 w-100">
        <template #start>
          <Button label="New" icon="pi pi-plus" severity="success" />
        </template>
      </Toolbar>

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
            <div class="d-flex flex-wrap gap-2">
              <h4 class="m-0">Manage Products</h4>
              <InputText placeholder="Search..." />
            </div>
          </template>
          <div class="fix-width overflow-x-hidden">
            <Column selectionMode="multiple" :exportable="false"></Column>
            <Column field="code" header="Customer Name" sortable></Column>
            <Column field="name" header="Full Name" sortable></Column>
            <!-- <Column  header="Image">
          <template v-slot="slotProps">
            <img :src="slotProps.data.image" class="rounded" style="width: 64px" />
          </template>
        </Column> -->
            <Column field="price" header="Price" sortable>
              <template v-slot="slotProps">
                {{ formatCurrency(slotProps.data.price) }}
              </template>
            </Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="rating" header="Reviews" sortable>
              <template v-slot="slotProps">
                <Rating :value="slotProps.data.rating" :readonly="true" />
              </template>
            </Column>
            <Column field="inventoryStatus" header="Status">
              <template v-slot="slotProps">
                <Tag :value="slotProps.data.inventoryStatus" />
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
                    @click="editProduct(slotProps.rowData)"
                  />
                  <Button
                    icon="pi pi-trash"
                    outlined
                    rounded
                    severity="danger"
                    @click="deleteProduct(slotProps.rowData)"
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
.fix-width {
  width: 950px;
}
</style>
