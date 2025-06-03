import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateCustomerDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @IsNotEmpty()
  @IsOptional()
  fullName?: string;
}