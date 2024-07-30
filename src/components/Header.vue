<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import router from '@/router'
import { ref } from 'vue'
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'customers',
    icon: 'pi pi-briefcase',
    command: () => {
      router.push('/admin/customers')
    }
  },
  {
    label: 'Employees',
    icon: 'pi pi-users',
    command: () => {
      router.push('/admin/employees')
    }
  },
  {
    label: 'Agents',
    icon: 'pi pi-briefcase',
    command: () => {
      router.push('/admin/agents')
    }
  },
  {
    label: 'Services',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Home Insurance',
        icon: 'pi pi-home',
        command: () => {
          router.push('/admin/policies')
        }
      },
      {
        label: 'Car Insurance',
        icon: 'pi pi-truck'
      },
      {
        label: 'Health Insurance',
        icon: 'pi pi-shield'
      },
      {
        label: 'Crop Insurance',
        icon: 'pi pi-sun'
      }
    ]
  }
])

const menu = ref()
const profile = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Profile',
        icon: 'pi pi-user'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
    ]
  }
])
const set = ref()
const setting = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Dark/Light Mode',
        icon: 'pi pi-moon',
        command: () => {
          console.log('heloooooooooooo')
          const element = document.querySelector('html')
          element.classList.toggle('my-app-dark')
          if (document.body.style.backgroundColor == 'black') {
            document.body.style.backgroundColor = 'white'
          } else {
            document.body.style.backgroundColor = 'black'
          }
        }
      }
    ]
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}
const toggleSet = (event) => {
  set.value.toggle(event)
}
</script>
<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <!-- <h2>Insurance App</h2> -->
        <img
          width="50px"
          class="ms-2 p-1 im"
          src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/insurance-protected-icon.png"
          alt=""
        />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="d-flex items-center gap-4">
          <!-- <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" /> -->
          <div>
            <i
              ref="flex"
              @click="flexes"
              class="pi pi-th-large"
              style="font-size: 1.4rem; margin-top: 14px"
            ></i>
          </div>
          <div>
            <i
              class="pi pi-spin pi-cog"
              aria-haspopup="true"
              @click="toggleSet"
              id="s"
              style="font-size: 1.7rem; margin-top: 11px"
            ></i>
            <Menu ref="set" id="s" :model="setting" :popup="true"> </Menu>
          </div>

          <div>
            <div class="flex justify-center">
              <Avatar
                aria-haspopup="true"
                @click="toggle"
                size="large"
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
              <Menu ref="menu" id="overlay_menu" :model="profile" :popup="true"> </Menu>
            </div>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.im {
  filter: drop-shadow(1px 4px 16px rgb(249, 249, 248));
  border-radius: 50%;
  border: 1px solid white;
  background-color: white;
}
.card {
  position: fixed;
  z-index: 1;
  width: 100%;
}
</style>
