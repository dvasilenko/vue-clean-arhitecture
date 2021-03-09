import {IProductItem} from "../../../products/domain/interfaces/IProductItem";
import {ICart} from "../../domain/interfaces/ICart";

export interface ICartRepo {
    addToCart(product: IProductItem): Promise<IProductItem>;
    deleteFromCart(ID: number): void;
    getCart(): Promise<ICart>
}
