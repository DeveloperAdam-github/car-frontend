<setup>
</setup>

<template>
  <div class="w-full h-20 flex justify-between items-center">
    <div class="w-2/3 flex flex-col text-sm">
      <small class="text-gray-700"
        ><i class="fa-solid fa-location-pin text-gray-900"></i> Location</small
      >
      <p class="text-xs font-boldHeadline">London, United Kingdom</p>
    </div>
    <div class="w-1/3 flex justify-around">
      <div
        class="h-10 w-10 rounded-full flex items-center justify-center border"
      >
        <i class="fa-solid fa-bell"></i>
      </div>
      <div class="h-10 w-10 rounded-full flex items-center justify-center">
        <router-link class="h-full w-full rounded-full" to="/login">
          <img
            class="h-full w-full object-cover rounded-full"
            src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=620&quality=85&auto=format&fit=max&s=2bea9b176c9243144595bc4b79e9ab1b"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
