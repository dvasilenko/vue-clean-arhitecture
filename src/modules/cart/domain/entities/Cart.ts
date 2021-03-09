import {ICart} from "../interfaces/ICart";
import {IProductItem} from "../../../products/domain/interfaces/IProductItem";

export type CartType = {
    id: number;
    products: Array<IProductItem>;
    totalPrice: number;
}

export class Cart implements ICart {
    id: number | null;
    products: Array<IProductItem>;
    totalPrice: number;

    public static createFromData(data: CartType) {
        return new Cart(data)
    }

    public static createEmpty() {
        return new Cart()
    }

    constructor(data?: CartType) {
        this.id = data?.id || null;
        this.products = data?.products || [];
        this.totalPrice = data?.totalPrice || 0;
    }

    addProduct(product: IProductItem) {
        this.products.push(product);
    }
    deleteProduct(ID: number) {
        this.products = this.products.filter(product => product.id !== ID);
    }
}
