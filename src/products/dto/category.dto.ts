import { MinLength } from 'class-validator';

export class CreateProductDto {
  @MinLength(1)
  name: string;
}
