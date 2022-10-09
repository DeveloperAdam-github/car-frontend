<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';
import BookingCard from '../components/BookingCard.vue';
import apiClient from '../services/api';
const showLogin = ref(true);
const name = ref('');
const email = ref('');
const password = ref('');
const store = useUserStore();
const router = useRouter();
const showCarExtended = ref(false);

const goBack = () => {
  router.go(-1);
};

const bookingsView = ref(false);

const registerForm = () => {
  store.submitForm(name.value, email.value, password.value);
};

// watchEffect(() => {
//   if (user !== '') {
//     router.push('/');
//   }
// });

const loginForm = () => {
  store.submitLogin(email.value, password.value);
};
</script>

<template>
  <div
    class="h-screen bg-white text-black w-full flex relative flex-col items-center justify-center"
  >
    <div
      v-if="!store.user"
      class="w-full p-4 h-16 flex items-center justify-between"
    >
      <div class="w-5">
        <i class="fa-solid fa-arrow-left-long" @click="goBack"></i>
      </div>
      <div><h2>Login</h2></div>
      <div class="w-5"></div>
    </div>
    <div
      v-if="!store.user"
      class="h-full w-full flex flex-col items-center justify-center"
    >
      <div
        class="w-full top-20 h-36 absolute flex items-center flex-col justify-center"
      >
        <img src="../assets/images/tesla.png" class="h-64" alt="" />
      </div>
      <div class="w-4/5 h-76 shadow-2xl rounded-lg bg-gray-100 p-4">
        <transition name="slide-fade" mode="out-in">
          <form
            @submit.prevent="loginForm"
            v-show="showLogin"
            action=""
            class="flex h-full flex-col z-20"
            :class="showLogin === false ? 'absolute' : ''"
          >
            <input
              v-model="email"
              type="text"
              placeholder="Email"
              class="rounded-md my-4 h-10 pl-2 text-black"
            />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="rounded-md my-4 h-10 pl-2 text-black"
            />
            <button class="bg-gray-900 text-white px-4 py-2 my-4 rounded-lg">
              Login
            </button>
            <div class="p-4 flex-1 relative text-black">
              <small class="bottom-0 absolute"
                >Don't have an account?
                <span class="text-blue-600" @click="showLogin = false">
                  register
                  <!-- <router-link to="/register"> Register here </router-link>  -->
                </span>
              </small>
            </div>
          </form>
        </transition>

        <transition name="slide-fade" mode="out-in">
          <form
            @submit.prevent="registerForm"
            v-show="!showLogin"
            action=""
            class="flex h-full flex-col"
            :class="showLogin === true ? 'absolute' : ''"
          >
            <input
              v-model="name"
              type="text"
              placeholder="Name"
              class="rounded-md my-4 h-10 pl-2 text-black"
            />
            <input
              v-model="email"
              type="text"
              placeholder="Email"
              class="rounded-md my-4 h-10 pl-2 text-black"
            />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="rounded-md my-4 h-10 pl-2 text-black"
            />
            <button class="bg-gray-900 text-white px-4 py-2 my-4 rounded-lg">
              Register
            </button>
            <div class="p-4 flex-1 relative text-black">
              <small class="bottom-0 absolute"
                >Already have an account?
                <span class="text-blue-600" @click="showLogin = true"
                  >Login here
                </span>
              </small>
            </div>
          </form>
        </transition>
      </div>
    </div>
    <div class="w-full flex flex-col h-full text-black" v-if="store.user">
      <div class="w-full p-4 h-16 flex items-center justify-between">
        <div class="w-5">
          <i class="fa-solid fa-arrow-left-long" @click="goBack"></i>
        </div>
        <div><h2>Profile</h2></div>
        <div class="w-5"></div>
      </div>
      <div class="w-full p-4 flex items-center">
        <div class="w-full h-14 rounded-full bg-gray-200 flex p-0.5 relative">
          <div
            @click="bookingsView = !bookingsView"
            class="flex items-center justify-center w-1/2 bg-gray-900 z-20 h-[3.25rem] rounded-full transition-all duration-500"
            :class="bookingsView === false ? ' ' : ' translate-x-full'"
          >
            <p v-if="bookingsView === false" class="text-white">Profile</p>
            <p v-if="bookingsView === true" class="text-white">Bookings</p>
          </div>
          <div
            @click="bookingsView = !bookingsView"
            class="absolute w-1/2 flex items-center justify-center h-full transition-all"
            :class="bookingsView === false ? 'right-0' : 'left-0'"
          >
            <p v-if="bookingsView === false">Bookings</p>
            <p v-if="bookingsView === true">Profile</p>
          </div>
        </div>
      </div>
      <!-- PROFILE -->
      <div class="h-full w-full flex flex-col" v-show="bookingsView == false">
        <div class="w-full h-20 flex items-center justify-center">
          <div
            class="rounded-full relative h-20 w-20 bg-gray-200 p-1 flex items-center justify-center"
          >
            <img
              src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=620&quality=85&auto=format&fit=max&s=2bea9b176c9243144595bc4b79e9ab1b"
              alt=""
              class="rounded-full h-full w-full object-cover"
            />
            <div
              class="absolute h-6 w-6 rounded-full bg-gray-900 -right-1 top-2 flex items-center justify-center"
            >
              <i class="fa-solid fa-camera text-xs text-white"></i>
            </div>
          </div>
        </div>
        <div class="w-full h-full p-8 flex flex-col">
          <form action="" class="w-full flex flex-col">
            <label for="">Name</label>
            <input
              v-model="store.user.name"
              type="text"
              class="h-10 w-full rounded-lg pl-2 mb-4 border-2"
            />
            <label for="">Email</label>
            <input
              v-model="store.user.email"
              type="text"
              class="h-10 w-full rounded-lg pl-2 mb-4 border-2"
            />
            <label for="">Password</label>
            <input
              type="text"
              class="h-10 w-full rounded-lg pl-2 mb-4 border-2"
            />
            <label for="">Location</label>
            <select
              name=""
              id=""
              class="h-10 w-full rounded-lg pl-2 mb-4 border-2"
            >
              <option value=""></option>
            </select>
            <div class="w-full flex justify-center">
              <button
                class="bg-gray-900 w-36 m-4 px-4 py-2 rounded-lg text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- BOOKINGS -->
      <div
        class="h-full w-full flex flex-col px-4"
        v-show="bookingsView == true"
      >
        <div class="my-24">hello</div>
        <div class="w-full carousel flex h-full items-end pb-10 px-4">
          <BookingCard />
          <BookingCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
