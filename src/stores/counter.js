import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    showPopUp: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    toggleShowPopUp(value) {
      this.showPopUp = !this.showPopUp;
      console.log(this.showPopUp, 'whats the value here?');
    },
  },
});

// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';

// export const useGlobalStore = defineStore('global', () => {
//   const showPopUp = ref(true);

//   const toggleShowPopUp = (value) => {
//     this.showPopUp = !this.showPopUp;
//     console.log(showPopUp, 'whats the value here?');
//   };

//   return { showPopUp, toggleShowPopUp };
// });
