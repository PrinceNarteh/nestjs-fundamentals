import { IsOptional } from 'class-validator';
import { IsPositiveInt } from '../decorators/is-positive-int.decorator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositiveInt()
  limit: number;

  @IsOptional()
  @IsPositiveInt()
  offset: number;
}
