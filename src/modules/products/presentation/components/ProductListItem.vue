<template>
  <div class="flex p-3.5 shadow-md rounded-xl h-96 w-1/3 m-1.5">
    <img :src="product.image" alt="image" class="w-60">
    <div class="container text-center flex flex-col justify-between p-3.5">
      <h2 class="font-bold">{{ product.name }}</h2>
      <p class="mt-1">{{ product.description }}</p>
      <div class="container flex flex-row align-baseline justify-between">
        <p>
          Price:
          <span class="font-bold">${{ product.price }}</span>
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent } from 'vue'

export default defineComponent({
  props: {
    product: Object,
  },
});

</script>
