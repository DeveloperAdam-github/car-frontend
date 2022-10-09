import { defineStore } from 'pinia';
import apiClient from '../services/api';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: '',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    submitForm(name, email, password) {
      console.log(name, email, password, 'do these come through?');
      apiClient
        .post('/api/register', { name, email, password })
        .then((response) => {
          console.log(response, 'registered?');
          this.user = response.data.user;
        });
    },
    submitLogin(email, password) {
      apiClient.post('/api/login', { email, password }).then((response) => {
        console.log(response, 'logged in?');
        this.user = response.data.user;
      });
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
