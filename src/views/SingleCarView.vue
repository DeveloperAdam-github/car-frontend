<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import apiClient from '../services/api';

const showInformation = ref(false);
const router = useRouter();
const route = useRoute();
const carData = ref(null);

const toggleShowInformation = () => {
  showInformation.value = !showInformation.value;
};

const showInformationOnSwipe = () => {
  showInformation.value = true;
};

const hideInformationOnSwipe = () => {
  showInformation.value = false;
};

const goBack = () => {
  router.go(-1);
};

const getCarData = () => {
  console.log(route.query.id, 'testing 12312312');
  const carId = route.query.id;
  const params = {
    id: carId,
  };
  apiClient.get('/api/car-data', { params }).then((response) => {
    carData.value = response.data[0];
    console.log(carData.value, 'the response?');
  });
};

getCarData();

onMounted(() => {});
</script>

<template>
  <div
    v-if="carData !== null"
    class="bg-gray-100 w-full overflow-hidden h-screen flex flex-col text-black"
  >
    <div class="flex h-20 items-center p-4 justify-between">
      <div
        @click="goBack"
        class="h-10 w-10 rounded-full flex items-center border border-gray-400 justify-center"
      >
        <i class="fa-solid fa-arrow-left-long"></i>
      </div>
      <div>
        <h3>Car Details</h3>
      </div>
      <div
        @click="toggleShowInformation"
        class="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center"
      >
        <div class="h-1.5 w-1.5 rounded-full border-2 border-black"></div>
        <div
          class="h-1.5 w-1.5 rounded-full border-2 border-black mx-0.5"
        ></div>
        <div class="h-1.5 w-1.5 rounded-full border-2 border-black"></div>
      </div>
    </div>

    <div
      :class="showInformation === false ? 'h-full' : 'h-1/3 '"
      class="w-full transition-all duration-700"
    >
      <img
        v-touch:swipe.top="showInformationOnSwipe"
        v-touch:swipe.bottom="hideInformationOnSwipe"
        :src="carData.image"
        class="h-full w-full image-flip transition-all duration-700 object-contain"
        alt=""
      />
    </div>
    <div
      :class="showInformation === false ? 'h-0' : ' h-2/3 p-4 py-8'"
      class="w-full transition-all duration-700 flex flex-col bg-white rounded-tr-3xl rounded-tl-3xl shadow-2xl shadow-black overflow-y-auto"
    >
      <div class="w-full flex flex-col">
        <h3 class="font-boldHeadline text-xl">{{ carData.name }}</h3>
        <p>£{{ carData.price }}/Hr</p>
        <small class="text-gray-500"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</small
        >
        <hr class="m-4" />
      </div>

      <div class="w-full h-full flex flex-col">
        <h3>Specification</h3>
        <div class="flex w-full h-[7rem] my-4 justify-between">
          <div
            class="h-full w-1/3 rounded-xl bg-blue-100 mx-1 flex flex-col items-center justify-center"
          >
            <div
              class="h-8 w-8 flex items-center justify-center bg-white rounded-full"
            >
              <i class="fa-solid text-blue-700 fa-car"></i>
            </div>
            <small>Capacity</small>
            <p class="text-sm font-bold">{{ carData.capacity }} Seats</p>
          </div>
          <div
            class="h-full w-1/3 py-4 rounded-xl bg-blue-100 mx-1 flex flex-col items-center justify-center"
          >
            <div
              class="h-8 w-8 flex items-center justify-center bg-white rounded-full"
            >
              <i class="fa-solid fa-bolt text-blue-700"></i>
            </div>
            <small>Engine Size</small>
            <p class="text-sm font-bold">{{ carData.engine_size }}HP</p>
          </div>
          <div
            class="h-full w-1/3 rounded-xl bg-blue-100 mx-1 flex flex-col items-center justify-center"
          >
            <div
              class="h-8 w-8 flex items-center justify-center bg-white rounded-full"
            >
              <i class="fa-solid fa-gauge text-blue-700"></i>
            </div>
            <small>Max Speed</small>
            <p class="text-sm font-bold">
              {{ carData.max_speed }}
              <span class="text-xs scroll"> mph </span>
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maiores blanditiis dolorem optio autem, consequuntur eum,
            accusantium quaerat magni consequatur possimus est asperiores quam.
            Corrupti.
          </p>
        </div>
        <div class="w-full flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maiores blanditiis dolorem optio autem, consequuntur eum,
            accusantium quaerat magni consequatur possimus est asperiores quam.
            Corrupti.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-flip {
  transform: scaleX(-1);
}
</style>
