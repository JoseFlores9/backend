import { IsNotEmpty, MinLength,IsDefined, IsOptional} from "class-validator";

export class CreateProductDto {
    @MinLength(1)
    name: string;
    @IsDefined()
    barCode: string;
    @IsDefined()
    brand: string;
    @IsOptional()
    nutritionalFacts: Object;
    @IsDefined()
    category: string;
    @IsOptional()
    ingredients: Object;
    @IsOptional()
    ingredientsFacts: Array<string>;
    @IsOptional()
    nutritionalFlags: Array<string>;
    @IsDefined()
    image: string;
}
