<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
const name = ref('');
const email = ref('');
const password = ref('');
const store = useUserStore();

const register = () => {
  store.submitForm(name.value, email.value, password.value);
};

const login = () => {
  store.submitLogin(email.value, password.value);
};
</script>

<template>
  <div
    class="h-screen bg-white w-full flex relative flex-col items-center justify-center"
  >
    <div
      class="w-full top-12 h-36 absolute flex items-center flex-col justify-center"
    >
      <img src="../assets/images/tesla.png" class="h-72" alt="" />
    </div>
    <div class="w-4/5 h-76 shadow-2xl rounded-lg bg-gray-100 p-4">
      <form @submit.prevent="register" action="" class="flex h-full flex-col">
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
            <span class="text-blue-600">
              <router-link to="/login"> Login here </router-link>
            </span>
          </small>
        </div>
      </form>
    </div>
  </div>
</template>
