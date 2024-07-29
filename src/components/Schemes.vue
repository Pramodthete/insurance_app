<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import Footer from './Footer.vue'

const items = ref([
  { title: 'Scheme 1' },
  { title: 'Scheme 2' },
  { title: 'Scheme 3' },
  { title: 'Scheme 4' },
  { title: 'Scheme 5' },
  { title: 'Scheme 6' },
  { title: 'Scheme 7' },
  { title: 'Scheme 8' },
  { title: 'Scheme 9' },
  { title: 'Scheme 10' }
])
const list = ref([
  { title: 'Up to 5% package discount', value: 0 },
  { title: 'Available 24/7', value: 1 },
  { title: 'Personal contact for large claims', value: 2 }
])
</script>

<template>
  <div style="width: 100%; padding-top: 15px">
    <div class="p-2 pt-5">
      <div class="text-center d-flex flex-wrap justify-content-evenly pt-4 mb-4">
        <div class="rohit-img-div">
          <Image
            id="img-rohit"
            src="https://www.maxlifeinsurance.com/static-page/assets/homepage/banner1_desktop_rohit_68c900b630.webp"
            alt=""
          />
        </div>
        <!-- <div class="rohit-img-div">
          <Image
            id="img-rohit"
            src="https://www.maxlifeinsurance.com/static-page/assets/homepage/banner3_desktop_rohitt_ritika_b4f7056058_2e379c7773.webp"
            alt="Image"
          />
        </div> -->
        <div>
          <h1 class="text-primary display-3 p-3" style="font-weight: 400">
            Shield insurance makes sure <br />
            to cover all aspects of your life
          </h1>
          <Fieldset>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod
              tempor incididunt <br />
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              eiusmod tempor ullamco laboris <br />
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br />
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              eiusmod tempor Excepteur sint occaecat
              <br />
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              eiusmod tempor
            </p>
          </Fieldset>
          <div class="d-flex justify-content-center align-items-center pt-5 mb-4">
            <InputGroup class="w-100">
              <InputText placeholder="I'm looking for.." type="text" size="large" />
              <Button type="button" label="Search" icon="pi pi-search" />
            </InputGroup>
          </div>
        </div>

        <!-- <p class="m-0 fs-5 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam
        </p> -->
      </div>

      <div class="d-flex flex-wrap justify-content-center gap-5 pt-5">
        <div v-for="(item, index) in items" :key="index" class="m-0 fixed-width bg-warning mb-3">
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

      <!-- <Splitter style="height: 300px" class="mb-8">
        <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
      </Splitter> -->

      <div class="mt-5 mb-5 d-flex flex-wrap justify-content-evenly">
        <img
          id="img-scheme"
          src="https://media.istockphoto.com/id/1388146104/vector/health-insurance-contract-vector-illustration-of-insurance-concept.jpg?s=612x612&w=0&k=20&c=gjFpcqbtdWV5PXzj9ZLANekZ17ul6kFTqluOQvN82pI="
          alt="img"
        />
        <div class="mt-5 list">
          <Accordion :value="list[0].value">
            <AccordionPanel v-for="i in list" :key="i.value" :value="i.value">
              <AccordionHeader
                ><h5>{{ i.title }}</h5></AccordionHeader
              >
              <AccordionContent>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.fixed-width {
  width: 280px;
}
.list {
  width: 25%;
}
@media (max-width: 900px) {
  .list {
    width: 100%;
  }
  #img-scheme {
    width: 100%;
  }
}
#img-scheme {
  /* filter: drop-shadow(1px 1px 6px rgb(72, 169, 12)); */
  width: 35%;
}
#img-rohit {
  filter: drop-shadow(1px 1px 6px rgb(72, 169, 12));
  /* box-shadow: 1px 1px 6px orange; */
  /* width: 350px; */
}
@media screen and (max-width: 600px) {
  #img-scheme {
    width: 100%;
  }
  .rohit-img-div {
    display: none;
  }
}
</style>
