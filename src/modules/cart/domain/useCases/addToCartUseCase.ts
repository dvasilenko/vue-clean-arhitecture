import {IUseCase} from "../../../../core/domain/IUseCase";
import {IProductItem} from "../../../products/domain/interfaces/IProductItem";
import {ICartRepo} from "../../data/interfaces/ICartRepo";
import {Cart} from "../entities/Cart";

export class AddToCartUseCase implements IUseCase<IProductItem, Promise<void>> {
    private cartRepo: ICartRepo;
    private cart: Cart;

    constructor(cartRepo: ICartRepo, cart: Cart) {
        this.cartRepo = cartRepo;
        this.cart = cart;
    }

    async execute(product: IProductItem): Promise<void> {
        const newProduct:IProductItem  = await this.cartRepo.addToCart(product);
        this.cart.addToCart(newProduct);
    }
}
