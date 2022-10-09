<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  car: {
    type: Object,
  },
});

const test = () => {
  console.log(props, 'what are props?');
};

test();
</script>

<template>
  <div
    class="w-1/2 text-black h-[100%] carousel-item flex flex-col mr-4 rounded-lg bg-gray-100 shadow-md shadow-gray-400"
  >
    <router-link
      class="w-full h-full flex flex-col"
      :to="{
        name: 'single-car',
        query: { car: car.name, id: car.id },
      }"
    >
      <div class="w-full h-3/5 bg-gray-200 rounded-tr-lg rounded-tl-lg">
        <!-- src="../assets/images/tesla.png" -->
        <img class="w-full h-full object-contain" :src="car.image" alt="" />
      </div>
      <div class="p-2 text-xs">
        <p class="text-xs w-full font-boldHeadline truncate">
          {{ car.name }}
        </p>
        <small class="text-gray-500"
          ><i class="fa-solid text-gray-900 fa-location-pin mr-2"></i
          >{{ car.location }}</small
        >
        <div class="flex h-full items-center justify-between text-xs">
          <div>
            <i class="fa-solid text-blue-700 fa-car mr-1"></i
            >{{ car.capacity }} Seats
          </div>
          <div class="">
            <i class="text-blue-700 fa-solid fa-sack-dollar mr-1"></i>£{{
              car.price
            }}/hr
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
