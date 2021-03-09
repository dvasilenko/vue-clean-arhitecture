import {IProductsRepo} from "../interfaces/IProductRepo";
import {IProductItem} from "../../domain/interfaces/IProductItem";
import {ProductList} from "../../../../api/__mock__/ProductList";

export class ProductsRepo implements IProductsRepo {
    public async getList(): Promise<Array<IProductItem>> {
        return Promise.resolve(ProductList);
    }
}
