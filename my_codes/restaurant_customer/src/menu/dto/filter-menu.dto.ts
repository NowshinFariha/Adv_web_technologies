import { IsString, IsOptional } from 'class-validator';

export class FilterMenuDto {
  @IsString()
  @IsOptional()
  foodName?: string;
}