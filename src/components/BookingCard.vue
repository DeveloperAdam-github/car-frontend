<script setup>
import { ref } from 'vue';
const showCarExtended = ref(false);
</script>

<template>
  <div
    @click="showCarExtended = !showCarExtended"
    class="mx-4 carousel-item w-[92%] bg-transparent h-52 flex flex-col relative transition-all duration-700"
  >
    <div
      class="w-full h-24 flex items-center justify-center rounded-tr-xl rounded-tl-xl bg-gray-900 z-10 absolute"
    >
      <div
        class="w-full flex items-center justify-center rounded-tr-xl rounded-tl-xl transition-all duration-700 bg-gray-900 z-10 relative"
        :class="showCarExtended === true ? 'h-72 ' : 'h-12'"
      >
        <div
          class="w-full flex text-left bg-transparent text-white py-16 px-4 h-full"
        >
          <div class="w-full h-5 flex justify-between items-center">
            <p class="test-white text-lg">Tesla Model X</p>
            <i class="fa-solid fa-star text-[#F4B755]"></i>
          </div>
        </div>
        <img
          src="../assets/images/tesla.png"
          class="w-64 object-cover absolute z-40 transition-all duration-700"
          :class="showCarExtended === false ? '-bottom-40' : 'bottom-44'"
          alt=""
        />
      </div>
    </div>
    <div
      class="h-52 w-full flex flex-col rounded-xl bg-white border shadow-md z-20 bottom-0"
    >
      <div class="w-full flex justify-between p-4">
        <p>12 - 17 Sept</p>
      </div>
    </div>
  </div>
</template>
