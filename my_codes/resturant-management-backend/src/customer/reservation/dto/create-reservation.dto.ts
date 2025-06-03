import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsDateString()
  reservationTime: string;
}