import { IsNumber, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsDateString()
  paymentDate: string;
}