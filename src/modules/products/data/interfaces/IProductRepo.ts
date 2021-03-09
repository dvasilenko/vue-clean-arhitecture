import {IProductItem} from "../../domain/interfaces/IProductItem";

export interface IProductsRepo {
    getList(): Promise<Array<IProductItem>>
}
