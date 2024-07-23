<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import Footer from './Footer.vue';

const items = ref([
  { title: 'Scheme 1' },
  { title: 'Scheme 2' },
  { title: 'Scheme 3' },
  { title: 'Scheme 4' },
  { title: 'Scheme 5' },
  { title: 'Scheme 6' },
  { title: 'Scheme 7' },
  { title: 'Scheme 8' }
])
</script>

<template>
  <div class="container" style="width: 100%">
    <div class="p-4">
      <div class="text-center mb-4">
        <h1 class="text-primary p-3">
          Shield insurance makes sure <br />
          to cover all aspects of your life
        </h1>
        <!-- <p class="m-0 fs-5 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam
        </p> -->
      </div>

      <div class="d-flex justify-content-center align-items-center mb-4">
        <InputGroup class="w-50">
          <InputText placeholder="I'm looking for.." v-model="value3" type="text" size="medium" />
          <Button
            type="button"
            label="Search"
            icon="pi pi-search"
            :loading="loading"
            @click="load"
          />
        </InputGroup>
      </div>

      <div class="d-flex flex-wrap justify-content-center w-100">
        <div v-for="(item, index) in items" :key="index" class="m-2 fixed-width bg-warning">
          <Card class="bg-secondary text-light">
            <template #title>{{ item.title }}</template>
            <template #content>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                error repudiandae numquam deserunt quisquam
              </p>
            </template>
          </Card>
        </div>
      </div>

      <div class="mt-5 d-flex flex-wrap justify-content-center">
        <img
          id="img-scheme"
          src="https://media.istockphoto.com/id/1388146104/vector/health-insurance-contract-vector-illustration-of-insurance-concept.jpg?s=612x612&w=0&k=20&c=gjFpcqbtdWV5PXzj9ZLANekZ17ul6kFTqluOQvN82pI="
          alt="img"
        />
        <div class="mt-5">
          <h3 class="fs-1 text-info">Our key points</h3>
          <div class="mt-5 border-start border-dark ps-2">
            <h5>Up to 5% package discount</h5>
            <p>When taking out three or more policies you will get a discount on your premium</p>
          </div>
          <div class="mt-4 border-start border-dark ps-2">
            <h5>Available 24/7</h5>
            <p>Need help? Simply give us a call and we will take care of your case right away!</p>
          </div>
          <div class="mt-4 border-start border-dark ps-2">
            <h5>Personal contact for large claims</h5>
            <p>
              This means you will have to explain what happened once and save time as well as nerves
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.fixed-width {
  width: 280px;
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: none;
  }
}
#img-scheme {
  width: 500px;
}
@media screen and (max-width: 600px) {
  #img-scheme {
    width: 100%;
  }
}

</style>
