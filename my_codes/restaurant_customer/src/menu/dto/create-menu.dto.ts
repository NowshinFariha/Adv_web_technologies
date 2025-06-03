import { IsString, IsNotEmpty, IsNumber, IsBoolean, MinLength } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  foodName: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  availability: boolean;
}
