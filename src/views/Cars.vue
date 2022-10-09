<script setup>
import TopNavProfile from '../components/TopNavProfile.vue';
import CarCard from '../components/CarCard.vue';
import BigCarCard from '../components/BigCarCard.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import apiClient from '../services/api';

const carList = ref(null);
const carSearchList = ref(null);
const manufacturerList = ref(null);
const search = ref('');
const loading = ref(false);

watch(
  search,
  (newSearch) => {
    console.log('watching....');
    if (newSearch === '') {
      resetSearch();
      console.log('reseting>');
    } else {
      searchForCars();
    }
  },
  { deep: true }
);

const getAllCars = () => {
  console.log('hello');

  apiClient.get('api/cars').then((response) => {
    carList.value = response.data;
    console.log(carList.value, 'the response?');
  });
};

const getAllManufacturers = () => {
  console.log('hello');

  apiClient.get('api/manufacturers').then((response) => {
    manufacturerList.value = response.data;
    console.log(manufacturerList.value, 'the response?');
  });
};

const resetSearch = () => {
  (loading.value = false), (carSearchList.value = null);
  search.value = '';
};

const searchForCars = () => {
  console.log('firing');
  loading.value = true;
  const params = {
    search: search.value,
  };
  apiClient.get('api/search-for-cars', { params }).then((response) => {
    console.log(response, 'lol it works?');
    carSearchList.value = response.data;
    loading.value = false;
  });
};

onMounted(() => {
  getAllCars();
  getAllManufacturers();
});
</script>

<template>
  <main
    class="bg-white w-full overflow-scroll p-4 h-screen flex flex-col text-black"
  >
    <TopNavProfile />
    <div class="w-full flex flex-col mt-4">
      <div class="w-full flex justify-between">
        <div
          class="flex h-10 w-4/5 justify-around bg-gray-200 mb-4 rounded-full items-center"
        >
          <i
            class="fa-solid fa-magnifying-glass mx-3 text-xl"
            @click="searchForCars"
          ></i>
          <form action="" @submit.prevent="searchForCars">
            <!-- @keydown="searchForCars" -->
            <input
              type="text"
              v-model="search"
              placeholder="Search for a car..."
              class="w-full bg-transparent outline-none focus:outline-none"
            />
          </form>
        </div>
        <div
          class="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center"
        >
          <i @click="resetSearch" class="fa-solid fa-filter text-white"></i>
        </div>
      </div>
      <div class="" v-if="search === '' && carSearchList == null">
        <div class="w-full flex my-4 justify-between carousel pb-10">
          <div
            class="h-20 w-20 flex flex-col items-center justify-center carousel-item"
            v-for="(manufacturer, index) in manufacturerList"
          >
            <div
              class="h-14 w-14 p-2 rounded-full bg-gray-900 shadow-md shadow-black flex flex-col"
            >
              <img
                :src="manufacturer.logo"
                class="w-full h-full rounded-full object-contain"
                alt=""
              />
            </div>
            <small class="text-xs mt-2">{{ manufacturer.name }}</small>
          </div>
        </div>
        <div class="w-full flex mt-4 flex-col">
          <h3 class="font-headline text-black mb-2">Best Cars</h3>
          <div class="flex w-full h-64 carousel py-4">
            <CarCard
              v-for="(car, index) in carList"
              :car="car"
              :index="index"
            />
          </div>
        </div>
        <div class="w-full flex flex-col py-4">
          <h3>Nearby</h3>
          <div class="flex w-full h-72 carousel py-4">
            <BigCarCard />
            <BigCarCard />
            <BigCarCard />
          </div>
        </div>
      </div>
      <div
        class="w-ful flex pt-8 items-center flex-col p-4 mb-14 carousel-vertical"
      >
        <!-- <div class="flex">
          <h2 class="flex text-xl font-boldHeadline" v-if="loading === true">
            Finding Cars
          </h2>
        </div> -->
        <div
          v-show="loading === true"
          class="w-full animate-pulse carousel-item text-black h-[64] flex flex-col rounded-lg bg-gray-100 shadow-md shadow-gray-400"
        >
          <router-link class="w-full h-full flex flex-col" to="/view-car2">
            <div class="w-full h-3/4 bg-gray-200 rounded-tr-lg rounded-tl-lg">
              <div class="h-48"></div>
            </div>
            <div class="p-2 text-xs">
              <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-36"></p>

              <div class="flex h-full items-center justify-between text-xs">
                <div>
                  <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-24"></p>
                </div>
                <div class="">
                  <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-28"></p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- <div
          v-show="loading === true"
          class="w-full animate-pulse text-black h-[64] my-4 carousel-item flex flex-col mr-4 rounded-lg bg-gray-100 shadow-md shadow-gray-400"
        >
          <router-link class="w-full h-full flex flex-col" to="/view-car2">
            <div class="w-full h-3/5 bg-gray-200 rounded-tr-lg rounded-tl-lg">
              <div class="h-48"></div>
            </div>
            <div class="p-2 text-xs">
              <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-36"></p>

              <div class="flex h-full items-center justify-between text-xs">
                <div>
                  <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-24"></p>
                </div>
                <div class="">
                  <p class="text-sm font-boldHeadline h-4 bg-gray-300 w-28"></p>
                </div>
              </div>
            </div>
          </router-link>
        </div> -->

        <div
          class="w-full text-black h-64 my-4 carousel-item flex flex-col rounded-lg bg-gray-100 shadow-md shadow-gray-400"
          v-for="(car, index) in carSearchList"
          :index="index"
          :car="car"
        >
          <router-link
            class="w-full h-full flex flex-col"
            :to="{
              name: 'single-car',
              query: { car: car.name, id: car.id },
            }"
          >
            <div class="w-full h-3/5 bg-gray-200 rounded-tr-lg rounded-tl-lg">
              <img class="w-full h-full object-cover" :src="car.image" alt="" />
            </div>
            <div class="p-4 text-xs">
              <p class="text-sm font-boldHeadline">{{ car.name }}</p>
              <small class="text-gray-500"
                ><i class="fa-solid text-gray-900 fa-location-pin mr-2"></i
                >Birmingham, UK</small
              >
              <div class="flex h-full text-base items-center justify-between">
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
      </div>
    </div>
  </main>
</template>

<style></style>
