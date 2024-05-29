export class CreateProductDto{
    name: string;
    barCode: string;
    brand: string;
    nutritionalFacts: Object;
    category: string;
    ingredients: Object;
    ingredientsFatcs: Array<string>;
    nutritionalFlags: Array<string>;
    image: string;
}