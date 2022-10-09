<script setup>
import { ref } from 'vue';
import DatePicker from '../components/DatePicker.vue';
const date = ref(null);
</script>
<template>
  <div class="flex flex-col bg-white w-full h-full p-8">
    <div class="w-full h-96 flex">
      <DatePicker />
    </div>
  </div>
</template>
