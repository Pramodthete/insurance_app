<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CustomerService } from '@/service/CustomerService'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'
import EditDialog from './EditDialog.vue'

const customers = ref()
const selectedCustomers = ref()
const filters = ref()
const visible = ref(false)
const EditData = ref({})

onMounted(() => {
  CustomerService.getCustomersLarge().then((data: any) => {
    customers.value = getCustomers(data)
  })
})

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    'country.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
    },
    activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  }
}

initFilters()

const formatDate = (value: {
  toLocaleDateString: (arg0: string, arg1: { day: string; month: string; year: string }) => any
}) => {
  return value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
const formatCurrency = (value: {
  toLocaleString: (arg0: string, arg1: { style: string; currency: string }) => any
}) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'INR' })
}
const getCustomers = (data: any) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date)
    return d
  })
}
const getSeverity = (status: any) => {
  switch (status) {
    case 'unqualified':
      return 'danger'

    case 'qualified':
      return 'success'

    case 'new':
      return 'info'

    case 'negotiation':
      return 'warn'

    case 'renewal':
      return null
  }
}
function onRowReorder(event: { dragIndex: any; dropIndex: any }) {
  const { dragIndex, dropIndex } = event

  const [draggedData] = customers.value.splice(dragIndex, 1)

  customers.value.splice(dropIndex, 0, draggedData)

  //   cars2.value = cars1.value.filter((car) => car)
}

const close = (vis: boolean) => {
  visible.value = vis
}
const updateData = (data: {}) => {
  visible.value = true
  EditData.value = data
}
</script>

<template>
  <div class="card" style="margin-top: 100px">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomers"
      :value="customers"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="menu"
      :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
      @row-reorder="onRowReorder"
    >
      <template #header>
        <div class="d-flex flex-wrap justify-content-start gap-5">
          <h3>Manage Employees</h3>
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </IconField>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <Column :rowReorder="true" headerStyle="width: 3em" />
      <Column field="name" header="Name" sortable style="min-width: 14rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
      </Column>
      <Column header="Country" style="min-width: 14rem">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img
              alt="flag"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${data.country.code}`"
              style="width: 24px"
            />
            <span>{{ data.country.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Agent" style="min-width: 14rem">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <span>{{ data.representative.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="date" header="Date" dataType="date" style="min-width: 10rem">
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
      </Column>
      <Column
        field="balance"
        header="Balance"
        sortable
        filterField="balance"
        dataType="numeric"
        style="min-width: 10rem"
      >
        <template #body="{ data }">
          {{ formatCurrency(data.balance) }}
        </template>
      </Column>
      <Column header="Status" field="status" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status) || undefined" />
        </template>
      </Column>
      <Column field="activity" header="Activity" style="min-width: 12rem">
        <template #body="{ data }">
          <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
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
    </DataTable>
  </div>
</template>
