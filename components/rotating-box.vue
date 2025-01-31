<template>
    <div class="flex items-center justify-center w-full h-full">
      <div
        class="p-4 bg-blue-5 rounded-[20px] max-w-[900px] cursor-pointer relative transition-transform duration-500 [transform-style:preserve-3d] flex flex-col items-center justify-center"
        :class="{ 'rotate-y-180': isBackVisible }"
      >
        <!-- Front Side -->
        <div
          v-if="!isBackVisible"
          class="w-full h-full flex items-center justify-center backface-hidden"
        >
          <slot name="front" />
        </div>
  
        <!-- Back Side -->
        <div
          v-else
          class="w-full h-full flex items-center justify-center rotate-y-180 backface-hidden"
        >
          <slot name="back" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  // Reactive state to toggle the visibility
  const isBackVisible = ref(false);
  
  // Automatically toggle every 10 seconds
  let intervalId;
  onMounted(() => {
    intervalId = setInterval(() => {
      isBackVisible.value = !isBackVisible.value;
    }, 5000);
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style>
  /* Tailwind CSS does not include backface-visibility, so we add it here */
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  </style>
  