import { IsArray, IsMongoId, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindPRoductQueryDto {
  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? [value] : value))
  categoryId?: string[];
}
