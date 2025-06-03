import { Reservation } from './reservation.entity';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationService {
    private reservationRepository;
    constructor(reservationRepository: Repository<Reservation>);
    createReservation(createReservationDto: CreateReservationDto): Promise<Reservation>;
}
