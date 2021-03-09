import {IUseCase} from "../../../../core/domain/IUseCase";
import {IProductItem} from "../interfaces/IProductItem";
import {IProductsRepo} from "../../data/interfaces/IProductRepo";

export class GetProductsListUseCase implements IUseCase<any, Array<IProductItem>> {
    private productsRepo: IProductsRepo

    constructor(productsRepo: IProductsRepo) {
        this.productsRepo = productsRepo;
    }

    async execute(): Promise<Array<IProductItem>> {
        return await this.productsRepo.getList();
    }
}
