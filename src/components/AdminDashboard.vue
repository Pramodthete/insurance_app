<script setup>
import Footer from './Footer.vue'
</script>

<template>
  <div class="admin">
    <div class="d-flex justify-content-evenly gap-4 top p-2">
      <Card>
        <template #title>Total Customers</template>
        <template #content>
          <div class="d-flex flex-wrap justify-content-between">
            <h2>8050</h2>
            <span class="pi pi-shopping-bag fs-1 text-success"></span>
          </div>

          <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </template>
      </Card>
      <Card>
        <template #title>Total Agents</template>
        <template #content>
          <div class="d-flex flex-wrap justify-content-between">
            <h2>750</h2>
            <span class="pi pi-briefcase fs-1 text-primary"></span>
          </div>

          <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore</p>
        </template>
      </Card>
      <Card>
        <template #title>Total Employees</template>
        <template #content>
          <div class="d-flex flex-wrap justify-content-between">
            <h2>105</h2>
            <span class="pi pi-users fs-1 text-warning"></span>
          </div>
          <p class="m-0">Lorem ipsum dolor sit amet, consectetur</p>
        </template>
      </Card>
      <Card>
        <template #title>Total Policies Purchased</template>
        <template #content>
          <div class="d-flex flex-wrap justify-content-between">
            <h2>15000+</h2>
            <span class="pi pi-heart fs-1 text-danger"></span>
          </div>
          <p class="m-0">Lorem ipsum dolor sit amet Inventore sed consequuntur error repudiandae</p>
        </template>
      </Card>
    </div>
  </div>
  <div>
    <RouterView />
  </div>
  <div class="p-2 notify">
    <h3 style="text-shadow: 1px 1px white">Notifications</h3>
    <Fieldset class="m-0">
      <div class="d-flex gap-4">
        <span class="pi pi-cart-plus"></span>

        <div>Policy Buy Successfully by Suraj Phakade from Sangli</div>
      </div>
    </Fieldset>

    <Fieldset class="m-0">
      <div class="d-flex gap-4">
        <span class="pi pi-dollar"></span>

        <div>Your request for withdrawal of 2500 Rs has been initiated.</div>
      </div>
    </Fieldset>

    <Fieldset class="m-0">
      <div class="d-flex gap-4">
        <span class="pi pi-question"></span>

        <div>Jane Davis has posted a new questions about your product.</div>
      </div>
    </Fieldset>

    <Fieldset class="m-0">
      <div class="d-flex gap-4">
        <span class="pi pi-cart-plus"></span>

        <div>Policy Buy Successfully by Vicky Yadav from Sangli</div>
      </div>
    </Fieldset>
  </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.p-card {
  width: 400px;
  box-shadow: 0px 0px 1px 1px rgb(202, 201, 201);
}
.admin {
  position: relative;
  top: 85px;
}
.notify {
  position: relative;
  top: 100px;
}
@media screen and (max-width: 700px) {
  .top {
    display: flex;
    flex-wrap: wrap;
  }
}
.pi-cart-plus {
  background-color: aquamarine;
  border-radius: 50%;
  padding: 15px;
}
.pi-dollar {
  background-color: rgb(239, 165, 236);
  border-radius: 50%;
  padding: 15px;
}
.pi-question {
  background-color: rgb(255, 204, 127);
  border-radius: 50%;
  padding: 15px;
}
</style>
