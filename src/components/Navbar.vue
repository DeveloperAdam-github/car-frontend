<script setup>
import { ref } from '@vue/reactivity';
import { useGlobalStore } from '../stores/counter';
import { useRouter, useRoute } from 'vue-router';

let activeTab = ref('home');
const route = useRoute();

const globalStore = useGlobalStore();

// const setActiveTab = (data) => {
//   activeTab.value = data;
// };

const showPopUpFnc = () => {
  globalStore.toggleShowPopUp(true);
};
</script>

<template>
  <div class="w-full mx-4" v-touch:swipe.up="showPopUpFnc">
    <nav
      class="bg-gray-900 w-full shadow-xl shadow-black h-16 rounded-full flex items-center z-50 justify-around"
    >
      <router-link to="/" class="text-gray-400">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
        >
          <i class="fa-solid fa-house-chimney"></i>
        </div>
      </router-link>
      <router-link to="/cars" class="text-gray-400">
        <!-- :class="
            activeTab === 'car'
              ? 'bg-white text-black text-lg'
              : 'bg-transparent text-gray-400'
          "
          @click="setActiveTab('car')" -->
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
        >
          <i class="fa-solid fa-car"></i>
        </div>
      </router-link>

      <router-link to=/calendar class="text-gray-400">
        <div
        class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
        >
        <i class="fa-solid fa-calendar-days"></i>
      </div>
    </router-link>
      <router-link to="/login" class="text-gray-400">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
        >
          <i class="fa-solid fa-user"></i>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<style>
.router-link {
  color: gray;
}
.router-link-exact-active {
  background: white !important;
  border-radius: 100%;
  color: black !important;
}
</style>
