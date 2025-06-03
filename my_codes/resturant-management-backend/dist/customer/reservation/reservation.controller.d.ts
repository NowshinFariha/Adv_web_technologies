import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: CreateReservationDto): Promise<import("./reservation.entity").Reservation>;
}
