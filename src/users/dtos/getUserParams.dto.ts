import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUsersParamsDto {
  @IsOptional()
  @IsInt({ message: 'id should be a number' })
  @Type(() => Number)
  id: number;
}
