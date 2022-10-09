<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <main class="flex flex-col h-screen w-screen font-headline overflow-hidden">
    <div
      class="w-full bottom-0 absolute z-20 flex items-center justify-center p-6 text-black"
    >
      <Navbar />
    </div>
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </main>
</template>

<style scoped>
/* Route transitions */
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.router-enter-active {
  transition: all 0.4s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>
