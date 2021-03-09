import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import {RouterNames} from "./router-names";
const ProductList = import('../modules/products/presentation/ProductList.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNames.PRODUCTS_LIST,
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
