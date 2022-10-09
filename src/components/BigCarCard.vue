<setup>

</setup>

<template>
  <div
    class="w-4/5 text-black h-[100%] carousel-item flex flex-col mr-4 rounded-lg bg-gray-100 shadow-md shadow-gray-400"
  >
    <router-link class="w-full h-full flex flex-col" to="/view-car2">
      <div class="w-full h-3/5 bg-gray-200 rounded-tr-lg rounded-tl-lg">
        <img
          class="w-full h-full object-cover"
          src="../assets/images/tesla2.png"
          alt=""
        />
      </div>
      <div class="p-2 text-xs">
        <p class="text-sm font-boldHeadline">Tesla Model 3</p>
        <small class="text-gray-500"
          ><i class="fa-solid text-gray-900 fa-location-pin mr-2"></i
          >Birmingham, UK</small
        >
        <div class="flex h-full items-center justify-between text-xs">
          <div><i class="fa-solid text-blue-700 fa-car mr-1"></i>4 Seats</div>
          <div class="">
            <i class="text-blue-700 fa-solid fa-sack-dollar mr-1"></i>£30/hr
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
