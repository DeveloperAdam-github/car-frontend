<script setup>
import { ref } from '@vue/reactivity';
import { useGlobalStore } from '../stores/counter';

const globalStore = useGlobalStore();

const indexTab = ref(0);
const showPopUp = ref(false);

const swipeRight = () => {
  if (indexTab.value <= 2) {
    indexTab.value--;
  }

  if (indexTab.value == -1) {
    indexTab.value = 2;
  }
};
const swipeLeft = () => {
  if (indexTab.value == 2) {
    indexTab.value = -1;
  }

  if (indexTab.value < 2) {
    indexTab.value++;
  }
};

const hidePopUp = () => {
  // globalStore.showPopUp = false;
  globalStore.toggleShowPopUp(false);
  console.log('should be hiding the pop up?');
};

const popUpTimer = () => {
  setTimeout(() => {
    globalStore.toggleShowPopUp(false);
  }, 2000);
};

popUpTimer();
</script>

<template>
  <main class="w-full overflow-hidden h-screen text-black">
    <img
      class="h-full w-full object-cover"
      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/7166c24e-9516-46b2-82af-ffd8cb3c721e/bvlatuR/std/3536x1985/Model-X-Exterior-Grid-C-Desktop-Global"
    />
    <div
      class="h-96 fixed bottom-0 z-20 w-full bg-white p-4 rounded-tr-3xl rounded-tl-3xl flex flex-col overflow-hidden transition-all ease-out duration-700"
      :class="globalStore.showPopUp === true ? 'h-96' : 'h-0 -bottom-10'"
    >
      <div class="w-full flex items-center h-14 justify-center">
        <div
          :class="indexTab == 0 ? 'bg-blue-500' : 'bg-gray-300'"
          class="rounded-full h-3 w-3 shadow-md mx-1 transition-all"
          @click="indexTab = 0"
        ></div>
        <div
          :class="indexTab == 1 ? 'bg-blue-500' : 'bg-gray-300'"
          class="rounded-full h-3 w-3 shadow-md mx-1 transition-all"
          @click="indexTab = 1"
        ></div>
        <div
          :class="indexTab == 2 ? 'bg-blue-500' : 'bg-gray-300'"
          class="rounded-full h-3 w-3 shadow-md mx-1 transition-all"
          @click="indexTab = 2"
        ></div>
      </div>

      <!-- first page -->
      <div class="overflow-hidden h-full">
        <transition name="route" class="h-full w-full" v-show="indexTab === 0">
          <div
            class="h-full w-full overflow-hidden"
            :class="indexTab !== 0 ? 'absolute' : ''"
            v-touch:swipe.right="swipeRight"
            v-touch:swipe.left="swipeLeft"
            v-touch:swipe.down="hidePopUp"
          >
            <div class="w-full flex flex-col items-center">
              <h1 class="text-3xl font-boldHeadline">Rent a Vehicle</h1>
              <p class="text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis odio provident fugit iure. Dolorum, odio.
              </p>
            </div>
            <div class="w-full mt-2 flex flex-col justify-center items-center">
              <button
                class="w-full rounded-full bg-blue-500 text-white p-4 my-4"
              >
                Get Started
              </button>
              <p
                @click="hidePopUp"
                class="text-md hover:text-blue-500 hover:text-underline font-bold"
              >
                Skip
              </p>
            </div>
          </div>
        </transition>

        <!-- second page -->
        <transition name="route" class="h-full w-full" v-show="indexTab === 1">
          <div
            class="h-full w-full overflow-hidden"
            :class="indexTab !== 1 ? 'absolute' : ''"
            v-touch:swipe.right="swipeRight"
            v-touch:swipe.left="swipeLeft"
            v-touch:swipe.down="hidePopUp"
          >
            <div class="w-full flex flex-col items-center">
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur sequi culpa dicta accusantium atque vitae excepturi
                blanditiis ex minima quam, qui necessitatibus dolorem deserunt
                cupiditate similique libero quae.
              </p>
              <p class="my-4 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis minus obcaecati necessitatibus quam impedit
                voluptatibus repellat quia magnam nemo, blanditiis fugit nostrum
                odit!
              </p>
            </div>
          </div>
        </transition>

        <!-- third page -->
        <transition name="route" class="h-full w-full" v-show="indexTab === 2">
          <div
            class="h-full w-full overflow-auto flex flex-col items-center"
            :class="indexTab !== 2 ? 'absolute' : ''"
            v-touch:swipe.right="swipeRight"
            v-touch:swipe.left="swipeLeft"
            v-touch:swipe.down="hidePopUp"
          >
            <h1 class="font-boldHeadline text-lg uppercase">The best cars</h1>
            <h1 class="font-boldHeadline text-lg uppercase">The best prices</h1>
            <h1 class="font-boldHeadline text-lg uppercase">The best app</h1>
            <img
              src="https://www.pngmart.com/files/21/White-Tesla-Car-PNG-Transparent.png"
              alt=""
            />
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 1;
}

/* Route transitions */
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.router-enter-active {
  transition: all 0.4s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>
