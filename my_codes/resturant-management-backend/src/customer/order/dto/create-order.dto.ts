import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @IsNotEmpty()
  orderDetails: string;

  @IsNumber()
  totalAmount: number;

  @IsString()
  @IsOptional()
  status: string;
}