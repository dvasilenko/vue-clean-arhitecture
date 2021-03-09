<template>
  <div class="container mx-auto flex flex-row flex-wrap">
    <product-list-item
      v-for="product in productList"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import useProductsList from "./composables/useProductsList";
import ProductListItem from "./components/ProductListItem.vue";

export default defineComponent({
  setup() {
    const { productList, getProductList } = useProductsList()

    onMounted(() => {
      getProductList();
    })

    return {
      productList,
    }
  },

  components: {
    ProductListItem
  }
})
</script>
