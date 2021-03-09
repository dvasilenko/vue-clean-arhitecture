import { toRefs, reactive, inject, ref } from 'vue'
import {IProductItem} from "../../domain/interfaces/IProductItem";
import {GetProductsListUseCase} from "../../domain/useCases/getProductsListUseCase";
import {ProductsRepo} from "../../data/repositories/ProductsRepo";

export default function () {
    const productList = ref<Array<IProductItem>>([]);

    const getProductList = async () => {
        productList.value = await new GetProductsListUseCase(new ProductsRepo()).execute();
    }

    return { productList, getProductList}
}
