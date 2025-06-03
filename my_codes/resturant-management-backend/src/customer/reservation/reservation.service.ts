import { Injectable } from '@nestjs/common';
import { Reservation } from './reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const reservation = new Reservation();
    reservation.customerName = createReservationDto.customerName;
    reservation.reservationTime = createReservationDto.reservationTime;
    return this.reservationRepository.save(reservation);
  }
}
