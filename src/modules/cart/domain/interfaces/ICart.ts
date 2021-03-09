import {IProductItem} from "../../../products/domain/interfaces/IProductItem";

export interface ICart {
    id: number | null,
    products: Array<IProductItem>
    totalPrice: number

    addProduct(product: IProductItem): void;
    deleteProduct(ID: number): void;
}
